//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import welcome from "../screens/Sign/Welcome";
import sign from "../screens/Sign/Sign";
import signUp from "../screens/Sign/SignUp";
import thanks from "../screens/Sign/Thanks";


const rootNavigation = createStackNavigator(
    {
        Welcome: welcome,
        Sign: sign,
        SignUp: signUp,
        Thanks: thanks
    },
    {
        initialRouteName: "Welcome",
        defaultNavigationOptions: {
            headerShown: false
        },
    },
    {
        lazy: true
    }
);

const AppProject = createAppContainer(rootNavigation);

//The beginning of the class
export default class SignNavigation extends Component {
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
