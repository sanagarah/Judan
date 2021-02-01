import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class SignUpButton extends Component {

    render() {
        return (

            <View style={styles.LoginButoonContainer}>


                {/*Sign up buton */}
                <TouchableOpacity style={styles.BlockButton} onPress={this.props.nav1}>
                    <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center' }}>Sign Up</Text>
                </TouchableOpacity>

                {/*  Button component refer to a text button 'it can be changed to any text'*/}
                <View style={styles.textViewStyle}>
                    <Text style={{ fontSize: 15, color: 'gray', marginLeft: '9%' }}>Already have an account?  </Text>

                    <TouchableOpacity onPress={this.props.nav2}>
                        <Text style={{ fontSize: 15, color: '#275368' }}>Login</Text>
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
        flex: 0.75,
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
        //marginBottom:'5%',
        // marginTop:'5%',
        // bottom:'5%' 
    }


});

