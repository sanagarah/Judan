//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, ScrollView, View } from "react-native";
import ChatBox from "../../components/ChatBoxTrainer";
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
      trainees: [],
      text: ""
    }
  }

  componentDidMount = async () => {
    userId = await AsyncStorage.getItem("userId");
    let trainees = [];

    //To get the name and the id of the registered trainers
    await axios.get(api + "/TrainerMessageGet/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        trainees.push({
          id: item.id,
          name: item.name,
          interest: item.interest,
        })
      })
    });
    this.setState({ trainees: trainees });
  }


  lapsList() {
    return this.state.trainees.map((data, index) => {
      return (
        <View key={index}>
          <ChatBox
            nav={() => this.props.navigation.navigate("Chating", {
              id: data.id,
              name: data.name
            })}
            name={data.name}
            field={data.interest}
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
