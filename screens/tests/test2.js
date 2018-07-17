import React, { Component } from '../../../../../.cache/typescript/2.9/node_modules/@types/react'
import { View, Text, Button } from 'react-native'

import NavigationService from '../../routing/NavigationService';

export default class test2 extends Component {
    goToPage = (pageName) => {
        NavigationService.navigate(pageName)
    }

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, }}>
                <Text style={{ paddingBottom: 20, fontSize: 30 }}>Test 2 - How business intelligence is presented</Text>
                <View style={{ paddingBottom: 20 }} ><Button title="Version 1" onPress={() => { this.goToPage("test2_1") }} color='#9c0000' /></View>
                <View style={{ paddingBottom: 20 }} ><Button title="Version 2" onPress={() => { this.goToPage("test2_3") }} color='#9c0000' /></View>
            </View>
        )
    }
}