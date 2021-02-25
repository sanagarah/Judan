//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text } from "react-native";

//The beginning of the class
export default class Reviews extends Component {
    render() {
        return (
            <View style={styles.review}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    review: {
        backgroundColor: "#fff",
        width: "90%",
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 10,
        padding: 10
    }
});
