import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Nav from "./navigation/AppNavigator";
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);

export default class app extends React.Component {
  render() {
    return (
        <Nav />
    );
  }
}
