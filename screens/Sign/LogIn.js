import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SocialNetwork from "../../components/SocialNetwork"
import LoginHeader from "../../components/LoginHeader"
import LoginInput from "../../components/LoginInput"
import LoginButton from "../../components/LoginButton"


export default class SignIn extends Component {
    render() {
        return (

            <SafeAreaView style={styles.container}>

                <LoginHeader nav={() => this.props.navigation.navigate('Sign')} />
                <SocialNetwork />
                <LoginInput />
                <LoginButton
                    nav1={() => this.props.navigation.navigate('Thanks')}
                    nav2={() => this.props.navigation.navigate('SignUp')}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
