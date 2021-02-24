import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { text } from 'react-native-communications';

export default class SignupButton extends Component {
    render() {
        return (
            <View style={styles.LoginButoonContainer}>
                {/*Sign up buton */}
                <TouchableOpacity style={styles.BlockButton} onPress={this.props.nav1}>
                    <Text style={styles.text1}>Sign Up</Text>
                </TouchableOpacity>
                {/*  Button component refer to a text button 'it can be changed to any text'*/}
                <View style={styles.textViewStyle}>
                    <Text style={styles.text2}>Already have an account?  </Text>
                    <TouchableOpacity onPress={this.props.nav2}>
                        <Text style={styles.text3}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    LoginButoonContainer: {
        flex: 2,
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'column'
    },
    BlockButton: {
        flex: 1,
        margin: '2%',
        width: "95%",
        backgroundColor: '#275368',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    text1: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center'
    },
    text2: {
        fontSize: 15,
        color: 'gray',
        marginLeft: '9%'
    },
    text3: {
        fontSize: 15,
        color: '#275368',
        marginBottom: 10
    }
});

