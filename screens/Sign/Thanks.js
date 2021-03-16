//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//The beginning of the class
export default class Thanks extends Component {
    render() {
        return (
            <View style={styles.fullContainer}>
                <View style={styles.Container}>
                    <View style={styles.sliderContainer}>
                        <Swiper autoplay
                            activeDotColor="#FFF">
                            <View style={styles.slide}>
                                <Image
                                    source={require("../../assets/images/1.jpg")}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                />
                            </View>
                            <View style={styles.slide}>
                                <Image
                                    source={require("../../assets/images/2.jpg")}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                />
                            </View>
                            <View style={styles.slide}>
                                <Image
                                    source={require("../../assets/images/3.jpg")}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{AorE.A == true ? LangAr.Thanks : LangEn.Thanks}</Text>
                    </View>
                    <View style={styles.descriptionWrapper}>
                        <Text style={styles.description}>{AorE.A == true ? LangAr.Refresh : LangEn.Refresh}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
    },
    Container: {
        flexDirection: "column",
        justifyContent: "center"
    },
    sliderContainer: {
        height: 300,
        width: "90%",
        marginTop: 10,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 8
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 8
    },
    sliderImage: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
        borderRadius: 8
    },
    titleWrapper: {
        alignItems: "center",
        marginTop: 40
    },
    title: {
        fontSize: 33,
    },
    description: {
        fontSize: 20,
        color: "#696969",
        marginTop: 15
    },
    descriptionWrapper: {
        alignItems: "center"
    },
    appButtonContainer: {
        height: 59,
        width: 366,
        backgroundColor: "#FFE066",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 60,
    },
    appButtonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFF"
    }
});
