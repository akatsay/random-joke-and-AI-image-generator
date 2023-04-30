import { StyleSheet } from 'react-native'

export const ImageModalStyles = () => {
    return (
        StyleSheet.create({
            centeredView: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            },
            modalView: {
              marginTop: '50%',
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            },
            imageView: {
                width: 256,
                height: 256,
            },
          })
    )
}