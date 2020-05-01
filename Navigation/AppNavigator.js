import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../HomeScreen'

const HomeStack = createStackNavigator()

function AppNavigator() {
    return(
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen
                 name='Home' 
                 component={HomeScreen}
                 options={
                     {headerShown: false}
                 }
                 />
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator