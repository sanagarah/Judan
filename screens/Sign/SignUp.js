//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, SafeAreaView } from "react-native";
import SignupHeader from "../../components/SignupHeader"
import SocialNetwork from "../../components/SocialNetwork"
import SignInput from "../../components/SignInput"
import SignUpButton from "../../components/SignupButton"

//The beginning of the class
export default class SignUp extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SignupHeader nav={() => this.props.navigation.navigate("Sign")} />
                <SocialNetwork />
                <SignInput />
                <SignUpButton nav1={() => this.props.navigation.navigate("LogIn")}
                    nav2={() => this.props.navigation.navigate("LogIn")} />
            </SafeAreaView>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
}); 