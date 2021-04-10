import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, TextInput, Dimensions, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import SignButton from "../../components/SignButton";
import CryptoJS from "react-native-crypto-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import encryption key 
import SecretKey from "../../SecretKey";
//import auth token
import AuthToken from "../../Token";
//import Api link
import Api from "../../Api";

let key = SecretKey.key
let api = Api.link;
let token = AuthToken.token

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class Login extends Component {
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
    checkTextInput = async () => {
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
        let user = await AsyncStorage.getItem("user");
        if (user == "trainer") {
            await axios.get(api + "/EmailTrainer/" + this.state.email).then(resp => {
                let items = (resp.data);
                let pass = this.state.password
                let go = false
                items.filter(async function (item) {
                    //decrypting the password
                    let bytes = CryptoJS.AES.decrypt(item.password, key);
                    let originalText = bytes.toString(CryptoJS.enc.Utf8);
                    if (originalText == pass) {
                        go = true
                        await AsyncStorage.setItem("fb_token", token);
                        await AsyncStorage.setItem("userId", item.id.toString())
                    }
                    if (originalText != pass)
                        alert("The email or password not correct");
                });
                if (items.length == 0)
                    alert("The email or password not correct");
                if (go == true)
                    this.props.navigation.navigate("Thanks")
            })
        }

        if (user == "trainee") {
            await axios.get(api + "/EmailTrainee/" + this.state.email).then(resp => {
                let items = (resp.data);
                let pass = this.state.password
                let go = false
                items.filter(async function (item) {
                    //decrypting the password
                    let bytes = CryptoJS.AES.decrypt(item.password, key);
                    let originalText = bytes.toString(CryptoJS.enc.Utf8);
                    if (originalText == pass) {
                        go = true
                        await AsyncStorage.setItem("fb_token", token);
                        await AsyncStorage.setItem("userId", item.id.toString())
                    }
                    if (originalText != pass)
                        alert("The email or password not correct");
                });
                if (items.length == 0)
                    alert("The email or password not correct");
                if (go == true)
                    this.props.navigation.navigate("Thanks")
            })
        }
    }


    render() {
        return (
            <ScrollView style={{ backgroundColor: "#FFF", flex: 1 }} >
                <KeyboardAvoidingView behavior='padding'>
                    <View style={styles.container}>
                        <Image
                            style={styles.header}
                            source={AorE.A == true ? require("../../assets/images/loginHeaderA.png") : require("../../assets/images/loginHeader.png")} />
                        <TextInput
                            style={styles.textInput1}
                            placeholder={AorE.A == true ? LangAr.Email : LangEn.Email}
                            onChangeText={this.setEmail}
                        >
                        </TextInput>
                        <TextInput
                            style={styles.textInput2}
                            placeholder={AorE.A == true ? LangAr.Password : LangEn.Password}
                            secureTextEntry={true}
                            onChangeText={this.setPassword}
                        >
                        </TextInput>
                        <SignButton
                            color="#F26D6A"
                            text={AorE.A == true ? LangAr.Continue : LangEn.Continue}
                            nav={this.checkTextInput}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        alignItems: "center"
    },
    header: {
        height: SCREEN_HEIGHT / 2,
        width: "100%",
        marginBottom: 75,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    textInput1: {
        textAlign: "left",
        borderColor: "#808080",
        borderWidth: 1,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: "#FFF",
        margin: "1%",
        height: 60,
        width: "95%",
    },
    textInput2: {
        textAlign: "left",
        borderColor: "#808080",
        borderWidth: 1,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: "#FFF",
        margin: "1%",
        height: 60,
        width: "95%",
        marginBottom: 50
    }
});