//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//The beginning of the class
export default class City extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.city}</Text>
                <View style={styles.picker}>
                    <RNPickerSelect
                        onValueChange={this.props.setCity}
                        items={[
                            { label: "جدة", value: "جدة" },
                            { label: "المدينة", value: "المدينة" },
                            { label: "مكة", value: "مكة" },
                            { label: "الطائف", value: "الطائف" },
                            { label: "ينبع", value: "ينبع" },
                            { label: "القنفذة", value: "القنفذة" },
                            { label: "رابغ", value: "رابغ" },
                            { label: "الليث", value: "الليث" },
                            { label: "خليص", value: "خليص" },
                            { label: "الخرمة", value: "الخرمة" },
                            { label: "رنية", value: "رنية" },
                            { label: "العلا", value: "العلا" },
                            { label: "الحناكية", value: "الحناكية" },

                        ]} />
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        height: 60,
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
        marginLeft: "80%",
        alignSelf: "center"
    }
});

