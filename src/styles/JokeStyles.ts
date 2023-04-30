import { StyleSheet } from 'react-native'

export const JokeStyles = () => {
    return (
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'beige',
            alignItems: 'center',
            justifyContent: 'center',
        },
        jokeContainer: {
            borderRadius: 10,
            marginHorizontal: 10,
            marginVertical: 5,
            backgroundColor: '#abd7eb'
        },
        jokeText: {
            margin:10,
            fontSize: 15
        }
    })
    )
}