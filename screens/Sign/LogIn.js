import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SocialNetwork from "../../components/SocialNetwork"
import LoginHeader from "../../components/LoginHeader"
import Input from "../../components/Input"
import LoginButton from "../../components/LoginButton"


export default class SignIn extends React.Component {
    render() {
        return (

            <SafeAreaView style={styles.container}>

                <LoginHeader nav={() => this.props.navigation.navigate('Sign')} />
                <SocialNetwork />
                <Input />
                <LoginButton nav={() => this.props.navigation.navigate('SignUp')} />




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
