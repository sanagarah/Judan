import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import RequestedBox from "../../components/RequestedBox";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default class RequestList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require("../../assets/images/requestHeader.png")} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT/4}}></Image>
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
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white" 
  }
});