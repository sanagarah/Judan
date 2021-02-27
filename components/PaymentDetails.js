//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { SafeAreaView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import BankPicker from "./BankPicker";
import Time from "../components/Time";
import Date from "../components/Date";
import Certificate from "../components/Certificate"

//The beginning of the class
export default class PaymentDetails extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>

                    <Text style={styles.text}>Card owner Name</Text>
                    <TextInput
                        placeholder="Enter Card Owner Name"
                        placeholderTextColor="#c7c7c7"
                        onChangeText={this.props.setName}
                        fontSize={16}
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                    />

                    <Text style={styles.text}>Bank name</Text>
                    <BankPicker bank={this.props.bank} setBank={this.props.setBank} />

                    <Text style={styles.text}>ِAccount number</Text>
                    <TextInput
                        placeholder="Last Four digits"
                        placeholderTextColor="#c7c7c7"
                        onChangeText={this.props.setNumber}
                        fontSize={16}
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                    />

                    <View >
                        <Text style={styles.text}>Date And Time</Text>
                        <View style={styles.textInput}>
                            <Date date={this.props.date} setDate={this.props.setDate} />
                        </View>
                        <View style={styles.textInput}>
                            <Time time={this.props.time} setTime={this.props.setTime} />
                        </View>
                    </View>

                    <Text style={styles.text}>Insert</Text>
                    <TouchableOpacity
                        onPress={this.props._pickImage}
                        style={styles.insertContainer}>
                        <Text style={styles.insertText}>Press here to upload the receipt </Text>
                        {this.props.images.map((data, index) => {
                            return <Certificate image={{ uri: data }} key={index}></Certificate>
                        })}
                    </TouchableOpacity>
                </View>

                {/* To render image picker and show the popUp page for sharing a certification */}
                <Modal isVisible={this.props.show}>
                    <TouchableOpacity style={styles.modal} onPress={this.props.onShow}>
                        <View style={styles.popUp1}>
                            {/* To push the new image uri into an array and creat certification component using that uri */}
                            <View style={styles.certificationContainer}>
                                <Certificate image={{ uri: this.props.image }}></Certificate>
                            </View>
                            <TouchableOpacity style={styles.checkImage} onPress={this.props.addCertification}>
                                <Image source={require("../assets/images/check.png")} style={styles.checkImage}></Image>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
        );
    };
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: "center"
    },
    textInput: {
        width: "100%",
        justifyContent: "center",
        height: 40,
        marginTop: 10,
        paddingHorizontal: 15,
        borderWidth: 0.5,
        borderColor: "#F25F5C",
        borderRadius: 20
    },
    insertContainer: {
        width: 350,
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginRight: 12,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#F25F5C",
    },
    insertText: {
        fontSize: 17,
        color: "#808080",
    },
    text: {
        fontSize: 17,
        marginTop: 13,
        color: "#000000"
    },
    modal: {
        flex: 1,
        justifyContent: "center"
    },
    popUp1: {
        height: 300,
        width: 350,
        alignSelf: "center",
        backgroundColor: "#FFF",
        paddingLeft: 15,
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: "space-evenly"
    },
    certificationContainer: {
        alignItems: "center",
        backgroundColor: "#F9F9F9",
        width: "95%",
        paddingVertical: 10
    },
    checkImage: {
        height: 50,
        width: 50,
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 90,
        margin: 10
    },
});