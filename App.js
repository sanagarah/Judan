import React from "react";
import TrainerNav from "./navigation/TrainerNavigator";
import TraineeNav from "./navigation/TraineeNavigator";
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);
let user = "trainer";
export default class app extends React.Component {
  render() {

    if (user == "trainer")
      return (<TrainerNav />)
    else if (user == "trainee") return (<TraineeNav />)
  }
}
