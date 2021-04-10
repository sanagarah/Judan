//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, ScrollView, View } from "react-native";
import ChatBox from "../../components/ChatBoxTrainee";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Api link
import Api from "../../Api";

let api = Api.link;
let userId;


//The beginning of the class
export default class ChatList extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      trainers: [],
      text: ""
    }
  }

  componentDidMount = async () => {
    userId = await AsyncStorage.getItem("userId");
    let trainers = [];

    //To get the name and the id of the registered trainers
    await axios.get(api + "/TraineeMessageGet/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        trainers.push({
          id: item.id,
          name: item.name,
          field: item.field,
          picture: item.picture,
        })
      })
    });
    this.setState({ trainers: trainers });
  }


  lapsList() {
    return this.state.trainers.map((data, index) => {
      return (
        <View key={index}>
          <ChatBox
            nav={() => this.props.navigation.navigate("Chating", {
              id: data.id,
              name: data.name
            })}
            name={data.name}
            field={data.field}
            picture={data.picture}
          >
          </ChatBox>
        </View>)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/*View for ppl's msg*/}
        <ScrollView>
          {this.lapsList()}
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
