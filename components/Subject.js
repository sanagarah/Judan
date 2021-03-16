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
export default class Subject extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            subject: AorE.A == true ? LangAr.Subject : LangEn.Subject
        }
    }
    //To make the chosen valuse appear in the box
    setValue(value) {
        this.setState({ subject: value });
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.state.subject}</Text>
                    <RNPickerSelect
                        onValueChange={(value) => this.setValue(value)}
                        placeholder={{ label: "", value: null }}
                        items={[
                            { label: AorE.A == true ? LangAr.Sport : LangEn.Sport, value: AorE.A == true ? LangAr.Sport : LangEn.Sport},
                            { label: AorE.A == true ? LangAr.Act : LangEn.Act, value: AorE.A == true ? LangAr.Sport : LangEn.Sport,},
                            { label: AorE.A == true ? LangAr.Act : LangEn.Act, value: AorE.A == true ? LangAr.Act : LangEn.Act },
                            { label: AorE.A == true ? LangAr.Diction : LangEn.Diction, value: AorE.A == true ? LangAr.Diction : LangEn.Diction },
                            { label: AorE.A == true ? LangAr.Dance : LangEn.Dance, value: AorE.A == true ? LangAr.Dance : LangEn.Dance },
                            { label: AorE.A == true ? LangAr.Draw : LangEn.Draw, value: AorE.A == true ? LangAr.Draw : LangEn.Draw },
                            { label: AorE.A == true ? LangAr.Instrument : LangEn.Instrument, value: AorE.A == true ? LangAr.Instrument : LangEn.Instrument },
                            { label: AorE.A == true ? LangAr.Magic : LangEn.Magic, value: AorE.A == true ? LangAr.Magic : LangEn.Magic},
                            { label: AorE.A == true ? LangAr.Science : LangEn.Science, value: AorE.A == true ? LangAr.Science : LangEn.Science },
                            { label: AorE.A == true ? LangAr.Comedy : LangEn.Comedy, value: AorE.A == true ? LangAr.Comedy : LangEn.Comedy },
                        ]} />
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        borderRadius: 30,
        backgroundColor: "#FFF",
        width: 220,
        marginLeft: 10,
        alignItems: "stretch"
    },
    text: {
        fontSize: 15,
        color: "#808080",
        marginTop: 15,
        paddingRight: 30,
        alignSelf: "center",
        position: "absolute"
    },
});
