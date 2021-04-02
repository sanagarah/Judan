//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import RequestedBox from "../../components/RequestedBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import Api link
import Api from "../../Api";

let api = Api.link;
let userId;

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height;
//To have the total width of the screen
const SCREEN_WIDTH = Dimensions.get("window").width;

//The beginning of the class
export default class RequestList extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
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
      let trainingType;
      if (data.isOnline == true)
        trainingType = AorE.A == true ? LangAr.Online : LangEn.Online
      else trainingType = AorE.A == true ? LangAr.Personal : LangEn.Personal
      return (
        <RequestedBox
          key={data.id}
          name={data.traineeName}
          type={trainingType}
          place={data.platform}
          time={data.time}
          nav1={() => this.props.navigation.navigate("Chating", {
            trainerName: data.traineeName
          })}
          nav2={() => this.props.navigation.navigate("Progress", {
            trainerName: data.traineeName
          })}>
        </RequestedBox>
      )
    })
  }

  //To show the details
  onShow = () => {
    if (this.state.toggle)
      this.setState({ show: true, toggle: false });
    else {
      this.setState({ show: false, toggle: true });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={AorE.A == true ? require("../../assets/images/requestHeaderA.png") : require("../../assets/images/requestHeader.png")}
          style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 4 }}
        />
        {this.lapsList()}
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