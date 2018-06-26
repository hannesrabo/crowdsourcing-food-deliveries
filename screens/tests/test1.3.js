import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import BarButton from '../../components/Button/BarButton/BarButton'

import NavigationService from '../../routing/NavigationService';

export default class test1_3 extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, paddingBottom: 40, backgroundColor: 'white' }}>
                <Text style={{ paddingBottom: 20, fontSize: 50, }}>Confirm Order</Text>
                <View style={{ borderColor: 'black', borderWidth: 2, flex: 1, padding: 20, marginBottom: 40 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 23, }} >Product:</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 40, }} >Carrots</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 23, }} >Weight (KGs):</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 40, }} >10</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 23, }} >Price (KSH):</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 40, }} >399</Text>
                    <Text style={{ paddingBottom: 10, paddingTop: 10, fontSize: 23, }} >Class:</Text>
                    <BarButton values={["Extra", "I", "II", "III"]} />
                    <Text style={{ paddingBottom: 10, paddingTop: 10, fontSize: 23, }} >Pickup Location</Text>
                    <BarButton values={["On Location", "Closes pickup point"]} />
                </View>
                <Button title="Confirm" onPress={() => { console.log("Confirmed") }} color='#9d0000' />
            </View>
        )
    }
}