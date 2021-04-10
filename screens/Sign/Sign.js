//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TraineeTrainer from "../../components/TraineeTrainer";
import SignUpButton from "../../components/SignButton";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height

//The beginning of the class
export default class Sign extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            opacity: 0
        }
    }

    //To change the opacity of the chosen choice
    changeOpacity1 = async () => {
        this.setState({ opacity: 1 })
        await AsyncStorage.setItem("user", "trainee");
    }

    changeOpacity2 = async () => {
        this.setState({ opacity: 2 })
        await AsyncStorage.setItem("user", "trainer");
    }

    //To validate
    check = () => {
        //Check if an option has been chosen
        if (this.state.opacity == 0) {
            alert(AorE.A == true ? LangAr.AlertSign : LangEn.AlertSign);
            return;
        }
        //Choosed successfully
        this.props.navigation.navigate("SignUp")
    };

    render() {
        return (
            <View style={styles.container}>

                {/*contain a header pic*/}
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require("../../assets/images/header.jpg")} />
                </View>

                <Text style={styles.text}>{AorE.A == true ? LangAr.ChooseWhatToBe : LangEn.ChooseWhatToBe}</Text>

                {/* component for showing the choices */}
                <TraineeTrainer opacity={this.state.opacity} changeOpacity1={this.changeOpacity1} changeOpacity2={this.changeOpacity2} />

                {/* Button component refer to a text button "it can be changed to any text" */}
                <SignUpButton
                    color="#F26D6A"
                    text={AorE.A == true ? LangAr.SignUp : LangEn.SignUp}
                    nav={this.check}
                />
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        marginBottom: 30
    },
    header: {
        height: SCREEN_HEIGHT / 1.8,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 300,
    },
    text: {
        fontSize: 17,
        color: "#808080",
        bottom: "6%",
        marginVertical: 20,
        alignSelf: "center"
    },
});