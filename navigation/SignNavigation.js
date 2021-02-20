import React from "react";
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

export default class app extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <AppProject />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
