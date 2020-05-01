import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import AppNavigator from './Navigation/AppNavigator'

class App extends Component{
    
    render(){
        return(
            <AppNavigator />
        )
    }
}

const styles = StyleSheet.create({

})

export default App