//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height
//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//The beginning of the class
export default class Thanks extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../../assets/images/thanks.png")}
                    style={styles.image}>
                </Image>
                <Text style={styles.title}>{AorE.A == true ? LangAr.emailVerify : LangEn.emailVerify}</Text>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 1.5,
        alignSelf: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        color: "#70C1B3"
    },
});
