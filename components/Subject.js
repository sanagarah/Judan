import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Subject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subject: "Subject",
        }
    }
    setValue(value) {
        this.setState({ subject: value });
    }

    render() {
        return (
            <View>
                <View style={styles.picker}>
                    <Text style={styles.text}>{this.state.subject}</Text>
                    <RNPickerSelect
                        onValueChange={(value) => this.setValue(value)}
                        placeholder={{ label: "", value: null }}
                        items={[
                            { label: 'Acrobatic and Sports', value: 'Acrobatic and Sports' },
                            { label: 'Acting', value: 'Acting' },
                            { label: 'Authoring and Diction', value: 'Authoring and Diction' },
                            { label: 'Dancing', value: 'Dancing' },
                            { label: 'Drawing', value: 'Drawing' },
                            { label: 'Instruments playing', value: 'Instruments playing' },
                            { label: 'Magic Tricks', value: 'Magic Tricks' },
                            { label: 'Science Shows', value: 'Science Shows' },
                            { label: 'Stand-up Comedy', value: 'Stand-up Comedy' },
                        ]} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    text: {
        fontSize: 15,
        color: 'gray',
        marginTop: 15,
        marginLeft: 15,
        position: "absolute",
    },
    picker: {
        marginVertical: 20,
        borderRadius: 30,
        backgroundColor: "white",
        width: 220,
        marginLeft: 10,
        alignItems: 'stretch'
    }
});
