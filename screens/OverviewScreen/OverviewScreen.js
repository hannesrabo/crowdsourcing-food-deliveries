import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import NavigationService from '../../routing/NavigationService';


export default class OverviewScreen extends Component {

    goToPage = (pageName) => {
        NavigationService.navigate(pageName)
    }

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, }}>
                <Text style={{ paddingBottom: 20, fontSize: 30 }}>Tests</Text>
                <View style={{ paddingBottom: 20 }} ><Button title="Test 1" onPress={() => { this.goToPage("test1") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Test 2" onPress={() => { this.goToPage("test2") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Test 3" onPress={() => { this.goToPage("test3") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Test 4" onPress={() => { this.goToPage("test4") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Test 5" onPress={() => { this.goToPage("test5") }} color='#9c0000' /></View>
            </View>
        )
    }
}