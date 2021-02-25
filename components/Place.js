import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Place extends Component {
    constructor(props) {
        super(props)

        this.state = {
            place: ""
        }
    }
    setValue(value) {
        this.setState({ place: value });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.place}</Text>
                <RNPickerSelect
                    placeholder={{ label: "Choose a platform", value: " ", color:"white"}} 
                    onValueChange={(value) => this.setValue(value)}
                    items={[
                        { label: 'Zoom', value: 'Zoom' },
                        { label: 'Teams', value: 'Teams' },
                        { label: 'Google Meet', value: 'Google Meet' },
                    ]} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: 'gray',
        marginHorizontal: 40,
    },
    text: {
        color: 'gray',
        marginTop: 15,
        marginLeft: 15,
        position: "absolute",
    },
});

