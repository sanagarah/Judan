//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, ScrollView, View } from "react-native";
import ChatBox from "../../components/ChatBox";

//The beginning of the class
export default class ChatList extends Component {
  state = { text: "" }
  render() {
    return (
      <View style={styles.container}>
        {/*View for ppl's msg*/}
        <ScrollView>
          <ChatBox
            nav={() => this.props.navigation.navigate("Chating")}
            name="Sana"
            lastMassage="hi"
            time="15">
          </ChatBox>
          <ChatBox
            nav={() => this.props.navigation.navigate("Chating")}
            name="Salwa"
            lastMassage="hi, whats up"
            time="15">
          </ChatBox>
          <ChatBox
            nav={() => this.props.navigation.navigate("Chating")}
            name="Aseel"
            lastMassage="hi, whats up"
            time= "15"
          >
          </ChatBox>
        </ScrollView>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25 
  },
});
