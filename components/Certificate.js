//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Lightbox from "react-native-lightbox-v2";

//The beginning of the class
export default class Certificate extends Component {
    render() {
        return (
            <View>
                <Lightbox
                    backgroundColor="#EEEEE"
                    activeProps={
                        {
                            style: {
                                width: Dimensions.get("window").width,
                                height: Dimensions.get("window").height
                            },
                            resizeMode: "contain"
                        }
                    }>
                    <Image resizeMode="cover" source={this.props.image} style={styles.certification}></Image>
                </Lightbox>
            </View>
        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    certification: {
        width: 150,
        height: 120,
        marginLeft: 10
    },
});