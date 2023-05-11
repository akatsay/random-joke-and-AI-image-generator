import {useState} from 'react'
import { Text, View, Pressable, FlatList, TouchableOpacity  } from 'react-native'

import { JokeStyles } from '../styles/JokeStyles' 
import { ImageModal } from './ImageModal'

export const Joke = ({jokeText}: {jokeText: string}) => {

    const [modalVisible, setModalVisible] = useState<boolean>(false)

    return (
        <>
            {modalVisible && <ImageModal jokeText={jokeText} modalVisible={modalVisible} onModalClose={() => setModalVisible(false)}/>}
            <TouchableOpacity 
                onLongPress={() => setModalVisible(true)}
                style={JokeStyles().jokeContainer}
            >
                <Text style={JokeStyles().jokeText}>{jokeText}</Text>
            </TouchableOpacity >
        </>
    )
  }