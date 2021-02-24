import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, ScrollView } from "react-native";

export default class RequestedBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: true,
            show: false,
            border: 0
        }
    }
    onShow = () => {
        if (this.state.toggle)
            this.setState({ border: 1, show: true, toggle: false });
        else {
            this.setState({ border: 0, show: false, toggle: true });
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onShow}
                style={[styles.container,
                {
                    borderColor: this.state.border === 1 ? "#F25F5C" : "gray",
                    borderStyle: this.state.border === 1 ? "solid" : "dotted"
                }]}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>{this.props.name}</Text>
                    <Text style={styles.text2}>{this.props.type}</Text>
                    {this.state.show ? <View>
                        <Text style={styles.text3}>{this.props.place}</Text>
                        <Text style={styles.text3}>{this.props.time}</Text>
                    </View> : null}
                </View>
                <View style={styles.imageContainer}>
                    {this.state.show ? <TouchableOpacity onPress={this.props.nav1}>
                        <Image source={require("../assets/images/chatButton.png")} style={styles.image1}></Image>
                    </TouchableOpacity> : null}
                    {this.state.show ? <TouchableOpacity onPress={this.props.nav2}>
                        <Image source={require("../assets/images/progressButton.png")} style={styles.image2}></Image>
                    </TouchableOpacity> : null}
                </View>
            </TouchableOpacity>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 10,
        margin: 15,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textContainer: {
        justifyContent: "center"
    },
    imageContainer: {
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    text1: {
        color: "#247BA0",
        fontWeight: "bold",
        fontSize: 25
    },
    text2: {
        color: "#F25F5C",
        fontSize: 15
    },
    text3: {
        color: "#70C1B3",
        fontWeight: "bold",
        fontSize: 17
    },
    image1: {
        width: 100,
        height: 40
    },
    image2: {
        width: 106,
        height: 40
    }
});