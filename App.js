import React from "react";
import TrainerNav from "./navigation/TrainerNavigator";
import TraineeNav from "./navigation/TraineeNavigator";
import SignNav from "./navigation/SignNavigation";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);
let user = "trainee";
//The beginning of the class
export default class app extends React.Component {
  render() {

    if (user == "trainer")
      return (<TrainerNav />)
    else if (user == "trainee") return (<TraineeNav />)
    else if (user == "sign") return (<SignNav />)
  }
}
