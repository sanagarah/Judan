//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

//The beginning of the class
export default class CardHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.container} onPress={this.props.proNav}>
                    <MaterialIcons name="person" size={30}></MaterialIcons>
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} onPress={this.props.tNav}>
                    <MaterialIcons name="school" size={30}></MaterialIcons>
                    <Text style={styles.text}>Training</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} onPress={this.props.perNav}>
                    <MaterialIcons name="mic" size={30}></MaterialIcons>
                    <Text style={styles.text}>Performing</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    header: {
        height: 75,
        width: "100%",
        backgroundColor: "#F25F5C",
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 10
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#FFF",
    }
});