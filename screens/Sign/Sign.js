import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Button from "../../components/Button"
import TraineeTrainer from "../../components/Trainee-trainer"

export default class Sign extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Secondview}>

                    {/*contain a header pic*/}
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/header.jpg')} />
                    </View>

                    <View style={styles.textView}>
                        <Text style={styles.text1}> Choose what you like to be  </Text>
                    </View>

                    {/*component for the views below 'Choose what you like to be' text */}
                    <TraineeTrainer />

                    {/*Sign up buton */}
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.text2}>Sign Up</Text>
                    </TouchableOpacity>

                    {/*  Button component refer to a text button 'it can be changed to any text'*/}
                    <View style={styles.textView}>
                        <Text style={styles.text3}> Don't have an account?  </Text>
                        <Button
                            name='Login'
                            color="pink"
                            nav={() => this.props.navigation.navigate('LogIn')} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 6,
        width: "100%",
        justifyContent: 'center',
    },
    button: {
        flex: 0.75,
        margin: '3%',
        width: "95%",
        backgroundColor: '#f47373',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
    },
    Secondview: {
        flex: 1,
        backgroundColor: "#fff"
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: '5%',
        bottom: '5%'
    },
    text1: {
        fontSize: 17,
        color: 'gray',
        bottom: '5%'
    },
    text2: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center'
    },
    text3: {
        fontSize: 15,
        color: 'gray',
        marginLeft: '9%'
    }
});