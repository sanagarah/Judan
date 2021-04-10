//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Api link
import Api from "../Api";

let api = Api.link;

//The beginning of the class
export default class Reviews extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            name: "",
        }
    }
    componentDidMount = async () => {
        let name = ""
        let user = await this.props.reviewFromUser

        //Get trainee name and interest by using the id
        await axios.get(api + "/IdTrainee/" + user).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                name = item.name;
            });
            this.setState({ name: name });
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.name}</Text>
                <View style={styles.review}>
                    <Text>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginTop: 6
    },
    text: {
        color: "#D2B204",
        fontWeight: "bold"
    },
    review: {
        backgroundColor: "#FFF",
        width: "90%",
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 10,
        padding: 10
    }
});
