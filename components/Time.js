//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//The beginning of the class
export default class Time extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            show: false,
        }
    }

    //Function used to change the show state
    onShow = () => {
        this.setState({ show: true });
    }

    //Function used to change the show state
    onHide = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={this.onShow}>
                    <Image
                        source={require("../assets/images/time.png")}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{this.props.time}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    mode="time"
                    isVisible={this.state.show}
                    onConfirm={this.props.setTime}
                    onCancel={this.onHide}
                />
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
    text: {
        fontSize: 16,
        color: "#c7c7c7"
    }
})