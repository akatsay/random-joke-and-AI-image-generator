import { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Alert } from 'react-native'
import {ListRenderItem} from 'react-native';
import axios from 'axios';

import { Joke } from '../components/Joke';

export interface Ijoke {
    category: string
    flags: {"explicit": boolean, "nsfw": boolean, "political": boolean, "racist": boolean, "religious": boolean, "sexist": boolean}
    id: string
    lang: string
    safe: boolean
    joke: string
    type: string
}

import { JokeStyles } from '../styles/JokeStyles' 

export const JokesScreen = () => {

    const [jokes, setJokes] = useState<Ijoke[] | null[]>([])

    const fetchJokes = useCallback( async () => {

        const options = {
            method: 'GET',
            url: 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10',
        };

        try {
            const response = await axios.request(options);
            setJokes(response.data.jokes)
        } catch (error) {
            Alert.alert('Couldn\'t get jokes at this time, try again later :(')
        }
    }, []) 

    useEffect(() => {
        fetchJokes()
    }, [])

    const renderItem: ListRenderItem<Ijoke> = ({ item }) => (
        <Joke jokeText={item.joke}/>
     )

    return (

    <View style={JokeStyles().container}>
        { jokes && <FlatList
            scrollEnabled
            data={jokes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />}
    </View>
    )
  }