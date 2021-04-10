//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, Text, View } from "react-native";
import Modal from "react-native-modal";
import Map from "../../components/Map"
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
      registrationInfo: [],
      show: false,
      latitude: 24.470901,
      longitude: 39.612236
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
      await axios.get(api + "/RegisterGet/" + item.id + "/" + userId).then(resp => {
        let items = (resp.data);
        items.filter((t) => {
          traineesInfo.push({
            id: item.id,
            traineeName: item.traineeName,
            date: t.date,
            time: t.time,
            platform: t.platform,
            isOnline: t.isOnline,
            payment: t.payment,
            type: t.type
          })
          this.setState({ registrationInfo: traineesInfo })
        })
      })
    })
  }

  //Function used to change the show state 
  onShow = () => {
    this.setState({ show: true });
  }

  //Function used to change the show state 
  onHide = () => {
    this.setState({ show: false });
  }


  lapsList() {
    return this.state.registrationInfo.map((data) => {
      let trainingType
      let serviceType
      let paymentType
      let place = data.platform
      let latitude
      let longitude

      //To show if the request is online or not
      if (data.isOnline == true)
        trainingType = AorE.A == true ? LangAr.Online : LangEn.Online
      else trainingType = AorE.A == true ? LangAr.Personal : LangEn.Personal

      //To show service type
      if (data.type == "Training")
        serviceType = AorE.A == true ? LangAr.Training : LangEn.Training
      else serviceType = AorE.A == true ? LangAr.Performing : LangEn.Performing


      //To show payment type
      if (data.payment == "Hourly")
        paymentType = AorE.A == true ? LangAr.Hourly : LangEn.Hourly
      else if (data.payment == "Monthly")
        paymentType = AorE.A == true ? LangAr.Monthly : LangEn.Monthly
      else
        paymentType = AorE.A == true ? LangAr.Yearly : LangEn.Yearly


      if (place.includes("lat")) {
        let strip = place.indexOf(" l")
        latitude = parseFloat(place.substr(5, strip - 5))
        longitude = parseFloat(place.substr(strip + 7, place.length))
        return (
          <View key={data.id}>
            <RequestedBox
              name={data.traineeName}
              type={"  " + trainingType + " "}
              place={data.platform}
              time={data.time}
              date={" - " + data.date}
              payment={"  " + paymentType}
              serviceType={"  " + serviceType}
              viewMap={this.onShow}
              nav1={() => this.props.navigation.navigate("Chating", {
                id: data.id,
                name: data.traineeName
              })}
              nav2={() => this.props.navigation.navigate("Progress", {
                traineeId: data.id,
                traineeName: data.traineeName
              })}>
            </RequestedBox>
            < Modal isVisible={this.state.show} >
              <TouchableOpacity style={styles.modal} onPress={this.onHide}>
                <Map latitude={latitude} longitude={longitude} ></Map>
              </TouchableOpacity>
            </Modal >
          </View>)
      }

      return (
        <RequestedBox
          key={data.id}
          name={data.traineeName}
          type={"  " + trainingType + " "}
          place={data.platform + " "}
          time={data.time}
          date={" - " + data.date}
          payment={"  " + paymentType}
          serviceType={"  " + serviceType}
          viewMap={this.onShow}
          nav1={() => this.props.navigation.navigate("Chating", {
            id: data.id,
            name: data.traineeName
          })}
          nav2={() => this.props.navigation.navigate("Progress", {
            traineeId: data.id,
            traineeName: data.traineeName
          })}>
        </RequestedBox>
      )
    })
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
  },
  modal: {
    flex: 1
  }
});