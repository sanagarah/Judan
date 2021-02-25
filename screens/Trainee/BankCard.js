//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, ScrollView } from "react-native";
import PaymentDetails from "../../components/PaymentDetails";

//The beginning of the class
export default class BankCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <PaymentDetails
                        nav={() => this.props.navigation.navigate("Thanks")} />
                </ScrollView></View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
});
