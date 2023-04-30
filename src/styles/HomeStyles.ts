import { StyleSheet } from 'react-native'

export const HomeStyles = () => {
    return (
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'beige',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        welcome: {
            marginTop: 50,
            fontSize: 20,
            fontWeight: 'bold',

        },
        instructionTitle: {
            marginTop: 50,
            marginBottom: 40,
            fontSize: 20
        },
        instructionContainer: {
            marginHorizontal: 25,
            paddingVertical: 20,
            borderRadius: 10,
            backgroundColor: '#abd7eb'
        },
        text: {
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 10,
            marginVertical: 20
        },
        button: {
            borderRadius: 10,
            marginTop: 70,
            backgroundColor: '#DC143C'
        },
        buttonText: {
            color: 'white',
            fontSize: 20,
            margin: 30,
            fontWeight: 'bold',
        }
        
    }))
}
