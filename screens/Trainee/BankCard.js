//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import PaymentDetails from "../../components/PaymentDetails";
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
export default class BankCard extends Component {
    timeBlank = AorE.A == true ? LangAr.TimeBlank : LangEn.TimeBlank;
    dateBlank = AorE.A == true ? LangAr.DateBlank : LangEn.DateBlank;
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            show: false,
            toggle: true,
            image: null,
            images: [],
            name: "",
            number: "",
            bank: "",
            payDate: this.dateBlank,
            payTime: this.timeBlank,
            trainerId: 0,
            isOnline: true,
            platform: "",
            date: "",
            time: "",
            payment: "Hourly",
        }
    }

    componentDidMount = async () => {
        traineeId = await AsyncStorage.getItem("userId")
        const { params } = this.props.navigation.state
        let trainerId = params.trainerId
        let isOnline = params.isOnline
        let platform = params.platform
        let time = params.time
        let date = params.date
        let payment = params.payment
        this.setState({ trainerId: trainerId });
        this.setState({ isOnline: isOnline });
        this.setState({ platform: platform });
        this.setState({ time: time });
        this.setState({ date: date });
        this.setState({ payment: payment });
    }

    //To show the popup page for uploading a certification
    onShow = () => {
        if (this.state.toggle)
            this.setState({ show: true, toggle: false });
        else {
            this.setState({ show: false, toggle: true });
        }
    }

    //To change the state and know when it's not empty
    setName = (value) => {
        this.setState({ name: value });
    }

    //To change the state and know when it's not empty
    setNumber = (value) => {
        this.setState({ number: value });
    }

    //Function used to set the choesn value in the box
    setBank = (value) => {
        this.setState({ bank: value });
    }

    //Function used to set the choesn value in the box after chaning it to String and ignore unnecessary text
    setDate = (date) => {
        var stringDate = date.toLocaleString().substring(0, 10);
        this.setState({ payDate: stringDate })
    };

    //Function used to set the choesn value in the box after chaning it to String and ignore unnecessary text
    setTime = (time) => {
        var stringTime = time.toLocaleString().substring(10, 16);
        this.setState({ payTime: stringTime })
    };

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
                alert(AorE.A == true ? LangAr.AlertCamera : LangEn.AlertCamera);
            }
        }
    }

    //To show the image picker and runder it (FOR CERTIFICATIONS)
    _pickImage = async () => {
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
        }
    };

    //To validate TextInputs
    checkTextInput = async () => {
        //Check for the name TextInput
        if (!this.state.name.trim()) {
            alert(AorE.A == true ? LangAr.AlertCardName : LangEn.AlertCardName);
            return;
        }
        // Check for the bank TextInput
        if (this.state.bank == "") {
            alert(AorE.A == true ? LangAr.AlertBank : LangEn.AlertBank);
            return;
        }
        //Check for the bank card number TextInput
        if (!this.state.number.trim()) {
            alert(AorE.A == true ? LangAr.AlertCardNum : LangEn.AlertCardNum);
            return;
        }
        //Check for the bank card number length
        if (this.state.number.length !== 4) {
            alert(AorE.A == true ? LangAr.AlertCardNumLength : LangEn.AlertCardNumLength);
            return;
        }
        //Check it the bank card number contains other characters than digits
        if (this.state.number.match(/[^0-9]/)) {
            alert(AorE.A == true ? LangAr.AlertDigit : LangEn.AlertDigit);
            return;
        }
        //Check for the date TextInput
        if (this.state.payDate == this.dateBlank) {
            alert(AorE.A == true ? LangAr.AlertDate : LangEn.AlertDate);
            return;
        }
        //Check for the time TextInput
        if (this.state.payTime == this.timeBlank) {
            alert(AorE.A == true ? LangAr.AlertTime : LangEn.AlertTime);
            return;
        }
        //Check for the picture TextInput
        if (this.state.images.length == 0) {
            alert(AorE.A == true ? LangAr.AlertReceipt : LangEn.AlertReceipt);
            return;
        }
        //Checked successfully
        await axios.post(api + "/RegisterTrainer/" + this.state.trainerId + "/" + traineeId, {
            trainerId: this.state.trainerId,
            isOnline: this.state.isOnline,
            platform: this.state.platform,
            time: this.state.time,
            date: this.state.date,
            payment: this.state.payment,
        });
        this.props.navigation.navigate("Thanks")
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <PaymentDetails
                        show={this.state.show}
                        image={this.state.image}
                        images={this.state.images}
                        name={this.state.name}
                        number={this.state.number}
                        bank={this.state.bank}
                        date={this.state.payDate}
                        time={this.state.payTime}
                        setShow={this.onShow}
                        setName={this.setName}
                        setNumber={this.setNumber}
                        setBank={this.setBank}
                        setDate={this.setDate}
                        setTime={this.setTime}
                        _pickImage={this._pickImage}
                        addCertification={this.addCertification}
                    />
                    <TouchableOpacity
                        onPress={this.checkTextInput}
                        style={styles.buttonContainer}>
                        <Text style={styles.buttonText}> {AorE.A == true ? LangAr.Continue : LangEn.Continue}</Text>
                    </TouchableOpacity>
                </ScrollView></View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
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
        alignSelf: "center",
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 17,
        color: "#F25F5C",
        fontWeight: "bold",
    },
});
