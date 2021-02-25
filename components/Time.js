//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//The beginning of the class
export default class Date extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            show: false,
            name: "Choose a time"
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
    
    //Function used to set the choesn value in the box after chaning it to String and ignore unnecessary text
    setTime = (time) => {
        var stringTime = time.toLocaleString().substring(10, 16);
        this.setState({ name: stringTime })
    };

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
                    <Text style={styles.text}>{this.state.name}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    mode="time"
                    isVisible={this.state.show}
                    onConfirm={this.setTime}
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