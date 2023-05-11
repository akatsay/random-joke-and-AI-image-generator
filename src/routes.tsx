import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './pages/index'
import JokesScreen from './pages/JokesScreen'

const Stack = createNativeStackNavigator()

export const Routes = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
      <Stack.Screen
        name="JokesScreen"
        component={JokesScreen}
        options={{title: 'Jokes'}}
      />
      </Stack.Navigator>
    </>
  )
}