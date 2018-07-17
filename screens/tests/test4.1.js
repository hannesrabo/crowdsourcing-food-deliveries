import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class test4_1 extends Component {

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
                <View style={{ marginBottom: 20 }}>
                    <Text>When you press confirm you bind yourself to delivering the amount shown above according the the user agreement.
                    </Text>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>The contract can be found here.</Text>
                </View>
                <Button title="Confirm" onPress={() => { console.log("Confirmed") }} color='#9d0000' />
            </View>
        )
    }
}