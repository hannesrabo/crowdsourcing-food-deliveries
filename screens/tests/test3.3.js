import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import NavigationService from '../../routing/NavigationService';

export default class test3_2 extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, paddingBottom: 40, backgroundColor: 'white' }}>
                <Text style={{ paddingBottom: 20, fontSize: 30, }}>Personal Recommendation:</Text>
                <View style={{ borderColor: 'black', borderWidth: 2, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, margin: 15, flex: 2 }} >Carrots</Text>
                    <Text style={{ fontSize: 15, margin: 15, flex: 5 }} >Carrots grows well in your area and has seen an increasing demand.</Text>
                </View>
                <View style={{ borderColor: 'black', borderWidth: 2, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, margin: 15, flex: 2 }} >Potatoes</Text>
                    <Text style={{ fontSize: 15, margin: 15, flex: 5 }} >During the upcoming months, the production of potatoes falls and prices increase.</Text>
                </View>
                <View style={{ borderColor: 'black', borderWidth: 2, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, margin: 15, flex: 2 }} >Tomatoes</Text>
                    <Text style={{ fontSize: 15, margin: 15, flex: 5 }} >Drought in northern parts of Kenya is causing problems for farmers. The prices are increasing on the general market.</Text>
                </View>
            </View>
        )
    }
}