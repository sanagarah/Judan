//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import Place from "../../components/Place";
import Time from "../../components/Time";
import Date from "../../components/Date";
import Map from "../../components/Map"

//The beginning of the class
export default class Request extends Component {
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
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.label}>Type</Text>
                    <View style={styles.onlinePersonalContainer}>
                        <TouchableOpacity
                            onPress={this.onShow}
                            style={[styles.onlinePersonal,
                            {
                                borderColor: this.state.border === 0 ? "#F25F5C" : "#808080",
                                borderStyle: this.state.border === 0 ? "solid" : "dotted"
                            }]}>
                            <Text style={styles.text1}>Online</Text>
                            <Image
                                source={require("../../assets/images/online.png")}
                                style={styles.image1} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onShow}
                            style={[styles.onlinePersonal,
                            {
                                borderColor: this.state.border === 1 ? "#F25F5C" : "#808080",
                                borderStyle: this.state.border === 1 ? "solid" : "dotted"
                            }]}>
                            <Text style={styles.text1}>Personal</Text>
                            <Image
                                source={require("../../assets/images/personal.png")}
                                style={styles.image2} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>Place</Text>
                    {this.state.show ? null : <Place />}
                    {this.state.show ?
                        <View style={styles.mapView}>
                            <Map />
                        </View> : null}
                    <Text style={styles.label}>Time </Text>
                    <View style={styles.timeDateContainer}>
                        <Time />
                    </View>
                    <Text style={styles.label}>Date </Text>
                    <View style={styles.timeDateContainer}>
                        <Date />
                    </View>
                    <TouchableOpacity style={styles.paymentButton} onPress={() => this.props.navigation.navigate("Payment")}>
                        <Text style={styles.text2}>Continue To Payment</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    timeDateContainer: {
        padding: 7,
        marginHorizontal: 40,
        borderWidth: 0.5,
        borderColor: "#808080"
    },
    image: {
        margin: 40,
        width: 60,
        height: 60,
        marginLeft: 9
    },
    textRequest: {
        color: "#fff",
        margin: 55,
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 9
    },
    onlinePersonalContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    onlinePersonal: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 110,
        paddingLeft: 5,
        borderRadius: 13,
        borderWidth: 1,
    },
    image1: {
        width: 50,
        height: 50,
    },
    image2: {
        width: 66,
        height: 66,
    },
    text1: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#70C1B3",
        marginHorizontal: 5
    },
    text2: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        margin: 5
    },
    label: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 10,
        color: "#808080"
    },
    paymentButton: {
        width: 300,
        height: 50,
        backgroundColor: "#F25F5C",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 30
    },
    mapView: {
        width: "90%",
        height: 200,
        alignSelf: "center"
    }
});
