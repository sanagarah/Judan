//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, SafeAreaView, View } from "react-native";
import SocialNetwork from "../../components/SocialNetwork"
import LoginHeader from "../../components/SignHeader"
import LoginInput from "../../components/LoginInput"
import LoginButton from "../../components/SignButton"

//The beginning of the class
export default class SignIn extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            email: "",
            password: "",
        }
    }

    //To change the state and know when it's not empty
    setEmail = (value) => {
        this.setState({ email: value });
    }

    //To change the state and know when it's not empty
    setPassword = (value) => {
        this.setState({ password: value });
    }

    //Function to check email format
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //To validate TextInputs
    checkTextInput = () => {
        // Check for the email TextInput
        if (!this.state.email.trim()) {
            alert("Please enter an email");
            return;
        }
        // Check for the email format TextInput
        if (!this.validateEmail(this.state.email)) {
            alert("Please enter a valid email");
            return;
        }
        //Check for the password TextInput
        if (!this.state.password.trim()) {
            alert("Please enter a password");
            return;
        }
        //Checked successfully
        this.props.navigation.navigate("Thanks")
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <LoginHeader
                    image={require("../../assets/images/login.png")}
                    color="#B3E5D1"
                    nav={() => this.props.navigation.navigate("Sign")} />
                <View style={styles.height}></View>
                <SocialNetwork />
                <LoginInput
                    setEmail={this.setEmail}
                    setPassword={this.setPassword} />
                <View style={styles.height}></View>
                <LoginButton
                    nav1={this.checkTextInput}
                    nav2={() => this.props.navigation.navigate("Sign")}
                    color="#70C1B3"
                    text1="Login"
                    text2="Don't have an account? "
                    text3="Sign up" />
            </SafeAreaView>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    height: {
        height: 20
    }
});
