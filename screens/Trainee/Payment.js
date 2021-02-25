import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

import PaymentPlan from '../../components/PaymentPlan'

export default class Payment extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <PaymentPlan />
                <TouchableOpacity 
                    style={styles.ButtonContainer}
                    onPress={() => this.props.navigation.navigate("BankCard")}>
                    <Text style={styles.ButtonText}> Continue to payment detail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={() => this.props.navigation.navigate("Thanks")}>
                    <Text style={styles.ButtonText}>Skip for later cash payment </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    ButtonContainer: {
        height: 50,
        width: 300,
        backgroundColor: '#F9EBEA',
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        marginTop: 16,
    },
    ButtonText: {
        fontSize: 17,
        color: '#f25f5c',
        fontWeight: 'bold'
    }
});
