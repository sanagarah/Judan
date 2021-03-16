import React, { Component, useEffect } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";
import SignInput from "../../components/SignInput"
import SignButton from "../../components/SignButton";
import axios from "axios";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//The beginning of the class
export default class UserInfo extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            name: "",
            email: "",
            age: AorE.A == true ? LangAr.Age : LangEn.Age,
            country: AorE.A == true ? LangAr.Country : LangEn.Country,
            city: AorE.A == true ? LangAr.City : LangEn.City,
            field: AorE.A == true ? LangAr.Interest : LangEn.Interest
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

    //To change the state and know when it's not empty
    setField = (value) => {
        this.setState({ field: value });
    }

    //Function to check email format
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //To validate TextInputs
    checkTextInput = () => {
        /* Check for the name TextInput
        if (!this.state.name.trim()) {
            alert("Please enter a name");
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
        //Check for the age TextInput
        if (this.state.age == "Age") {
            alert("Please choose a age");
            return;
        }
        //Check for the interest TextInput
        if (this.state.field == "Interest") {
            alert("Please choose an interest");
            return;
        }
        */
        //Checked successfully

        let result = axios.get('https://192.168.1.10:19000/judan/trainee')
        console.log(result);

        this.props.navigation.navigate("Thanks")

    }
    render() {
        return (
            <View style={styles.container}>
                <SignInput
                    age={this.state.age}
                    country={this.state.country}
                    city={this.state.city}
                    field={this.state.field}
                    setName={this.setName}
                    setEmail={this.setEmail}
                    setCountry={this.setCountry}
                    setCity={this.setCity}
                    setAge={this.setAge}
                    setField={this.setField}
                />
                <SignButton
                    color="#F26D6A"
                    text={AorE.A == true ? LangAr.Continue : LangEn.Continue}
                    nav={this.checkTextInput}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
});