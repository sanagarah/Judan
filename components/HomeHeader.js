//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Searchbar } from "react-native-paper";

//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width
//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class HomeHeader extends Component {
    state = {
        firstQuery: "",
    };
    render() {
        const { firstQuery } = this.state;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require("../assets/images/findTrainer.png")} />


                <View style={{ flexDirection: "row" }}>


                    <View style={styles.searchbarView}>

                        <Searchbar
                            placeholder=" "
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                            value={firstQuery} />

                    </View>

                </View>

            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT / 2,
    },
    imageStyle: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2,
        position: "absolute",
    },
    searchbarView: {
        backgroundColor: "#FFF",
        width: SCREEN_WIDTH / 1.3,
        alignSelf: "center",
        marginHorizontal: SCREEN_WIDTH / 10,
        top: SCREEN_HEIGHT / 4,
    },
    MatchMeView: {
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