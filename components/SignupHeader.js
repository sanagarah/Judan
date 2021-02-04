import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

export default class SignupHeader extends Component {
    render() {
        return (
            <View style={{
                flex: 3,
                backgroundColor: 'white',
                width: '100%',
                flexDirection: 'column'
            }}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/Signup.png')} />


                <TouchableOpacity style={styles.BlockButton} onPress={this.props.nav}>
                    <Image
                        style={styles.setImage}
                        source={require('../assets/images/left.png')} />

                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    imageStyle: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,

    },
    BlockButton: {
        flex: 0.75,
        margin: '3%',
        width: "8%",
        height: 30,
        backgroundColor: '#7ea1b2',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute'

    },

    setImage: {
        width: 30, height: 30, left: '20%', position: 'absolute', top: '20%'
    },

});

