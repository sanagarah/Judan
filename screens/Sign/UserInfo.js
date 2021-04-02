import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";
import SignInput from "../../components/SignInput"
import SignButton from "../../components/SignButton";
import CryptoJS from "react-native-crypto-js";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import encryption key 
import SecretKey from "../../SecretKey";
//import Api link
import Api from "../../Api";

let key = SecretKey.key
let api = Api.link;

//The beginning of the class
export default class UserInfo extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            name: "",
            email: "",
            password: "",
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
    checkTextInput = async () => {
        //Check for the name TextInput
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

        //Checked successfully

        //encrypting the password
        let password = this.state.password
        let ciphertext = CryptoJS.AES.encrypt(password, key).toString();
        // console.log(ciphertext);

        // //decrypting the password
        // let bytes = CryptoJS.AES.decrypt(ciphertext, key);
        // let originalText = bytes.toString(CryptoJS.enc.Utf8);
        // console.log(originalText);

        let user = await AsyncStorage.getItem("user");

        //Post function for trainee
        if (user == "trainee") {
            await axios.post(api + "/traineePost/", {
                name: this.state.name,
                email: this.state.email,
                password: ciphertext,
                city: this.state.city,
                countery: this.state.country,
                age: this.state.age,
                interest: this.state.field
            });

            //To save user's id in device storage for easy access
            await axios.get(api + "/EmailTrainee/" + this.state.email).then(resp => {
                let items = (resp.data);
                items.filter(function (item) {
                    AsyncStorage.setItem("userId", item.id.toString())
                });
            })
        }

        //Post function for trainer
        if (user == "trainer") {
            await axios.post(api + "/trainerPost/", {
                name: this.state.name,
                email: this.state.email,
                password: ciphertext,
                city: this.state.city,
                countery: this.state.country,
                age: this.state.age,
                field: this.state.field,
                rate: 0,
                bio: "",
                picture: "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg",
                postNum: 0,
                traineeNum: 0
            });

            //To save user's id in device storage for easy access
            await axios.get(api + "/EmailTrainer/" + this.state.email).then(resp => {
                let items = (resp.data);
                items.filter(function (item) {
                    AsyncStorage.setItem("userId", item.id.toString())
                });
            })
        }
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
                    setPassword={this.setPassword}
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