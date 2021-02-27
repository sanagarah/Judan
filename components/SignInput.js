//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import Age from "./Age"
import City from "./City"
import Country from "./Country"

//The beginning of the class
export default class SignInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/** text  */}
                    <Text style={styles.text}> or sign up with email  </Text>
                <TextInput
                    placeholder="Full name"
                    onChangeText={this.props.setName}
                    style={styles.textinput}></TextInput>
                <Age age={this.props.age} setAge={this.props.setAge} />
                <Country country={this.props.country} setCountry={this.props.setCountry} />
                <City city={this.props.city} setCity={this.props.setCity} />
                <TextInput
                    placeholder="Email"
                    onChangeText={this.props.setEmail}
                    style={styles.textinput}></TextInput>
                <TextInput
                    placeholder="Password"
                    onChangeText={this.props.setPassword}
                    style={styles.textinput}></TextInput>
            </View>
        );
    }
}
//Declare the style
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
        height: 40,
        width: "95%",
    },
    text: {
        fontSize: 17,
        color: "#808080",
        alignSelf: "center"
    }
});

