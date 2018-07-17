import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import BarButton from '../../components/Button/BarButton/BarButton'


export default class test1_3 extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: "100%", padding: 20, paddingBottom: 40, backgroundColor: 'white' }}>
                <Text style={{ paddingBottom: 20, fontSize: 50, }}>Delivery Details</Text>
                <View style={{ borderColor: 'black', borderWidth: 2, flex: 1, padding: 20, marginBottom: 40 }}>
                    <Text style={{ paddingBottom: 10, fontSize: 19, }} >Product:</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 30, }} >Maize</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 19, }} >Weight (KGs):</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 30, }} >90</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 19, }} >Price (KSH):</Text>
                    <Text style={{ paddingBottom: 10, fontSize: 30, }} >4000</Text>
                    <Text style={{ paddingBottom: 10, paddingTop: 10, fontSize: 23, }} >Class:</Text>
                    <BarButton values={["Extra", "I", "II", "III"]} />
                    <Text style={{ paddingBottom: 10, paddingTop: 10, fontSize: 23, }} >Pickup Location</Text>
                    <BarButton values={["On Location", "Closest village"]} />
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