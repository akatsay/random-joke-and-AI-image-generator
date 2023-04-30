const { Configuration, OpenAIApi } = require("openai");
import API from '../secret/secret';
import { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, Modal, Button, Alert, ActivityIndicator } from 'react-native'

import { ImageModalStyles } from '../styles/ImageModalStyles';

export interface IProps {
    jokeText: string
    modalVisible: boolean
    onModalClose: () => void
}

export const ImageModal = ({jokeText, modalVisible, onModalClose}: IProps) => {

    const [imgURL, setImgURL] = useState<string | null>(null)
    const [hasError, setHasError] = useState<boolean>(false)

    const fetchImage = useCallback( async () => {
        const configuration = new Configuration({
            apiKey: API,
          })
        const openai = new OpenAIApi(configuration)

        try {
            const response = await openai.createImage({
                prompt: jokeText,
                n: 1,
                size: "256x256",
              });
              setImgURL(response.data.data[0].url);
        } catch (error) {
            Alert.alert('couldn\t generate image, try again with another joke :(')
            setHasError(true)
            console.error(error);
        }
    }, []) 

    useEffect(() => {
        fetchImage()
    }, [fetchImage])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                onModalClose();
            }}
        >
            <View style={ImageModalStyles().modalView}>
                <View style={ImageModalStyles().imageView}>
                    {
                    imgURL ? 
                      <Image
                          style={{width: 256, height: 256}}
                          source={{
                          uri: imgURL,
                          }}
                      />
                    :
                    <>
                    {!hasError ?
                      <>
                        <ActivityIndicator size="large" />
                        <Text style={{alignSelf: 'center', marginTop: 10}}>Loading...</Text>
                      </>
                      :
                        <Text style={{alignSelf: 'center', marginTop: 50, color: 'crimson'}}>
                            Error happened :( try again with another joke
                        </Text>
                    }
                    </>
                    }
                </View>
                <Text style={{marginVertical: 30}}>{jokeText}</Text>
                <Button
                title='Close'
                onPress={() => onModalClose()}
                />
            </View>
        </Modal>
    )
  }

