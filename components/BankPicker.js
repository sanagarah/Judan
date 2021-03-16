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
export default class BankPicker extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.bank}</Text>
                <RNPickerSelect
                    placeholder={{ label: AorE.A == true ? LangAr.BankNameBlank : LangEn.BankNameBlank, value: "", color: "#FFF" }}
                    onValueChange={this.props.setBank}
                    items={[
                        { label: AorE.A == true ? LangAr.ArabicBank : LangEn.ArabicBank, value: AorE.A == true ? LangAr.ArabicBank : LangEn.ArabicBank },
                        { label: AorE.A == true ? LangAr.AlawwalBank : LangEn.AlawwalBank, value: AorE.A == true ? LangAr.AlawwalBank : LangEn.AlawwalBank },
                        { label: AorE.A == true ? LangAr.AlbiladBank : LangEn.AlbiladBank, value: AorE.A == true ? LangAr.AlbiladBank : LangEn.AlbiladBank },
                        { label: AorE.A == true ? LangAr.AlrajhiBank : LangEn.AlrajhiBank, value: AorE.A == true ? LangAr.AlrajhiBank : LangEn.AlrajhiBank },
                        { label: AorE.A == true ? LangAr.InmaBank : LangEn.InmaBank, value: AorE.A == true ? LangAr.InmaBank : LangEn.InmaBank },
                        { label: AorE.A == true ? LangAr.AlahliBank : LangEn.AlahliBank, value: AorE.A == true ? LangAr.AlahliBank : LangEn.AlahliBank },
                        { label: AorE.A == true ? LangAr.RiyadhBank : LangEn.RiyadhBank, value: AorE.A == true ? LangAr.RiyadhBank : LangEn.RiyadhBank },
                        { label: AorE.A == true ? LangAr.SabbBank : LangEn.SabbBank, value: AorE.A == true ? LangAr.SabbBank : LangEn.SabbBank },
                        { label: AorE.A == true ? LangAr.SambaBank : LangEn.SambaBank, value: AorE.A == true ? LangAr.SambaBank : LangEn.SambaBank },
                        { label: AorE.A == true ? LangAr.SaudiBank : LangEn.SaudiBank, value: AorE.A == true ? LangAr.SaudiBank : LangEn.SaudiBank },
                    ]} />
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 5,
        marginTop: 5,
        borderWidth: 0.5,
        borderColor: "#F25F5C",
        borderRadius: 20
    },
    text: {
        color: "#808080",
        marginTop: 15,
        marginLeft: 15,
        position: "absolute",
    },
});
