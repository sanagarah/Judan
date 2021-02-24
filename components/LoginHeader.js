import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

export default class LoginHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/login.png')} />
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
    container: {
        flex: 3,
        width: '100%',
    },
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
        backgroundColor: '#b3e5d1',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute'
    },
    setImage: {
        width: 30,
        height: 30,
        left: '20%',
        position: 'absolute',
        top: '20%'
    },
});


