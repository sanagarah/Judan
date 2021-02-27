//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default class SocialNetwork extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/** text  */}
                 <Text style={styles.text}> Enter via social networks  </Text>

                {/** pic  */}
                <View style={styles.viewBehindThePic}>
                    <TouchableOpacity style={styles.GoogleView}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/google.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FacebookView}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/facebook.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    viewBehindThePic: {
        flexDirection: "row"
    },
    text: {
        fontSize: 17,
        color: "#808080",
        marginVertical: 5
    },
    image: {
        width: 40,
        height: 40
    },
    GoogleView: {
        marginHorizontal: "3%",
        width: "40%",
        height: 50,
        backgroundColor: "#FFE066",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    FacebookView: {
        marginHorizontal: "3%",
        width: "40%",
        height: 50,
        backgroundColor: "#4267B2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
});


