//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../actions"
import SignupHeader from "../../components/SignHeader"
import SocialNetwork from "../../components/SocialNetwork"

//The beginning of the class
class SignUp extends Component {

    googleLogin = () => {
        this.props.googleLogin();
    }

    facebookLogin = () => {
        this.props.facebookLogin();
    }

    render() {
        return (
            <View style={styles.container}>
                <SignupHeader
                    nav={() => this.props.navigation.navigate("Sign")} />
                <SocialNetwork
                    nav1={() => this.googleLogin()} 
                    nav2={() => this.facebookLogin() }/>
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
}); 

export default connect(null, actions)(SignUp); 