//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SocialNetwork from "../../components/SocialNetwork";
import SignButton from "../../components/SignButton";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
class SignUp extends Component {

    googleLogin = () => {
        this.props.googleLogin();
    }

    facebookLogin = () => {
        this.props.facebookLogin();
    }

    //To validate TextInputs
    checkAuthintication1 = async () => {
        // //Check for the authintication of user TextInput
        // let token = await AsyncStorage.getItem("fb_token");
        // if (!token) {
        //     alert(AorE.A == true ? LangAr.SignupFirst : LangEn.SignupFirst);
        //     return;
        // }

        //Checked successfully
        this.props.navigation.navigate("UserInfo")
    }

    //To validate TextInputs
    checkAuthintication2 = async () => {
        // //Check for the authintication of user TextInput
        // let token = await AsyncStorage.getItem("fb_token");
        // if (!token) {
        //     alert(AorE.A == true ? LangAr.SignupFirst : LangEn.SignupFirst);
        //     return;
        // }

        //Checked successfully
        this.props.navigation.navigate("Login")
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.header}
                    source={AorE.A == true ? require("../../assets/images/signupA.png") : require("../../assets/images/signup.png")} />
                <SocialNetwork
                    nav1={() => this.googleLogin()}
                    nav2={() => this.facebookLogin()} />
                <Image
                    style={styles.image}
                    source={require("../../assets/images/signup.jpg")} />
                <SignButton
                    color="#F26D6A"
                    text={AorE.A == true ? LangAr.SignUp : LangEn.SignUp}
                    nav={this.checkAuthintication1}
                />
                <View style={[styles.textButton, AorE.A == true ? { flexDirection: "row-reverse" } : { flexDirection: "row" }]}>
                    <Text> {AorE.A == true ? LangAr.Already : LangEn.Already} </Text>
                    <TouchableOpacity onPress={this.checkAuthintication2}>
                        <Text style={styles.text}> {AorE.A == true ? LangAr.LogIn : LangEn.LogIn}</Text>
                    </TouchableOpacity>
                </View>
            </View >
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
    header: {
        height: SCREEN_HEIGHT / 4.4,
        width: "100%",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    image: {
        height: SCREEN_HEIGHT / 3,
        width: "100%",
        marginTop: 60,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    textButton: {
        marginBottom: 20,
        alignItems: "center"
    },
    text: {
        color: "#F25F5C",
    }
});

export default connect(null, actions)(SignUp);