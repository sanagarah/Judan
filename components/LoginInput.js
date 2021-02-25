//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

//The beginning of the class
export default class LoginInput extends Component {
    render() {
        return (
            <View style={styles.inputcontainer}>
                {/** text  */}
                <View style={styles.viewBehindTheText}>
                    <View style={styles.textViewStyle}>
                        <Text style={styles.text}> or login with email  </Text>
                    </View>
                </View>

                <View style={styles.viewBehindThePic}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textinput}></TextInput>

                    <TextInput
                        placeholder="Password"
                        style={styles.textinput}></TextInput>
                </View>
                <View style={styles.viewBehindTheText}>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    inputcontainer: {
        flex: 5,
        backgroundColor: "#FFC0CB",
        width: "100%",
        flexDirection: "column"
    },
    viewBehindThePic: {
        flex: 4,
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "column"
    },
    viewBehindTheText: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "column"
    },
    textViewStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        top: "3%"
    },
    textinput: {
        textAlign: "left",
        borderColor: "#808080",
        borderWidth: 1,
        marginHorizontal: 10,
        backgroundColor: "#fff",
        margin: "2%"
    },
    text: {
        fontSize: 17,
        color: "#808080",
    }
});

