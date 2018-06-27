import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import BarButton from '../../components/Button/BarButton/BarButton'

import NavigationService from '../../routing/NavigationService';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default class test4_3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weight: '0'
        }
    }

    change = event => {
        this.setState({
            weight: event.text
        })
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, width: "100%", padding: 20, paddingBottom: 40, backgroundColor: 'white' }}>
                <Text style={{ paddingBottom: 20, fontSize: 50, }}>Validate delivery:</Text>
                <View style={{ borderColor: 'black', borderWidth: 2, flex: 7, padding: 20, marginBottom: 40 }}>
                    <Text style={{ paddingBottom: 20, fontSize: 30, }} >Product:</Text>
                    <Text style={{ paddingBottom: 20, fontSize: 40, }} >Carrots</Text>
                    <Text style={{ paddingBottom: 20, fontSize: 30, }} >Weight (KGs):</Text>
                    <TextInput style={{ paddingBottom: 20, fontSize: 40, }} value={this.state.weight} keyboardType='numeric' onChange={this.change} />
                    <Text style={{ paddingBottom: 20, fontSize: 30, }} >Class:</Text>
                    <BarButton values={["Extra", "I", "II", "III"]} />
                </View>
                <View style={{ flexDirection: 'row', flex: 1, width: '100%' }}>
                    <View style={{ marginRight: 20, width: '45%' }}>
                        <Button title="Decline" onPress={() => { console.log("Confirmed") }} color='#9d0000' />
                    </View>
                    <View style={{ width: '45%' }}>
                        <Button title="Confirm" onPress={() => { console.log("Confirmed") }} color='#009d34' />
                    </View>
                </View>
            </ScrollView>
        )
    }
}