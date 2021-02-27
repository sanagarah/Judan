//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width
//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class FindTrainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require("../assets/images/findTrainer.png")} />
                <Image
                    style={styles.imageboxStyle}
                    source={require("../assets/images/matchme.png")} />
                <TouchableOpacity style={styles.matchMeView} onPress={this.props.nav1}>
                    <Text style={styles.text}> Match me </Text>
                    <Image
                        style={styles.setImage}
                        source={require("../assets/images/right.png")} />
                </TouchableOpacity>
                <View style={styles.flex}>
                    <View style={styles.searchbarView}>
                        <TouchableOpacity onPress={this.props.nav2}>
                            <View style={styles.searchbar}>
                                <MaterialIcons name="search" size={30} color="#808080"></MaterialIcons>
                           </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT / 1.8,
    },
    imageStyle: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 1.8,
        position: "absolute"
    },
    searchbarView: {
        backgroundColor: "#FFF",
        width: SCREEN_WIDTH / 1.3,
        alignSelf: "center",
        marginHorizontal: SCREEN_WIDTH / 10,
        top: SCREEN_HEIGHT / 4,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5
    },
    searchbar: {
        width: "100%",
        height: SCREEN_HEIGHT / 14,
        justifyContent: "center",
        padding: 10
    },
    imageboxStyle: {
        width: SCREEN_WIDTH / 1.2,
        height: SCREEN_HEIGHT / 5,
        borderRadius: 30,
        position: "absolute",
        top: SCREEN_HEIGHT / 3,
        alignSelf: "center",
    },
    setImage: {
        width: 20,
        height: 20,
        left: "80%",
        position: "absolute",
    },
    flex: {
        flexDirection: "row"
    },
    text: {
        fontSize: 15,
        color: "#FFF",
        alignSelf: "center"
    },
    matchMeView: {
        width: 150,
        height: 30,
        backgroundColor: "#247BA0",
        justifyContent: "center",
        borderRadius: 10,
        position: "absolute",
        left: SCREEN_WIDTH / 5,
        top: SCREEN_HEIGHT / 2.18,
    },
});