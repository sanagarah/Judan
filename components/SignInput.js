//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Age from "./Age"
import City from "./City"
import Country from "./Country"

//The beginning of the class
export default class SignInput extends Component {
    render() {
        return (
            <View style={styles.inputcontainer}>
                {/** text  */}
                <View style={styles.viewBehindTheText}>
                    <View style={styles.textViewStyle}>
                        <Text style={styles.text}> or sign up with email  </Text>
                    </View>
                </View>
                <View style={styles.viewBehindThePic}>
                    <TextInput
                        placeholder="Full name"
                        style={styles.textinput}></TextInput>
                    <Age />
                    <Country />
                    <City />
                    <TextInput
                        placeholder="Email"
                        style={styles.textinput}></TextInput>
                    <TextInput
                        placeholder="Password"
                        style={styles.textinput}></TextInput>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    inputcontainer: {
        flex: 7,
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "column",
    },
    viewBehindThePic: {
        flex: 5,
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "column"
    },
    viewBehindTheText: {
        flex: 0.5,
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "column"
    },
    textViewStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        top: "2%"
    },
    textinput: {
        textAlign: "left",
        borderColor: "#808080",
        borderWidth: 1,
        marginHorizontal: 10,
        backgroundColor: "#fff",
        margin: "1%",
        height: 40,
        width: "95%",
    },
    text: {
        fontSize: 17,
        color: "#808080",
    }
});

