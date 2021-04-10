//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, ImageBackground, Dimensions, Text, ScrollView } from "react-native";
import Levels from "../../components/Levels";
import Subject from "../../components/Subject";
import Certificate from "../../components/Certificate";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import Api link
import Api from "../../Api";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Possible Unhandled promise rejection",
]);

let api = Api.link;

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height;
let userId;

//The beginning of the class
export default class Progress extends Component {
  constructor(props) {
    super(props)
    //Declare the initial values for states
    this.state = {
      progressColor1: "#FFF",
      progressColor2: "#FFF",
      progressColor3: "#FFF",
      circleColor1: "#808080",
      circleColor2: "#808080",
      circleColor3: "#808080",
      subject: AorE.A == true ? LangAr.Subject : LangEn.Subject,
      certifications: [],
      subject: "",
      level: 0,
      levels: []
    }
  }

  //This function will automatically run after rendering the page
  componentDidMount = async () => {
    userId = await AsyncStorage.getItem("userId");
    let levels = []
    let certifications = this.state.certifications

    //To get trainee's cartifications 
    await axios.get(api + "/Certification/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        certifications.push(item.uri);
      });
    })
    //To get the progress for each subject
    await axios.get(api + "/Progress/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        levels.push({
          subject: item.subject,
          level: item.level
        })
      })
    });
    this.setState({ levels: levels })
  }

  //To make the chosen valuse appear in the box
  setSubject = async (value) => {
    this.setState({ subject: value })

    let levels = this.state.levels
    for (let i = 0; i <= levels.length; i++) {
      await this.setState({ level: 0 })
      try {
        if (levels[i].subject == value) {
          await this.setState({ level: levels[i].level })
          break;
        }
      }
      catch (error) {
        console.log("not found")
      }
    }

    if (this.state.level == 0)
      this.setState({ progressColor1: "#FFF", progressColor2: "#FFF", progressColor3: "#FFF", circleColor1: "#808080", circleColor2: "#808080", circleColor3: "#808080" });
    if (this.state.level == 1)
      this.setState({ progressColor1: "#FFE066", progressColor2: "#FFF", progressColor3: "#FFF", circleColor1: "#FFE066", circleColor2: "#808080", circleColor3: "#808080" });
    if (this.state.level == 2)
      this.setState({ progressColor1: "#FFE066", progressColor2: "#FFE066", progressColor3: "#FFF", circleColor1: "#FFE066", circleColor2: "#247BA0", circleColor3: "#808080" });
    if (this.state.level == 3)
      this.setState({ progressColor1: "#FFE066", progressColor2: "#FFE066", progressColor3: "#FFE066", circleColor1: "#FFE066", circleColor2: "#247BA0", circleColor3: "#70C1B3" });
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../../assets/images/header1.png")} style={styles.header}>
          <View>
            <Text style={styles.text}>{AorE.A == true ? LangAr.Certification : LangEn.Certification}</Text>
            <ScrollView horizontal={true} style={AorE.A == true ? { alignSelf: "flex-end", marginRight: 10 } : { alignSelf: "flex-start", marginLeft: 10 }}>
              {this.state.certifications.map((data, index) => {
                return <Certificate image={data} key={index} />
              })}
            </ScrollView>
          </View>
        </ImageBackground>
        <View style={AorE.A == true ? { alignSelf: "flex-end", marginRight: 10 } : { alignSelf: "flex-start", marginLeft: 10 }}>
          <Subject subject={this.state.subject} setSubject={this.setSubject}></Subject>
        </View>
        <View>
          {this.setValue}
        </View>
        <Levels cColor1={this.state.circleColor1} cColor2={this.state.circleColor2} cColor3={this.state.circleColor3}
          pColor1={this.state.progressColor1} pColor2={this.state.progressColor2} pColor3={this.state.progressColor3}></Levels>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: "#eeeeee"
  },
  header: {
    height: SCREEN_HEIGHT / 2,
    justifyContent: "space-around",
  },
  text: {
    marginHorizontal: 10,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 15,
    marginTop: 70
  }
});
