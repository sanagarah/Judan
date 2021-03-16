//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
//import language files for translation
import LangAr from "../lang/ar.json";
import LangEn from "../lang/en.json";
import AorE from "../lang/AorE";


export default class SocialNetwork extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/** text  */}
                <Text style={styles.text}> {AorE.A == true ? LangAr.SocialSign : LangEn.SocialSign} </Text>

                {/** pic  */}
                    <TouchableOpacity style={styles.GoogleView}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/google.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FacebookView} onPress={this.props.nav2}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/facebook.png")} />
                    </TouchableOpacity>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    text: {
        fontSize: 17,
        color: "#808080",
        marginVertical: 10,
    },
    image: {
        width: 40,
        height: 40
    },
    GoogleView: {
        marginHorizontal: "3%",
        marginVertical: 10,
        width: "70%",
        height: 50,
        backgroundColor: "#FFE066",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    FacebookView: {
        marginHorizontal: "3%",
        width: "70%",
        height: 50,
        backgroundColor: "#4267B2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
});


