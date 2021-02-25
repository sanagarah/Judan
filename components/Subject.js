//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//The beginning of the class
export default class Subject extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            subject: "Subject",
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
                            { label: "Acrobatic and Sports", value: "Acrobatic and Sports" },
                            { label: "Acting", value: "Acting" },
                            { label: "Authoring and Diction", value: "Authoring and Diction" },
                            { label: "Dancing", value: "Dancing" },
                            { label: "Drawing", value: "Drawing" },
                            { label: "Instruments playing", value: "Instruments playing" },
                            { label: "Magic Tricks", value: "Magic Tricks" },
                            { label: "Science Shows", value: "Science Shows" },
                            { label: "Stand-up Comedy", value: "Stand-up Comedy" },
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
        backgroundColor: "#fff",
        width: 220,
        marginLeft: 10,
        alignItems: "stretch"
    },
    text: {
        fontSize: 15,
        color: "#808080",
        marginTop: 15,
        marginLeft: 15,
        position: "absolute",
    },
});
