//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import AorE from "../lang/AorE";

//The beginning of the class
export default class TraineeTrainer extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/** trainee view*/}
                <View>
                    <TouchableOpacity onPress={this.props.changeOpacity1}>
                        <Image
                            style={[styles.image,
                            {
                                opacity: this.props.opacity === 1 ? 1 : 0.4
                            }]}
                            source={AorE.A == true ? require("../assets/images/trainee2.png") : require("../assets/images/trainee1.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.middlelView} />

                {/**trainer view */}
                <View >
                    <TouchableOpacity onPress={this.props.changeOpacity2}>
                        <Image
                            style={[styles.image,
                            {
                                opacity: this.props.opacity === 2 ? 1 : 0.4
                            }]}
                            source={AorE.A == true ? require("../assets/images/trainer2.png") : require("../assets/images/trainer1.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1.25,
        backgroundColor: "#FFF",
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        bottom: "10%"
    },
    middlelView: {
        flex: 0.25,
        backgroundColor: "#FFF",
        width: "100%",
        justifyContent: "center",
    },
    image: {
        width: 110,
        height: 120,
        alignSelf: "center",
        borderRadius: 30,
    },
});


