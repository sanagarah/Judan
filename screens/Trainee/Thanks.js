import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width

export default class Thanks extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/thanks.png')}
                    style={styles.image}>
                </Image>
                <Text style={styles.title}>Booked Successfuly</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 1.5,
        alignSelf: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 20,
        color: "#70C1B3"
    },
});
