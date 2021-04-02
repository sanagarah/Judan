//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//The beginning of the class
export default class Age extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text} >{this.props.age}</Text>
                <View style={styles.picker}>
                    <RNPickerSelect
                        placeholder={{ label: "", value: null }}
                        onValueChange={this.props.setAge}
                        items={[
                            { label: "5-9", value: "5-9" },
                            { label: "10-14", value: "10-14" },
                            { label: "15-19", value: "15-19" },
                            { label: "20-24", value: "20-24" },
                            { label: "25-29", value: "25-29" },
                            { label: "30-34", value: "30-34" },
                            { label: "35-39", value: "35-39" },
                            { label: "40-49", value: "40-49" },
                            { label: "50-54", value: "50-54" },
                            { label: "55-59", value: "55-59" },
                            { label: "60-64", value: "60-64" },
                            { label: "65-69", value: "65-69" },
                            { label: "70-74", value: "70-74" },
                            { label: "75-79", value: "75-79" },
                            { label: " > 80", value: " > 80" },

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
        borderColor: "gray",
        borderWidth: 1,
        marginHorizontal: 10,
        margin: "1%",
        flexDirection: "row",
    },
    text: {
        fontSize: 15,
        color: "gray",
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
