//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slides from "../../components/Slides";
//import language files for translation
import AorE from "../../lang/AorE";

//The content of welcome slides
const SLIDE_DATA = [
    { text: "Welcome to Judan app", color: "#F25F5C" },
    { text: "Use this to get the perfect trainer for your talent", color: "#247BA0" },
    { text: "Or to be that perfect trainer!", color: "#6CBDAF" }
];

const SLIDE_DATA2 = [
    { text: "Welcome again", color: "#F4D765" },
];

//The beginning of the class
export default class WelcomeScreen extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            token: false
        }
    }

    async componentDidMount() {
        let token = await AsyncStorage.getItem("fb_token");

        if (token) {
            this.setState({ token: true });
        } else {
            this.setState({ token: false });
        }
    }

    onCompleteArabic = () => {
        this.props.navigation.navigate("Sign");
        AorE.A = true
    }

    onCompleteEnglish = () => {
        this.props.navigation.navigate("Sign");
        AorE.A = false
    }

    render() {
        if (this.state.token) {
            return <Slides data={SLIDE_DATA2} onCompleteArabic={this.onCompleteArabic} onCompleteEnglish={this.onCompleteEnglish} />
        }
        else {
            return <Slides data={SLIDE_DATA} onCompleteArabic={this.onCompleteArabic} onCompleteEnglish={this.onCompleteEnglish} />
        }
    }
}
