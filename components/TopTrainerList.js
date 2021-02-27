//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import TopTrainer from "./TopTrainer"

//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width

//The beginning of the class
export default class TopTrainerList extends Component {
    render() {
        return (
            <ScrollView>
                {/*--------------First----------------*/}
                <TouchableOpacity style={styles.messageView1} onPress={this.props.nav}>
                    <TopTrainer
                        image={this.props.image1}
                        name={this.props.name1}
                        field={this.props.field1}
                        rate={this.props.rate1}
                    ></TopTrainer>
                </TouchableOpacity>

                {/*--------------Second----------------*/}
                <TouchableOpacity style={styles.messageView2} onPress={this.props.nav}>
                    <TopTrainer
                        image={this.props.image2}
                        name={this.props.name2}
                        field={this.props.field2}
                        rate={this.props.rate2}
                    ></TopTrainer>
                </TouchableOpacity>

                {/*--------------Third----------------*/}
                <TouchableOpacity style={styles.messageView3} onPress={this.props.nav}>
                    <TopTrainer
                        image={this.props.image3}
                        name={this.props.name3}
                        field={this.props.field3}
                        rate={this.props.rate3}
                    ></TopTrainer>
                </TouchableOpacity>


                {/*--------------Third----------------*/}
                <TouchableOpacity style={styles.messageView4} onPress={this.props.nav}>
                    <TopTrainer
                        image={this.props.image4}
                        name={this.props.name4}
                        field={this.props.field4}
                        rate={this.props.rate4}
                    ></TopTrainer>
                </TouchableOpacity>
            </ScrollView>

        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    messageView1: {
        backgroundColor: "#70C1B3AA",
        width: SCREEN_WIDTH - 30,
        height: 90,
        flexDirection: "row",
        alignSelf: "center",
        padding: 10,
        borderRadius: 20,
        marginBottom: "3%",
    },
    messageView2: {
        backgroundColor: "#FFE066AA",
        width: SCREEN_WIDTH - 30,
        height: 90,
        flexDirection: "row",
        alignSelf: "center",
        padding: 10,
        borderRadius: 20,
        marginBottom: "3%",
    },
    messageView3: {
        backgroundColor: "#70A4BAAA",
        width: SCREEN_WIDTH - 30,
        height: 90,
        flexDirection: "row",
        alignSelf: "center",
        padding: 10,
        borderRadius: 20,
        marginBottom: "3%",
    },
    messageView4: {
        backgroundColor: "#70C1B3AA",
        width: SCREEN_WIDTH - 30,
        height: 90,
        flexDirection: "row",
        alignSelf: "center",
        padding: 10,
        borderRadius: 20,
        marginBottom: "3%",
    },
});
