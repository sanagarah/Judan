import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class LoginButton extends Component {

    render() {
        return (

            <View style={styles.LoginButoonContainer}>


                {/*Sign up buton */}
                <TouchableOpacity style={styles.BlockButton}>
                    <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>

                {/*  Button component refer to a text button 'it can be changed to any text'*/}
                <View style={styles.textViewStyle}>
                    <Text style={{ fontSize: 15, color: 'gray', marginLeft: '9%' }}> Don't have an account?  </Text>

                    <TouchableOpacity onPress={this.props.nav}>
                        <Text style={{ fontSize: 15, color: '#70C1B3' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>




            </View>
        );
    }
}


const styles = StyleSheet.create({

    LoginButoonContainer: {
        flex: 2.5,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'column'

    },
    BlockButton: {
        flex: 0.75,
        margin: '2%',
        width: "95%",
        backgroundColor: "#70C1B3",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    },

    textViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: '5%',
        marginTop: '5%',
        bottom: '5%'
    }


});

