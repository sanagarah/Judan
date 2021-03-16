//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import RequestedBox from "../../components/RequestedBox";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height;
//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width;

//The beginning of the class
export default class RequestList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={AorE.A == true ? require("../../assets/images/requestHeaderA.png") : require("../../assets/images/requestHeader.png")}
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 4 }}
        />
        <RequestedBox
          name="Sara"
          type={AorE.A == true ? LangAr.Online : LangEn.Online}
          place="Zoom"
          time="10am"
          nav1={() => this.props.navigation.navigate("Chating")}
          nav2={() => this.props.navigation.navigate("Progress")}>
        </RequestedBox>

        <RequestedBox
          name="Hadeel"
          type={AorE.A == true ? LangAr.Personal : LangEn.Personal}
          place="Google meet"
          time="7pm"
          nav1={() => this.props.navigation.navigate("Chating")}
          nav2={() => this.props.navigation.navigate("Progress")}>
        </RequestedBox>

        <RequestedBox
          name="Ahmed"
          type={AorE.A == true ? LangAr.Online : LangEn.Online}
          place="Teams"
          time="12pm"
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
    backgroundColor: "#FFF"
  }
});