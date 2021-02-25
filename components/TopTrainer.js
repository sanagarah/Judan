//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, Image } from "react-native";
import StarBar from "./StarBar";

//The beginning of the class
export default class TopTrainers extends Component {

    render() {
        return (
            <View style={styles.container1}>
                <Image
                    style={styles.image}
                    source={this.props.image} />
                <View style={styles.container2}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textinsideview}>
                            {this.props.name}
                        </Text>
                        <StarBar rate={this.props.rate} />
                    </View>
                    <Text style={styles.Seconddtextinsideview}>
                        {this.props.field} trainer
                    </Text>
                </View>
            </View>
        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    container1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "center",
    },
    container2: {
        flexDirection: "column",
        marginLeft: 20
    },
    textinsideview: {
        color: "#F25F5C",
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 100
    },
    Seconddtextinsideview: {
        color: "#247BA0",
        fontSize: 15,
    },
    image: {
        width: 50,
        height: 60,
        borderRadius: 90
    },
});