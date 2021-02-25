//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import sign from "../screens/Sign/Sign"
import logIn from "../screens/Sign/LogIn"
import signUp from "../screens/Sign/SignUp"
import thanks from "../screens/Sign/Thanks"

const rootNavigation = createStackNavigator(
    {
        Sign: sign,
        LogIn: logIn,
        SignUp: signUp,
        Thanks: thanks
    },
    {
        initialRouteName: "Sign",
        defaultNavigationOptions: {
            headerShown: false
        },
    }
);

const AppProject = createAppContainer(rootNavigation);

//The beginning of the class
export default class app extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppProject />
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
