//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width
//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <View>
                    <Text style={{ marginTop: 50, color: "#FFE066", textAlign: "center"}}>Choose a language</Text>
                <View style={{flexDirection: "row"}}>
                    <Button
                        title="Arabic"
                        titleStyle={styles.buttonText}
                        buttonStyle={styles.buttonStyle}
                        onPress={this.props.onCompleteArabic}
                    />
                    <Button
                        title="English"
                        titleStyle={styles.buttonText}
                        buttonStyle={styles.buttonStyle}
                        onPress={this.props.onCompleteEnglish}
                    />
                    </View>
                </View>
            );
        }
    }


    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={slide.text}
                    style={[styles.slide, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.text}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={styles.scroll}
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH
    },
    scroll: {
        flex: 1
    },
    text: {
        fontSize: 30,
        color: "#FFF",
        textAlign: "center"
    },
    lang: {
        position: "absolute",
        top: -SCREEN_HEIGHT / 2 + 40,
        right: SCREEN_WIDTH / 2
    },
    image: {
        height: 35,
        width: 35,
        borderColor: "#FFF",
        borderWidth: 2,
        borderRadius: 30
    },
    buttonStyle: {
        backgroundColor: "#FFE066",
        marginTop: 5,
        marginHorizontal:2
    },
    buttonText: {
        color: "#000000"
    }
});

