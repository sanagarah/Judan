//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";

//The beginning of the class
export default class SignButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*Sign up buton */}
                <TouchableOpacity
                    style={[styles.BlockButton, { backgroundColor: this.props.color }]}
                    onPress={this.props.nav1}>
                    <Text style={styles.text1}>{this.props.text1}</Text>
                </TouchableOpacity>
                {/*  Button component refer to a text button "it can be changed to any text"*/}
                <View style={styles.textView}>
                    <Text style={styles.text2}>{this.props.text2}</Text>
                    <TouchableOpacity onPress={this.props.nav2}>
                        <Text style={[styles.text3, { color: this.props.color }]}>{this.props.text3}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "95%",
        alignSelf: "center",
    },
    BlockButton: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    textView: {
        flexDirection: "row",
        justifyContent: "center",
    },
    text1: {
        fontSize: 25,
        color: "#FFF",
        textAlign: "center"
    },
    text2: {
        fontSize: 15,
        color: "#808080",
        marginLeft: "9%"
    },
    text3: {
        fontSize: 15,
        marginBottom: 10
    }
});

