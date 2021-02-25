//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { SafeAreaView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";
import BankPicker from "./BankPicker";
import Time from "../components/Time";
import Date from "../components/Date";
import Certificate from "../components/Certificate"

//The beginning of the class
export default class PaymentDetails extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            show: false,
            toggle: true,
            image: null,
            images: [],
        }
    }

    //To show the popup page for uploading a certification
    onShow = () => {
        if (this.state.toggle)
            this.setState({ show: true, toggle: false });
        else {
            this.setState({ show: false, toggle: true });
        }
    }

    //To push the new image uri into an array and creat certification component using that uri
    addCertification = () => {
        let name = this.state.image;
        let component = this.state.images;
        component.push(name);
        this.setState({ array: component, text: "" })
        this.onShow();
    }

    //To directly ask for permission
    //This function will automatically run after rendering the page
    componentDidMount() {
        this.getPermissionAsync();
    }

    //To have the permission needed to access the camera roll
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== "granted") {
                alert("Sorry, we need camera roll permissions to make this work!");
            }
        }
    }

    //To show the image picker and runder it (FOR CERTIFICATIONS)
    _pickImage1 = async () => {
        this.onShow();
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        if (!result.cancelled) {
            // Saving the uri of the selected photo*/ 
            this.setState({ image: result.uri });
            console.log(result);
        }
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>

                    <Text style={styles.text}>Card owner Name</Text>
                    <TextInput
                        placeholder="Enter Card Owner Name"
                        placeholderTextColor="#c7c7c7"
                        fontSize={16}
                        onChangeText={
                            (value) => setTextInputName(value)
                        }
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                    />

                    <Text style={styles.text}>Bank name</Text>
                    <BankPicker />

                    <Text style={styles.text}>ِAccount number</Text>
                    <TextInput
                        placeholder="Last Four digits"
                        placeholderTextColor="#c7c7c7"
                        fontSize={16}
                        onChangeText={
                            (value) => settextInpuCCD(value)
                        }
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                    />

                    <View >
                        <Text style={styles.text}>Date And Time</Text>
                        <View style={styles.textInput}>
                            <Date />
                        </View>
                        <View style={styles.textInput}>
                            <Time />
                        </View>
                    </View>

                    <Text style={styles.text}>Insert</Text>
                    <TouchableOpacity
                        onPress={this._pickImage1}
                        style={styles.insertContainer}>
                        <Text style={styles.insertText}>Press here to upload the receipt </Text>
                        {this.state.images.map((data, index) => {
                            return <Certificate img={{ uri: data }} key={index}></Certificate>
                        })}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.props.nav}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Continue </Text>
                    </TouchableOpacity>
                </View>

                {/* To render image picker and show the popUp page for sharing a certification */}
                <Modal isVisible={this.state.show}>
                    <TouchableOpacity style={styles.modal} onPress={this.onShow}>
                        <View style={styles.popUp1}>
                            {/* To push the new image uri into an array and creat certification component using that uri */}
                            <View style={styles.certificationContainer}>
                                <Certificate img={{ uri: this.state.image }}></Certificate>
                            </View>
                            <TouchableOpacity style={styles.checkImage} onPress={this.addCertification}>
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
    buttonContainer: {
        height: 50,
        width: 300,
        backgroundColor: "#F9EBEA",
        borderRadius: 15,
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginLeft: 25,
    },
    buttonText: {
        fontSize: 17,
        color: "#F25F5C",
        fontWeight: "bold",
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
        backgroundColor: "#fff",
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
        borderColor: "#fff",
        borderRadius: 90,
        margin: 10
    },
});