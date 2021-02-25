//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//The beginning of the class
export default class LoginButton extends Component {
    render() {
        return (
            <View style={styles.LoginButoonContainer}>
                {/*Sign up buton */}
                <TouchableOpacity style={styles.BlockButton} onPress={this.props.nav1}>
                    <Text style={styles.text1}>Login</Text>
                </TouchableOpacity>
                {/*  Button component refer to a text button "it can be changed to any text"*/}
                <View style={styles.textViewStyle}>
                    <Text style={styles.text2}> Don"t have an account?  </Text>
                    <TouchableOpacity onPress={this.props.nav2}>
                        <Text style={styles.text3}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    LoginButoonContainer: {
        flex: 2.5,
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "column"
    },
    BlockButton: {
        flex: 1,
        margin: "2%",
        width: "95%",
        backgroundColor: "#70C1B3",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    textViewStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: "5%",
        marginTop: "5%",
        bottom: "5%"
    },
    text1: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center"
    },
    text2: {
        fontSize: 15,
        color: "#808080",
        marginLeft: "9%"
    },
    text3: {
        fontSize: 15,
        color: "#275368"
    }
});

