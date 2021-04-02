//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from "react-native";
import StarBar from "./StarBar";
import Interest from "./Interests";
import axios from "axios";
//import language files for translation
import LangAr from "../lang/ar.json";
import LangEn from "../lang/en.json";
import AorE from "../lang/AorE";
//import Api link
import Api from "../Api";

let api = Api.link;

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class TrainerCard extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            interests: []
        }
    }

    componentDidMount = async () => {
        await axios.get(api + "/Interests/" + this.props.interestsForUser).then(resp => {
            let response = resp.data;
            this.setState({ interests: response })
        })
    }

    render() {
        return (
            <ImageBackground
                source={require("../assets/images/linearGradient.png")}
                style={styles.backgroundContainer}>
                <View style={styles.ImageContainer} >
                    <Image
                        style={styles.image}
                        source={this.props.uri ? { uri: this.props.uri } : null}
                    />
                    <TouchableOpacity onPress={this.props.nav}>
                        <Image
                            source={require("../assets/images/chat.png")}
                            style={{ height: 70, width: 70, marginLeft: 250 }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text1}>{this.props.name}</Text>
                    <StarBar rateForUser={this.props.rateForUser} />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text2}>{this.props.field}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text3}>{AorE.A == true ? LangAr.About : LangEn.About}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text2}>{this.props.bio}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text3}>{AorE.A == true ? LangAr.Interests : LangEn.Interests}</Text>
                </View>

                <ScrollView horizontal={true} style={styles.textContainer}>
                    {this.state.interests.map((data) => {
                        return (
                            <Interest key={data.id} interest={data.name} textColor="#F25F5C"></Interest>
                        )
                    })}
                </ScrollView>
            </ImageBackground>
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
    image: {
        width: "100%",
        height: "100%"
    },
    textContainer: {
        marginLeft: 5,
        alignSelf: "flex-start",
        flexDirection: "row"
    },
    text1: {
        fontSize: 30,
        color: "#FFF",
        fontWeight: "bold",
        marginRight: 15,
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