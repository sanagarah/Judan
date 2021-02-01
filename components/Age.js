import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Age extends Component {

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.textStyle} >Age</Text>
                <View style={{ flex: 1, marginLeft: '80%', alignSelf: 'center' }}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: '5-9', value: '5-10' },
                            { label: '10-14', value: '' },
                            { label: '15-19', value: '7' },
                            { label: '20-24', value: '8' },
                            { label: '25-29', value: '9' },
                            { label: '30-34', value: '10' },
                            { label: '35-39', value: '11' },
                            { label: '40-49', value: '12' },
                            { label: '50-54', value: '13' },
                            { label: '55-59', value: '14' },
                            { label: '60-64', value: '15' },
                            { label: '65-69', value: '16' },
                            { label: '70-74', value: '17' },
                            { label: '75-79', value: '18' },
                            { label: ' > 80', value: '19' },

                        ]}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    view: {
        // flex:1,
        height: 40,
        backgroundColor: '#fff',
        textAlign: 'left',
        borderBottomColor: 'gray',
        borderLeftColor: 'gray',
        borderRightColor: 'gray',
        borderTopColor: 'gray',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginHorizontal: 10,
        margin: '1%',
        flexDirection: 'row',

    },
    textStyle: {
        fontSize: 15,
        color: 'gray',
        left: '35%',
        marginBottom: '2%',
        //flex:4,
        alignSelf: 'center'

    }

});
