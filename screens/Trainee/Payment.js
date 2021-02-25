//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import PaymentPlan from "../../components/PaymentPlan"

//The beginning of the class
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
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    ButtonContainer: {
        height: 50,
        width: 300,
        backgroundColor: "#F9EBEA",
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 16,
    },
    ButtonText: {
        fontSize: 17,
        color: "#F25F5C",
        fontWeight: "bold"
    }
});
