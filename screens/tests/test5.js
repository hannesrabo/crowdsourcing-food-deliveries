import React, { Component } from '../../../../../.cache/typescript/2.9/node_modules/@types/react'
import { View, Text, Button } from 'react-native'

import NavigationService from '../../routing/NavigationService';

export default class test5 extends Component {
    goToPage = (pageName) => {
        NavigationService.navigate(pageName)
    }

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, }}>
                <Text style={{ paddingBottom: 20, fontSize: 30 }}>Test 4 - Presentation of Contracts</Text>
                <View style={{ paddingBottom: 20 }} ><Button title="Version 1" onPress={() => { this.goToPage("test5_1") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Version 2" onPress={() => { this.goToPage("test5_2") }} color='#9c0000' /></View>
                {/* <View style={{ paddingBottom: 20 }} ><Button title="Version 3" onPress={() => { this.goToPage("test4_3") }} color='#9c0000' /></View> */}
            </View>
        )
    }
}