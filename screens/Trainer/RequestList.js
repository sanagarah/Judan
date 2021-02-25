//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import RequestedBox from "../../components/RequestedBox";

//to have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height;
//to have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width;

//The beginning of the class
export default class RequestList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require("../../assets/images/requestHeader.png")} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 4 }}></Image>
        <RequestedBox
          name="Sara"
          type="online"
          place="on Zoom"
          time="From 10 to 12"
          nav1={() => this.props.navigation.navigate("Chating")}
          nav2={() => this.props.navigation.navigate("Progress")}>
        </RequestedBox>

        <RequestedBox
          name="Hadeel"
          type="In Person"
          place="on Google meet"
          time="From 7 to 8"
          nav1={() => this.props.navigation.navigate("Chating")}
          nav2={() => this.props.navigation.navigate("Progress")}>
        </RequestedBox>

        <RequestedBox
          name="Ahmed"
          type="online"
          place="on Teams"
          time="From 10 to 11"
          nav1={() => this.props.navigation.navigate("Chating")}
          nav2={() => this.props.navigation.navigate("Progress")}>
        </RequestedBox>
      </ScrollView>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});