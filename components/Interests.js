//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text } from "react-native";

//The beginning of the class
export default class Interests extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={[styles.name], { color: this.props.textColor }}>{this.props.interest}</Text>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F9F9F9",
        alignSelf: "baseline",
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#fff",
        margin: 5
    },
    name: {
        fontWeight: "bold",
        color: "#247BA0",
    }
});
