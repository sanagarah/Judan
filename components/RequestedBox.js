//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
//import language files for translation
import LangAr from "../lang/ar.json";
import LangEn from "../lang/en.json";
import AorE from "../lang/AorE";

//The beginning of the class
export default class RequestedBox extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            toggle: true,
            show: false,
            border: 0
        }
    }

    //Function used to change the show state
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
                    borderColor: this.state.border === 1 ? "#F25F5C" : "#808080",
                    borderStyle: this.state.border === 1 ? "solid" : "dotted"
                }]}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>{this.props.name}</Text>
                    <Text style={styles.text2}>{this.props.serviceType}</Text>
                    {this.state.show ? <View>
                        <View style={styles.row}>
                            <Text style={styles.text3}>{this.props.time}</Text>
                            <Text style={styles.text3}>{this.props.date}</Text>
                        </View>
                        <Text style={styles.text2}>{this.props.payment}</Text>
                        <View style={AorE.A == true ? { flexDirection: "row-reverse", justifyContent: "flex-end", alignItems: "center" } : { flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.text4}>{this.props.type}</Text>
                            {this.props.place.includes("lat") ?
                                <TouchableOpacity style={styles.button} onPress={this.props.viewMap}>
                                    <Text>{AorE.A == true ? LangAr.ViewMap : LangEn.ViewMap}</Text>
                                </TouchableOpacity>
                                :
                                <Text style={styles.text4}>{this.props.place}</Text>
                            }
                        </View>
                    </View> : null}
                </View>
                <View style={styles.imageContainer}>
                    {this.state.show ? <TouchableOpacity onPress={this.props.nav1}>
                        <Image source={AorE.A == true ? require("../assets/images/chatButtonA.png") : require("../assets/images/chatButton.png")}
                            style={styles.image2} />
                    </TouchableOpacity> : null}
                    {this.state.show ? <TouchableOpacity onPress={this.props.nav2}>
                        <Image source={AorE.A == true ? require("../assets/images/progressButtonA.png") : require("../assets/images/progressButton.png")}
                            style={styles.image2} />
                    </TouchableOpacity> : null}
                </View>
            </TouchableOpacity>

        );
    }
}
//Declare the style
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
        justifyContent: "center",
        alignItems: "flex-start"
    },
    row: {
        flexDirection: "row",
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
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "justify"
    },
    text3: {
        color: "#70C1B3",
        fontWeight: "bold",
        fontSize: 16
    },
    text4: {
        color: "#E5C40E",
        fontWeight: "bold",
        fontSize: 15
    },
    image1: {
        width: 104,
        height: 40
    },
    image2: {
        width: 108,
        height: 40
    },
    button: {
        height: 20,
        backgroundColor: "#FFE066",
        padding: 5,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center"
    }
});