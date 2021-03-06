import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import NavigationService from '../../routing/NavigationService';

export default class test3 extends Component {
    goToPage = (pageName) => {
        NavigationService.navigate(pageName)
    }

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, }}>
                <Text style={{ paddingBottom: 20, fontSize: 30 }}>Test 3 - How to asses the quality of others</Text>
                <View style={{ paddingBottom: 20 }} ><Button title="Version 1" onPress={() => { this.goToPage("test3_1") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Version 2" onPress={() => { this.goToPage("test3_2") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Version 3" onPress={() => { this.goToPage("test3_3") }} color='#9c0000' /></View>
            </View>
        )
    }
}