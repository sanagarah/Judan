//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
//import language files for translation
import LangAr from "../lang/ar.json";
import LangEn from "../lang/en.json";
import AorE from "../lang/AorE";

//The beginning of the class
export default class Country extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >{this.props.country}</Text>
                <View style={styles.picker}>
                    <RNPickerSelect
                        onValueChange={this.props.setCountry}
                        placeholder={{ label: "", value: null }}
                        items={[
                            { label: AorE.A == true ? LangAr.Saudi : LangEn.Saudi, value: AorE.A == true ? LangAr.Saudi : LangEn.Saudi },

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
