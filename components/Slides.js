//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width;

//The beginning of the class
export default class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title="Onwards!"
                    titleStyle={styles.buttonText}
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
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
        color: "#fff",
        textAlign: "center"
    },
    buttonStyle: {
        backgroundColor: "#FFE066",
        marginTop: 20
    },
    buttonText: {
        color: "#000000"
    }
});

