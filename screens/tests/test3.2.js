import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import NavigationService from '../../routing/NavigationService';

export default class test3_2 extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, paddingBottom: 40, backgroundColor: 'white' }}>
                <Text style={{ paddingBottom: 20, fontSize: 50, }}>Trends in Demand - Since last 3 months</Text>
                <View style={{ borderColor: 'black', borderBottomWidth: 2, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Product </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Increased in demand     </Text>
                </View>
                <View style={{ borderColor: 'black', borderWidth: 2, padding: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, }} >Carrots</Text>
                    <Text style={{ fontSize: 20, }} >15 %</Text>
                </View>
                <View style={{ borderColor: 'black', borderWidth: 2, padding: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, }} >Potatoes</Text>
                    <Text style={{ fontSize: 20, }} >7%</Text>
                </View>
                <View style={{ borderColor: 'black', borderWidth: 2, padding: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, }} >Tomatoes</Text>
                    <Text style={{ fontSize: 20, }} >4%</Text>
                </View>
            </View>
        )
    }
}