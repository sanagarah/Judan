import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class City extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bank: " "
        }
    }
    setValue(value) {
        this.setState({ bank: value });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.bank}</Text>
                <RNPickerSelect
                    placeholder={{ label: "Choose a bank", value: "", color: "white"}}
                    onValueChange={(value) => this.setValue(value)}
                    items={[
                        { label: 'البنك العربي الوطني', value: 'البنك العربي الوطني' },
                        { label: 'البنك السعودي الفرنسي', value: 'البنك السعودي الفرنسي' },
                        { label: 'بنك الرياض', value: 'بنك الرياض' },
                        { label: 'بنك الراحجي', value: 'بنك الراجحي' },
                        { label: 'بنك الإنماء ', value: 'بنك الإنماء' },
                    ]} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 5,
        marginTop: 5,
        borderWidth: 0.5,
        borderColor: '#f25f5c',
        borderRadius: 20
    },
    text: {
        color: 'gray',
        marginTop: 15,
        marginLeft: 15,
        position: "absolute",
    },
});
