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
export default class City extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.city}</Text>
                <View style={styles.picker}>
                    <RNPickerSelect
                        onValueChange={this.props.setCity}
                        placeholder={{ label: "", value: null }}
                        items={[
                            { label: AorE.A == true ? LangAr.Jeddah : LangEn.Jeddah, value: AorE.A == true ? LangAr.Jeddah : LangEn.Jeddah },
                            { label: AorE.A == true ? LangAr.Madinah : LangEn.Madinah, value: AorE.A == true ? LangAr.Madinah : LangEn.Madinah },
                            { label: AorE.A == true ? LangAr.Makkah : LangEn.Makkah, value: AorE.A == true ? LangAr.Makkah : LangEn.Makkah },
                            { label: AorE.A == true ? LangAr.Taif : LangEn.Taif, value: AorE.A == true ? LangAr.Taif : LangEn.Taif },
                            { label: AorE.A == true ? LangAr.Yanbu : LangEn.Yanbu, value: AorE.A == true ? LangAr.Yanbu : LangEn.Yanbu },
                            { label: AorE.A == true ? LangAr.Qunfudhah : LangEn.Qunfudhah, value: AorE.A == true ? LangAr.Qunfudhah : LangEn.Qunfudhah },
                            { label: AorE.A == true ? LangAr.Laith : LangEn.Laith, value: AorE.A == true ? LangAr.Laith : LangEn.Laith },
                            { label: AorE.A == true ? LangAr.Khulays : LangEn.Khulays, value: AorE.A == true ? LangAr.Khulays : LangEn.Khulays },
                            { label: AorE.A == true ? LangAr.Khurmah : LangEn.Khurmah, value: AorE.A == true ? LangAr.Khurmah : LangEn.Khurmah },
                            { label: AorE.A == true ? LangAr.Ranyah : LangEn.Ranyah, value: AorE.A == true ? LangAr.Ranyah : LangEn.Ranyah },
                            { label: AorE.A == true ? LangAr.Alula : LangEn.Alula, value: AorE.A == true ? LangAr.Alula : LangEn.Alula  },
                            { label: AorE.A == true ? LangAr.Hinakiyah : LangEn.Hinakiyah, value: AorE.A == true ? LangAr.Hinakiyah : LangEn.Hinakiyah },
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

