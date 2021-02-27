//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//The beginning of the class
export default class Country extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >{this.props.country}</Text>
                <View style={styles.picker}>
                    <RNPickerSelect
                        onValueChange={this.props.setCountry}
                        items={[
                            { label: "السعودية", value: "السعودية" },

                        ]} />
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: "#FFF",
        textAlign: "left",
        borderColor: "#808080",
        borderWidth: 1,
        marginHorizontal: 10,
        margin: "1%",
        flexDirection: "row",
    },
    text: {
        fontSize: 15,
        color: "#808080",
        left: "35%",
        marginBottom: "2%",
        alignSelf: "center"
    },
    picker: {
        flex: 1,
        marginLeft: "70%",
        alignSelf: "center"
    }
});
