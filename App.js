//import React in the code
import React from "react";
//import all the components we are going to use
import TrainerNav from "./navigation/TrainerNavigator";
import TraineeNav from "./navigation/TraineeNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignNav from "./navigation/SignNavigation";
import { Provider } from "react-redux";
import store from "./store";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);


//The beginning of the class
export default class app extends React.Component {

  state = {
    token: null,
    user: ""
  }

  //Check whether to token and the type of user exist in the local storage of the device and store them as states
  async componentDidMount() {
    //AsyncStorage.removeItem("fb_token");
    //AsyncStorage.removeItem("user");
    let token = await AsyncStorage.getItem("fb_token");
    let user = await AsyncStorage.getItem("user");

    if (user) {
      this.setState({ user });
    } else {
      this.setState({ user: "" });
    }

    if (token) {
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  render() {
    if (this.state.token && this.state.user == "trainee") {
      return (
         //Return the navigation stack of the trainee
        <Provider store={store}>
          <TraineeNav />
        </Provider >)
    } else if (this.state.token && this.state.user == "trainer") {
      return (
            //Return the navigation stack of the trainer
        <Provider store={store}>
          <TrainerNav />
        </Provider >)
    }
    else {
      return (
            //Return the navigation stack of signing
        <Provider store={store}>
          <SignNav />
        </Provider>)
    }
  }
}
