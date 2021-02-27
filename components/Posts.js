//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Lightbox from "react-native-lightbox-v2";

//The beginning of the class
export default class Posts extends Component {
    render() {
        return (
            <View>
                <Lightbox
                    activeProps={
                        {
                            style: {
                                width: Dimensions.get("window").width,
                                height: Dimensions.get("window").height
                            },
                            resizeMode: "contain"
                        }
                    }>
                    <Image source={this.props.image} style={styles.media}></Image>
                </Lightbox>
            </View>
        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    media: {
        height: 150,
        width: 100,
        borderWidth: 1,
        borderRadius: 30,
        marginRight: 5
    },
});