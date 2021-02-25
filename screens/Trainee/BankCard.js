import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import PaymentDetails from '../../components/PaymentDetails';

export default class BankCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <PaymentDetails
                      nav= {() => this.props.navigation.navigate('Thanks')}/>
                </ScrollView></View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});
