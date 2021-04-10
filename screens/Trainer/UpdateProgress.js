//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, ImageBackground, Dimensions, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";
import Levels from "../../components/TouchableLevels";
import Subject from "../../components/Subject";
import Certificate from "../../components/Certificate";
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

//The beginning of the class
export default class UpdatedProgress extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      progressColor1: "#FFF",
      progressColor2: "#FFF",
      progressColor3: "#FFF",
      circleColor0: "#F25F5C",
      circleColor1: "#808080",
      circleColor2: "#808080",
      circleColor3: "#808080",
      levelnum: 0,
      show: false,
      toggle: true,
      image: null,
      images: [],
      subject: "",
      traineeId: 0,
      traineeName: ""
    }
  }


  //To directly ask for permission
  //This function will automatically run after rendering the page
  componentDidMount = async () => {
    this.getPermissionAsync();
    userId = await AsyncStorage.getItem("userId")
    const { params } = this.props.navigation.state
    let traineeId = params.traineeId
    let traineeName = params.traineeName

    this.setState({ traineeId: traineeId });
    this.setState({ traineeName: traineeName });
  }

  //To have the permission needed to access the camera roll
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert(AorE.A == true ? LangAr.AlertCamera : LangEn.AlertCamera);
      }
    }
  }

  //To show the image picker and runder it (FOR CERTIFICATIONS)
  _pickImage1 = async () => {
    this.onShow();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.cancelled) {
      // Saving the uri of the selected photo*/ 
      this.setState({ image: result.uri });
    }
  };

  //To show the popup page for uploading a certification
  onShow = () => {
    if (this.state.toggle)
      this.setState({ show: true, toggle: false });
    else {
      this.setState({ show: false, toggle: true });
    }
  }

  //To push the new image uri into an array and creat certification component using that uri
  addCertification = async () => {
    let uri = this.state.image;
    let component = this.state.images;
    component.push(uri);
    this.onShow();
    await axios.post(api + "/CertificationPost/", {
      uri: this.state.image,
      traineeId: this.state.traineeId,
      trainerId: parseInt(userId)
    });
  }

  //To make the chosen valuse appear in the box
  setSubject = async (value) => {
    this.setState({ subject: value })
  }
  setLevel0 = async () => {
    this.setState({ progressColor1: "#FFF", progressColor2: "#FFF", progressColor3: "#FFF", circleColor0: "#F25F5C", circleColor1: "#808080", circleColor2: "#808080", circleColor3: "#808080" });
    await axios.post(api + "/ProgressPost/" + this.state.traineeId + "/" + this.state.subject, {
      level: 0,
      subject: this.state.subject,
      traineeId: this.state.traineeId,
      trainerId: parseInt(userId)
    });
  }

  setLevel1 = async () => {
    this.setState({ levelNum: 1, progressColor1: "#FFE066", progressColor2: "#FFF", progressColor3: "#FFF", circleColor1: "#FFE066", circleColor2: "#808080", circleColor3: "#808080" })
    await axios.post(api + "/ProgressPost/" + this.state.traineeId + "/" + this.state.subject, {
      level: 1,
      subject: this.state.subject,
      traineeId: this.state.traineeId,
      trainerId: parseInt(userId)
    });
  }
  setLevel2 = async () => {
    this.setState({ levelNum: 2, progressColor1: "#FFE066", progressColor2: "#FFE066", progressColor3: "#FFF", circleColor1: "#FFE066", circleColor2: "#247BA0", circleColor3: "#808080" })
    await axios.post(api + "/ProgressPost/" + this.state.traineeId + "/" + this.state.subject, {
      level: 2,
      subject: this.state.subject,
      traineeId: this.state.traineeId,
      trainerId: parseInt(userId)
    });
  }
  setLevel3 = async () => {
    this.setState({ levelNum: 3, progressColor1: "#FFE066", progressColor2: "#FFE066", progressColor3: "#FFE066", circleColor1: "#FFE066", circleColor2: "#247BA0", circleColor3: "#70C1B3" })
    await axios.post(api + "/ProgressPost/" + this.state.traineeId + "/" + this.state.subject, {
      level: 3,
      subject: this.state.subject,
      traineeId: this.state.traineeId,
      trainerId: parseInt(userId)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../../assets/images/header2.png")} style={styles.header}>
          <Text style={styles.text1}>{this.state.traineeName}</Text>
          <Text style={styles.text2}>{AorE.A == true ? LangAr.Certification : LangEn.Certification}</Text>
          <ScrollView horizontal={true} style={AorE.A == true ? { alignSelf: "flex-end", marginRight: 10 } : { alignSelf: "flex-start", marginLeft: 10 }}>
            <TouchableOpacity onPress={this._pickImage1}>
              <Image source={require("../../assets/images/post.png")} style={styles.certification}></Image>
            </TouchableOpacity>
            {this.state.images.map((data, index) => {
              return <Certificate image={data} key={index}></Certificate>
            })}
          </ScrollView>
        </ImageBackground>
        <View style={AorE.A == true ? { alignSelf: "flex-end", marginRight: 10 } : { alignSelf: "flex-start", marginLeft: 10 }}>
          <Subject subject={this.state.subject} setSubject={this.setSubject}></Subject>
        </View>
        <View >
          {this.setValue}
        </View>
        <Levels
          cColor0={this.state.circleColor0}
          cColor1={this.state.circleColor1}
          cColor2={this.state.circleColor2}
          cColor3={this.state.circleColor3}
          pColor1={this.state.progressColor1}
          pColor2={this.state.progressColor2}
          pColor3={this.state.progressColor3}
          press0={this.setLevel0}
          press1={this.setLevel1}
          press2={this.setLevel2}
          press3={this.setLevel3}
        ></Levels>

        {/* To render image picker and show the popUp page for sharing a certification */}
        <Modal isVisible={this.state.show}>
          <TouchableOpacity style={styles.modal} onPress={this.onShow}>
            <View style={styles.popUp1}>
              {/* To push the new image uri into an array and creat certification component using that uri */}
              <View style={styles.certificationContainer}>
                <Certificate image={this.state.image}></Certificate>
              </View>
              <TouchableOpacity style={styles.checkImage} onPress={this.addCertification}>
                <Image source={require("../../assets/images/check.png")} style={styles.checkImage}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: "#eeeeee",
  },
  header: {
    height: SCREEN_HEIGHT / 2.3,
    justifyContent: "space-around",
  },
  text1: {
    color: "#FFF",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 17,
    margin: 10
  },
  text2: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 35
  },
  certification: {
    width: 150,
    height: 120,
    marginLeft: 10
  },
  modal: {
    flex: 1,
    justifyContent: "center"
  },
  popUp1: {
    height: 300,
    width: 350,
    alignSelf: "center",
    backgroundColor: "#FFF",
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "space-evenly"
  },
  certificationContainer: {
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    width: "95%",
    paddingVertical: 10
  },
  checkImage: {
    height: 50,
    width: 50,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 90,
    margin: 10
  },
});
