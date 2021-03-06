//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import StarBar from "./StarBar";
import Interest from "./Interests";

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class TrainerCard extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={require("../assets/images/linearGradient.png")}
                    style={styles.backgroundContainer}>
                    <View style={styles.ImageContainer} >
                        <Image
                            style={styles.Image}
                            source={require("../assets/images/profile.png")}
                        />
                        <TouchableOpacity onPress={this.props.nav}>
                            <Image
                                source={require("../assets/images/chat.png")}
                                style={{ height: 70, width: 70, marginLeft: 250 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text1}>{this.props.name}</Text>
                        <StarBar rate={this.props.rate} />
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text2}>{this.props.field}</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text3}>About me</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text2}>{this.props.bio}</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text3}>Interests</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Interest interest="Art" textColor="#F25F5C"></Interest>
                        <Interest interest="Piano" textColor="#F25F5C"></Interest>
                        <Interest interest="Hip hop dancing" textColor="#F25F5C"></Interest>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    backgroundContainer: {
        width: "100%",
        height: SCREEN_HEIGHT,
        alignItems: "center",
    },
    ImageContainer: {
        height: 200,
        width: 300,
        marginTop: 28,
        justifyContent: "space-evenly",
    },
    Image: {
        width: "100%",
        height: "100%"
    },
    text1Container: {
        marginLeft: 5,
        alignSelf: "flex-start",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text1: {
        fontSize: 30,
        color: "#FFF",
        fontWeight: "bold",
        marginRight: 15
    },
    text2: {
        fontSize: 15,
        padding: 9,
        color: "#FFF",
    },
    text3: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },
    scrollViewContainer: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#e4717a",
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 120,
        justifyContent: "space-around"

    },
    scrollText: {
        color: "#FFF",
        fontSize: 18,

    }
});