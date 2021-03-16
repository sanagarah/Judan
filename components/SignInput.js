//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Age from "./Age";
import City from "./City";
import Country from "./Country";
import RNPickerSelect from "react-native-picker-select";
//import language files for translation
import LangAr from "../lang/ar.json";
import LangEn from "../lang/en.json";
import AorE from "../lang/AorE";


//The beginning of the class
export default class SignInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/** text  */}
                <Text style={styles.label}>Kindly, fill the fields to enhance your experience</Text>
                <TextInput
                    placeholder="Full name"
                    onChangeText={this.props.setName}
                    style={styles.textinput}>
                </TextInput>
                <TextInput
                    placeholder="Email"
                    onChangeText={this.props.setEmail}
                    style={styles.textinput}>
                </TextInput>
                <Country country={this.props.country} setCountry={this.props.setCountry} />
                <City city={this.props.city} setCity={this.props.setCity} />
                <Age age={this.props.age} setAge={this.props.setAge} />
                <View style={styles.fieldContainer}>
                <Text style={styles.text}>{this.props.field}</Text>
                <RNPickerSelect
                    onValueChange={this.props.setField}
                    placeholder={{ label: "", value: null }}
                    items={[
                        { label: AorE.A == true ? LangAr.Sport : LangEn.Sport, value: AorE.A == true ? LangAr.Sport : LangEn.Sport },
                        { label: AorE.A == true ? LangAr.Act : LangEn.Act, value: AorE.A == true ? LangAr.Sport : LangEn.Sport, },
                        { label: AorE.A == true ? LangAr.Act : LangEn.Act, value: AorE.A == true ? LangAr.Act : LangEn.Act },
                        { label: AorE.A == true ? LangAr.Diction : LangEn.Diction, value: AorE.A == true ? LangAr.Diction : LangEn.Diction },
                        { label: AorE.A == true ? LangAr.Dance : LangEn.Dance, value: AorE.A == true ? LangAr.Dance : LangEn.Dance },
                        { label: AorE.A == true ? LangAr.Draw : LangEn.Draw, value: AorE.A == true ? LangAr.Draw : LangEn.Draw },
                        { label: AorE.A == true ? LangAr.Instrument : LangEn.Instrument, value: AorE.A == true ? LangAr.Instrument : LangEn.Instrument },
                        { label: AorE.A == true ? LangAr.Magic : LangEn.Magic, value: AorE.A == true ? LangAr.Magic : LangEn.Magic },
                        { label: AorE.A == true ? LangAr.Science : LangEn.Science, value: AorE.A == true ? LangAr.Science : LangEn.Science },
                        { label: AorE.A == true ? LangAr.Comedy : LangEn.Comedy, value: AorE.A == true ? LangAr.Comedy : LangEn.Comedy },
                    ]} />
                </View>
            </View>
        );
    }
}
//Declare the styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10,
    },
    textinput: {
        textAlign: "left",
        borderColor: "#808080",
        borderWidth: 1,
        marginHorizontal: 10,
        backgroundColor: "#FFF",
        margin: "1%",
        height: 60,
        width: "95%",
    },
    text: {
        textAlign: "left",
        fontSize: 16,
        color: "#808080",
        position: "absolute",
        left: 5,
        marginVertical: 15,
        marginLeft: 15
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#808080",
        marginVertical: 30
    },
    fieldContainer: {
        alignSelf: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        margin: "1%",
        height: 60,
        width: "95%",
        borderWidth: 1,
        borderColor: "#808080"
    }
});

