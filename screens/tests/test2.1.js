import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import NavigationService from '../../routing/NavigationService';

export default class test2_1 extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, paddingBottom: 40, backgroundColor: 'white' }}>
                <Text style={{ paddingBottom: 20, fontSize: 50, }}>Contracts:</Text>
                <View style={{ borderColor: 'black', borderBottomWidth: 2, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Product </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Details  </Text>
                </View>
                <TouchableOpacity>
                    <View style={{ borderColor: 'black', borderWidth: 2, padding: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, }} >Carrots</Text>
                        <Text style={{ fontSize: 20, }} >20 KGs / Week</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ borderColor: 'black', borderWidth: 2, padding: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, }} >Potatoes</Text>
                        <Text style={{ fontSize: 20, }} >50 KGs / Month</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ borderColor: 'black', borderWidth: 2, padding: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, }} >Tomatoes</Text>
                        <Text style={{ fontSize: 20, }} >2 KGs / Day</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}