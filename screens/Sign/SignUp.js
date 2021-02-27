//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, SafeAreaView } from "react-native";
import SignupHeader from "../../components/SignHeader"
import SocialNetwork from "../../components/SocialNetwork"
import SignInput from "../../components/SignInput"
import SignUpButton from "../../components/SignButton"

//The beginning of the class
export default class SignUp extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            name: "",
            email: "",
            password: "",
            age: "Age",
            country: "Country",
            city: "City"
        }
    }

    //To change the state and know when it's not empty
    setName = (value) => {
        this.setState({ name: value });
    }

    //To change the state and know when it's not empty
    setEmail = (value) => {
        this.setState({ email: value });
    }

    //To change the state and know when it's not empty
    setPassword = (value) => {
        this.setState({ password: value });
    }

    //Function used to set the choesn value in the box
    setAge = (value) => {
        this.setState({ age: value });
    }

    //Function used to set the choesn value in the box
    setCountry = (value) => {
        this.setState({ country: value });
    }

    //Function used to set the choesn value in the box
    setCity = (value) => {
        this.setState({ city: value });
    }

    //Function to check email format
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //To validate TextInputs
    checkTextInput = () => {
        //Check for the name TextInput
        if (!this.state.name.trim()) {
            alert("Please enter a name");
            return;
        }
        //Check for the age TextInput
        if (this.state.age == "Age") {
            alert("Please choose a age");
            return;
        }
        //Check for the country TextInput
        if (this.state.country == "Country") {
            alert("Please choose a country");
            return;
        }
        //Check for the city TextInput
        if (this.state.city == "City") {
            alert("Please choose a city");
            return;
        }
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
        //Check for the password length TextInput
        if (this.state.password.length < 7) {
            alert("The password should include at least 7 characters");
            return;
        }
        //Checked successfully
        this.props.navigation.navigate("Thanks")
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SignupHeader
                    image={require("../../assets/images/signup.png")}
                    color="#7EA1B2"
                    nav={() => this.props.navigation.navigate("Sign")} />
                <SocialNetwork />
                <SignInput
                    age={this.state.age}
                    country={this.state.country}
                    city={this.state.city}
                    setName={this.setName}
                    setEmail={this.setEmail}
                    setPassword={this.setPassword}
                    setAge={this.setAge}
                    setCountry={this.setCountry}
                    setCity={this.setCity}
                />
                <SignUpButton
                    nav1={this.checkTextInput}
                    nav2={() => this.props.navigation.navigate("LogIn")}
                    color="#1F6F92"
                    text1="Sign Up"
                    text2="Already have an account?"
                    text3=" Login" />
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
}); 