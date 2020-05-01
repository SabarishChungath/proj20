import React, { Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'
import axios from 'react-native-axios'

const monthDef = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class HomeScreen extends Component{
    constructor(props) {
        super(props)
        this.state={
            states: []
        }
    }
    getmonth(dateString){// 29/04/2020 23:16:45
        console.log(dateString)
        let monthNum = Number(dateString.slice(3, 5)) //this gives 04
        console.log(monthNum)
        let month = monthDef[monthNum - 1]
        console.log(month)
    }

    componentDidMount(){
        axios.get('https://api.covid19india.org/data.json')
        .then(res => {
            const data = res.data
            // console.log(res.data)
            const states = data.statewise
            this.setState({ states })
            // console.log(this.state.states)
        })
    }

    render(){
        let filteredStates = this.state.states.map((item) => item.statecode)
        console.log(filteredStates)
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
                <Text>
                    HomeScreen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default HomeScreen