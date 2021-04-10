//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

//The beginning of the class
export default class ChaBoxTrainee extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.nav}
                style={styles.chatbox}>
                <Image source={{ uri: this.props.picture }}
                    style={styles.avatar}>
                </Image>
                <View style={styles.column}>
                    <Text style={styles.text1}>{this.props.name}</Text>
                    <Text style={styles.text2}>{this.props.field}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Image source={require("../assets/images/arrow.png")}
                        style={styles.arrow}>
                    </Image>
                    {/* <Text style={styles.text3}>{this.props.time}</Text>
                    <Text style={styles.text3}>  {AorE.A == true ? LangAr.m : LangEn.m}  </Text> */}
                </View>
            </TouchableOpacity>
        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    chatbox: {
        backgroundColor: "#F4F4F4",
        width: "95%",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-around",
        padding: "3%",
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 10,
        marginTop: "3%"
    },
    text1: {
        color: "#70C1B3",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 10
    },
    text2: {
        color: "#F25F5C",
        fontSize: 15,
    },
    text3: {
        color: "#247BA0",
        fontSize: 13,
        marginVertical: "5%",
        marginRight: "2%"
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 90,
    },
    arrow: {
        height: 20,
        width: 20,
        opacity: 0.9
    },
    column: {
        flexDirection: "column",
    }
});