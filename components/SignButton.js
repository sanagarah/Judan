//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//The beginning of the class
export default class SignButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*Sign up buton */}
                <TouchableOpacity
                    style={[styles.BlockButton, { backgroundColor: this.props.color }]}
                    onPress={this.props.nav}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "80%",
    },
    BlockButton: {
        height: 60,
        width: "90%",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 25,
        color: "#FFF",
        textAlign: "center"
    }
});

