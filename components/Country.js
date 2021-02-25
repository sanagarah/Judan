//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//The beginning of the class
export default class Country extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            country: "Country"
        }
    }
    
    //To make the chosen valuse appear in the box
    setValue(value) {
        this.setState({ country: value });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >{this.state.country}</Text>
                <View style={styles.picker}>
                    <RNPickerSelect
                        onValueChange={(value) => this.setValue(value)}
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
        backgroundColor: "#fff",
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
