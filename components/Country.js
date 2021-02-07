import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Country extends Component {
    constructor(props) {
        super(props)

        this.state = {
            country: "Country"
        }
    }
    setValue(value) {
        this.setState({ country: value });
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.textStyle} >{this.state.country}</Text>
                <View style={{ flex: 1, marginLeft: '70%', alignSelf: 'center' }}>
                    <RNPickerSelect
                        onValueChange={(value) => this.setValue(value)}
                        items={[
                            { label: 'السعودية', value: 'السعودية' },

                        ]} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view: {
        height: 40,
        backgroundColor: '#fff',
        textAlign: 'left',
        borderColor: "gray",
        borderWidth: 1,
        marginHorizontal: 10,
        margin: '1%',
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 15,
        color: 'gray',
        left: '35%',
        marginBottom: '2%',
        alignSelf: 'center'
    }
});
