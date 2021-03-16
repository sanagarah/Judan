//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Image, Dimensions} from "react-native";
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
    checkAuthintication = async () => {
       /*  //Check for the authintication of user TextInput
        let token = await AsyncStorage.getItem("fb_token");
        if (!token) {
            alert(AorE.A == true ? LangAr.SignupFirst : LangEn.SignupFirst);
            return;
        }
         */

        //Checked successfully
        this.props.navigation.navigate("UserInfo")
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
                    text={AorE.A == true ? LangAr.Continue : LangEn.Continue}
                    nav={this.checkAuthintication}
                />
            </View>
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
}); 

export default connect(null, actions)(SignUp); 