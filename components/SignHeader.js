//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, TouchableOpacity, View, Image, Dimensions } from "react-native";

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class SignHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.header1}
                    source={require("../assets/images/signup.png")} />
                <Image
                    style={styles.header2}
                    source={require("../assets/images/signup.jpg")} />
                <TouchableOpacity style={styles.BlockButton} onPress={this.props.nav}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/left.png")} />
                </TouchableOpacity>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    header1: {
        height: SCREEN_HEIGHT / 4,
        width: "100%",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    header2: {
        bottom: -SCREEN_HEIGHT / 1.6,
        position: "absolute",
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },

});