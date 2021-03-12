//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import _ from "lodash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import Slides from "../../components/Slides";

//The content of welcome slides
const SLIDE_DATA = [
    { text: "Welcome to Judan app", color: "#F25F5C" },
    { text: "Use this to get the perfect trainer for your talent", color: "#70C1B3" },
    { text: "Or to be that perfect trainer!", color: "#247BA0" }
];

//The beginning of the class
export default class WelcomeScreen extends Component {
    state = { token: null }

    async componentDidMount() {
        let token = await AsyncStorage.getItem("fb_token");

        if (token) {
            this.setState({ token });
        } else {
            this.setState({ token: false });
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate("Sign");
    }

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}
