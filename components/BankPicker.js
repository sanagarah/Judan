//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//The beginning of the class
export default class BankPicker extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            bank: " "
        }
    }
    //To make the chosen valuse appear in the box
    setValue(value) {
        this.setState({ bank: value });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.bank}</Text>
                <RNPickerSelect
                    placeholder={{ label: "Choose a bank", value: "", color: "#fff" }}
                    onValueChange={(value) => this.setValue(value)}
                    items={[
                        { label: "البنك العربي الوطني", value: "البنك العربي الوطني" },
                        { label: "البنك السعودي الفرنسي", value: "البنك السعودي الفرنسي" },
                        { label: "بنك الرياض", value: "بنك الرياض" },
                        { label: "بنك الراحجي", value: "بنك الراجحي" },
                        { label: "بنك الإنماء ", value: "بنك الإنماء" },
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
