//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import Api link
import Api from "../../Api";

let api = Api.link;
let traineeId;

//The beginning of the class
export default class Payment extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            border: 0,
            trainerId: 0,
            isOnline: true,
            place: "",
            date: "",
            time: "",
            payment: "Hourly",
            serviceType: ""
        }
    }

    componentDidMount = async () => {
        traineeId = await AsyncStorage.getItem("userId")
        const { params } = this.props.navigation.state
        let trainerId = params.trainerId
        let type = params.type
        let place = params.place
        let time = params.time
        let date = params.date
        let serviceType = params.serviceType
        let isOnline;
        if (type == 0)
            isOnline = true
        else
            isOnline = false
        this.setState({ trainerId: trainerId });
        this.setState({ isOnline: isOnline });
        this.setState({ place: place });
        this.setState({ time: time });
        this.setState({ date: date });
        this.setState({ serviceType: serviceType });
    }

    changeColor1 = () => {
        this.setState({ border: 1 })
        this.setState({ payment: "Hourly" })
    }

    changeColor2 = () => {
        this.setState({ border: 2 })
        this.setState({ payment: "Monthly" })
    }

    changeColor3 = () => {
        this.setState({ border: 3 })
        this.setState({ payment: "Yearly" })
    }

    //To validate
    check1 = () => {
        //Check if plan has beed chosen
        if (this.state.border == 0) {
            alert(AorE.A == true ? LangAr.AlertPlan : LangEn.AlertPlan);
            return;
        }
        //Choosed successfully
        this.props.navigation.navigate("BankCard", {
            trainerId: this.state.trainerId,
            isOnline: this.state.isOnline,
            place: this.state.place,
            time: this.state.time,
            date: this.state.date,
            payment: this.state.payment,
            serviceType: this.state.serviceType
        })
    };

    //To validate
    check2 = async () => {
        //Check if plan has beed chosen
        if (this.state.border == 0) {
            alert(AorE.A == true ? LangAr.AlertPlan : LangEn.AlertPlan);
            return;
        }
        //Choosed successfully;
        //To post it in request table
        await axios.post(api + "/RegisterTrainer/" + this.state.trainerId + "/" + traineeId, {
            trainerId: this.state.trainerId,
            isOnline: this.state.isOnline,
            platform: this.state.place,
            time: this.state.time,
            date: this.state.date,
            payment: this.state.payment,
            type: this.state.serviceType
        });

        //To get trainer's traineeNum
        let traineeNum;
        await axios.get(api + "/IdTrainer/" + this.state.trainerId).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                traineeNum = item.traineeNum;
            });
        })

        //Update trainees number is trainer table (increasing it by 1)
        await axios.post(api + "/TrainerNumUpdate/" + this.state.trainerId, {
            traineeNum: traineeNum + 1
        });

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
                                <Text style={styles.title}>{AorE.A == true ? LangAr.Hourly : LangEn.Hourly}</Text>
                                <Text style={styles.descrition}>{AorE.A == true ? LangAr.HourlyDes : LangEn.HourlyDes}</Text>
                            </View>
                            <View>
                                <Text style={styles.price}>{AorE.A == true ? LangAr.HourlyPrice : LangEn.HourlyPrice}</Text>
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
                                <Text style={styles.title}>{AorE.A == true ? LangAr.Monthly : LangEn.Monthly}</Text>
                                <Text style={styles.descrition}>{AorE.A == true ? LangAr.MonthlyDes : LangEn.MonthlyDes}</Text>
                            </View>
                            <View>
                                <Text style={styles.price}>{AorE.A == true ? LangAr.MonthlyPrice : LangEn.MonthlyPrice}</Text>
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
                                <Text style={styles.title}>{AorE.A == true ? LangAr.Yearly : LangEn.Yearly}</Text>
                                <Text style={styles.descrition}>{AorE.A == true ? LangAr.YearlyDes : LangEn.YearlyDes}</Text>
                            </View>
                            <View>
                                <Text style={styles.price}>{AorE.A == true ? LangAr.YearlyPrice : LangEn.YearlyPrice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={this.check1}>
                    <Text style={styles.ButtonText}>{AorE.A == true ? LangAr.ToPaymentDetails : LangEn.ToPaymentDetails}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={this.check2}>
                    <Text style={styles.ButtonText}>{AorE.A == true ? LangAr.Skip : LangEn.Skip}</Text>
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
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 10
    }
});
