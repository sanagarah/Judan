//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";
import ChatDpnd from "../../components/ChatDpnd";
import Header from "../../components/ChatHeader";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//The beginning of the class
export default class Chat extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <View style={styles.container1}>
        {/*view for header box*/}
        <View style={styles.container2}>
          <Header name={this.props.navigation.state.params.trainerName} subname={AorE.A == true ? LangAr.Requested : LangEn.Requested} nav={() => this.props.navigation.navigate("Chat")}>
          </Header>
        </View>

        {/*view for masseage box*/}
        <View style={styles.container3}>
          <ChatDpnd />
        </View>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    height: 100,
    backgroundColor: "#79D2AE",
    width: "100%",
    flexDirection: "column",
  },
  container3: {
    flex: 5,
    backgroundColor: "#E7E8EF",
    width: "100%",
    justifyContent: "center",
  },
});

