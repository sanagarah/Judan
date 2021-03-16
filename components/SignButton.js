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
                    style={[styles.BlockButton, {backgroundColor:this.props.color}]}
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    BlockButton: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: "80%",
        position: "absolute",
        bottom: 30
    },
    text: {
        fontSize: 25,
        color: "#FFF",
        textAlign: "center"
    }
});

