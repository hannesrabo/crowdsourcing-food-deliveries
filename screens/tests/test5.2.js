import React, { Component } from '../../../../../.cache/typescript/2.9/node_modules/@types/react'
import { View, Text, Button } from 'react-native'

import NavigationService from '../../routing/NavigationService';

export default class test5_2 extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, paddingBottom: 40, backgroundColor: 'white' }}>
                <Text style={{ paddingBottom: 20, fontSize: 50, }}>Confirm Order</Text>
                <View style={{ borderColor: 'black', borderWidth: 2, flex: 7, padding: 20, marginBottom: 40 }}>
                    <Text style={{ paddingBottom: 20, fontSize: 30, }} >Product:</Text>
                    <Text style={{ paddingBottom: 20, fontSize: 40, }} >Carrots</Text>
                    <Text style={{ paddingBottom: 20, fontSize: 30, }} >Weight (KGs):</Text>
                    <Text style={{ paddingBottom: 20, fontSize: 40, }} >10</Text>
                    <Text style={{ paddingBottom: 20, fontSize: 30, }} >Price (KSH):</Text>
                    <Text style={{ paddingBottom: 20, fontSize: 40, }} >399</Text>
                </View>
                <Button title="Confirm" onPress={() => { NavigationService.navigate('test5_2_contract') }} color='#9d0000' />
            </View>
        )
    }
}