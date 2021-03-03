//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import PaymentDetails from "../../components/PaymentDetails";

//The beginning of the class
export default class BankCard extends Component {
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
            date: "Choose a date",
            time: "Choose a time",
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
        this.setState({ date: stringDate })
    };

    //Function used to set the choesn value in the box after chaning it to String and ignore unnecessary text
    setTime = (time) => {
        var stringTime = time.toLocaleString().substring(10, 16);
        this.setState({ time: stringTime })
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
                alert("Sorry, we need camera roll permissions to make this work!");
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
    checkTextInput = () => {
        //Check for the name TextInput
        if (!this.state.name.trim()) {
            alert("Please enter a card owner name");
            return;
        }
        // Check for the bank TextInput
        if (this.state.bank == "") {
            alert("Please choose a bank");
            return;
        }
        //Check for the bank card number TextInput
        if (!this.state.number.trim()) {
            alert("Please enter a card number");
            return;
        }
        //Check for the bank card number length
        if (this.state.number.length !== 4) {
            alert("Please enter the last 4 digits of your bank card number");
            return;
        }
        //Check it the bank card number contains other characters than digits
        if (this.state.number.match(/[^0-9]/)) {
            alert("Please enter digit numbers for bank card number");
            return;
        }
        //Check for the date TextInput
        if (this.state.date == "Choose a date") {
            alert("Please choose a date");
            return;
        }
        //Check for the time TextInput
        if (this.state.time == "Choose a time") {
            alert("Please choose a time");
            return;
        }
        //Check for the picture TextInput
        if (this.state.images.length == 0) {
            alert("Please upload the receipt");
            return;
        }
        //Checked successfully
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
                        date={this.state.date}
                        time={this.state.time}
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
                        <Text style={styles.buttonText}>Continue </Text>
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
