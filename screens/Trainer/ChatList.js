//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, ScrollView, View } from "react-native";
import ChatBox from "../../components/ChatBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
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
      text: "",
      traineeId: [],
      registrationInfo: []
    }
  }

  //To have the trainer's trainee list
  componentDidMount = async () => {
    userId = await AsyncStorage.getItem("userId");
    let trainees = [];
    let traineesInfo = [];

    //To get the name and the id of the registered trainers
    await axios.get(api + "/TraineeForTrainer/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        trainees.push({
          id: item.id,
          traineeName: item.name
        })
      })
    });
    this.setState({ traineeId: trainees });

    //To get the registration information
    let traineeInfo = this.state.traineeId;
    traineeInfo.filter(async (item) => {
      await axios.get(api + "/RegisterGet/" + item.id).then(resp => {
        let items = (resp.data);
        items.filter((t) => {
          traineesInfo.push({
            id: item.id,
            traineeName: item.traineeName,
            date: t.date,
            time: t.time,
            platform: t.platform,
            isOnline: t.isOnline,
            payment: t.payment
          })
          this.setState({ registrationInfo: traineesInfo })
        })
      })
    })
  }

  lapsList() {
    return this.state.registrationInfo.map((data) => {
      return (
        <ChatBox
          nav={() => this.props.navigation.navigate("Chating", {
            trainerName: data.traineeName
          })}
          key={data.id}
          name={data.traineeName}
          lastMassage="Hello"
          time="8:15">
        </ChatBox>
      )
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
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
