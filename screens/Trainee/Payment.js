//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, ScrollView, View} from "react-native";

//The beginning of the class
export default class Payment extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            border: 0
        }
    }
    changeColor1 = () => {
        this.setState({ border: 1 })
    }

    changeColor2 = () => {
        this.setState({ border: 2 })
    }

    changeColor3 = () => {
        this.setState({ border: 3 })
    }

    //To validate
    check1 = () => {
        //Check if plan has beed chosen
        if (this.state.border==0) {
            alert("Choose a plan");
            return;
        }
        //Choosed successfully
        this.props.navigation.navigate("BankCard")
    };

    //To validate
    check2 = () => {
        //Check if plan has beed chosen
        if (this.state.border == 0) {
            alert("Choose a plan");
            return;
        }
        //Choosed successfully
        this.props.navigation.navigate("Thanks")
    };

    render() {
        return (
            <ScrollView style={styles.container1}>
                <View style={styles.container2}>
                    <TouchableOpacity onPress={this.changeColor1}>
                        <View style={[styles.firstView,
                        {
                            borderColor: this.state.border === 1 ? "#F25F5C" : "#808080",
                            borderStyle: this.state.border === 1 ? "solid" : "dotted"
                        }]}>
                            <View style={styles.secondView}>
                                <Text style={styles.title}>Hourly Payment</Text>
                                <Text style={styles.descrition}>Pay for each hour</Text>
                            </View>
                            <View>
                                <Text style={styles.price}>5$</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeColor2}>
                        <View style={[styles.firstView,
                        {
                            borderColor: this.state.border === 2 ? "#F25F5C" : "#808080",
                            borderStyle: this.state.border === 2 ? "solid" : "dotted"
                        }]}>
                            <View style={styles.secondView}>
                                <Text style={styles.title}>Monthly Payment</Text>
                                <Text style={styles.descrition}>5 hours/mo</Text>
                            </View>
                            <View>
                                <Text style={styles.price}>15$</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.changeColor3}>
                        <View style={[styles.firstView,
                        {
                            borderColor: this.state.border === 3 ? "#F25F5C" : "#808080",
                            borderStyle: this.state.border === 3 ? "solid" : "dotted"
                        }]}>
                            <View style={styles.secondView}>
                                <Text style={styles.title}>Yearly Payment</Text>
                                <Text style={styles.descrition}>10 hours/mo</Text>
                            </View>
                            <View>
                                <Text style={styles.price}>25$</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={this.check1}>
                    <Text style={styles.ButtonText}> Continue to payment detail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={this.check2}>
                    <Text style={styles.ButtonText}>Skip for later cash payment </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: "column",
    },
    container2: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    ButtonContainer: {
        height: 50,
        width: 300,
        backgroundColor: "#F9EBEA",
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 16,
    },
    ButtonText: {
        fontSize: 17,
        color: "#F25F5C",
        fontWeight: "bold"
    },
    firstView: {
        marginVertical: 10,
        width: "80%",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        borderRadius: 10
    },
    secondView: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    title: {
        fontSize: 25,
        color: "#247BA0",
        fontWeight: "bold"
    },
    descrition: {
        fontSize: 17,
        color: "#F25F5C",
    },
    price: {
        color: "#70C1B3",
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 10
    }
});
