import RNPickerSelect from 'react-native-picker-select';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class City extends Component {

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.textStyle} >City</Text>
                <View style={{ flex: 1, marginLeft: '80%', alignSelf: 'center' }}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'جدة', value: 'جدة' },
                            { label: 'المدينة', value: 'المدينة' },
                            { label: 'مكة', value: 'مكة' },
                            { label: 'الطائف', value: 'الطائف' },
                            { label: 'ينبع', value: 'ينبع' },
                            { label: 'القنفذة', value: 'القنفذة' },
                            { label: 'رابغ', value: 'رابغ' },
                            { label: 'الليث', value: 'الليث' },
                            { label: 'خليص', value: 'خليص' },
                            { label: 'الخرمة', value: 'الخرمة' },
                            { label: 'رنية', value: 'رنية' },
                            { label: 'العلا', value: 'العلا' },
                            { label: 'الحناكية', value: 'الحناكية' },

                        ]}
                    />
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

