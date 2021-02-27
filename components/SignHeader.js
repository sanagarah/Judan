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
                    style={styles.header}
                    source={this.props.image} />
                <TouchableOpacity style={[styles.BlockButton, {backgroundColor: this.props.color}]} onPress={this.props.nav}>
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
        width: "100%",
    },
    header: {
        height: SCREEN_HEIGHT / 4,
        width: "100%",
        alignSelf: "center",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    BlockButton: {
        margin: "3%",
        width:  30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        position: "absolute"
    },
    image: {
        width: 30,
        height: 30,
        position: "absolute",
    },
});