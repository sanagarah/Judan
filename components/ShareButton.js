//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity } from "react-native";

//The beginning of the class
export default class ShareButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.nav}>
                <Text style={styles.text} > {this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: "#F25F5C"
    },
});