//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//The beginning of the class
export default class Place extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.place}</Text>
                <RNPickerSelect
                    placeholder={{ label: "Choose a platform", value: "", color: "#FFF" }}
                    onValueChange={this.props.setPlace}
                    items={[
                        { label: "Zoom", value: "Zoom" },
                        { label: "Teams", value: "Teams" },
                        { label: "Google Meet", value: "Google Meet" },
                    ]} />
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: "#808080",
        marginHorizontal: 40,
    },
    text: {
        color: "#808080",
        marginTop: 15,
        marginLeft: 15,
        position: "absolute",
    },
});

