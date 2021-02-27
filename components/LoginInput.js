//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

//The beginning of the class
export default class LoginInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/** text  */}
                <Text style={styles.text}> or login with email  </Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={this.props.setEmail}
                    style={styles.textinput}>
                </TextInput>
                <TextInput
                    placeholder="Password"
                    onChangeText={this.props.setPassword}
                    style={styles.textinput}>
                </TextInput>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        width: "100%",
        marginVertical: 20,
    },
    textinput: {
        textAlign: "left",
        borderColor: "#808080",
        borderWidth: 1,
        marginHorizontal: 10,
        backgroundColor: "#FFF",
        margin: "2%"
    },
    text: {
        fontSize: 17,
        color: "#808080",
        alignSelf: "center",
    }
});

