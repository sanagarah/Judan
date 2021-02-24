import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import Levels from "../../components/TouchableLevels"
import Subject from "../../components/Subject"
import Certificate from "../../components/Certificate"

const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class UpdatedProgress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      progressColor1: "white",
      progressColor2: "white",
      progressColor3: "white",
      circleColor1: "gray",
      circleColor2: "gray",
      circleColor3: "gray",
      levelnum: 0,
      show1: false,
      toggle1: true,
      image: null,
      images: [],
    }
  }

  //To show the popup page for uploading a certification
  onShow1 = () => {
    if (this.state.toggle1)
      this.setState({ show1: true, toggle1: false });
    else {
      this.setState({ show1: false, toggle1: true });
    }
  }

  //To push the new image uri into an array and creat certification component using that uri
  addCertification = () => {
    let name = this.state.image;
    let component = this.state.images;
    component.push(name);
    this.setState({ array: component, text: '' })
    this.onShow1();
  }

  //To directly ask for permission
  componentDidMount() {
    this.getPermissionAsync();
  }

  //To have the permission needed to access the camera roll
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  //To show the image picker and runder it (FOR CERTIFICATIONS)
  _pickImage1 = async () => {
    this.onShow1();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.cancelled) {
      // Saving the uri of the selected photo*/ 
      this.setState({ image: result.uri });
      console.log(result);
    }
  };

  setLevel1 = () => {
    this.setState({ levelNum: 1, progressColor1: "#FFE066", circleColor1: "#FFE066" })
  }
  setLevel2 = () => {
    this.setState({ levelNum: 2, progressColor1: "#FFE066", progressColor2: "#FFE066", circleColor1: "#FFE066", circleColor2: "#247BA0" })
  }
  setLevel3 = () => {
    this.setState({ levelNum: 3, progressColor1: "#FFE066", progressColor2: "#FFE066", progressColor3: "#FFE066", circleColor1: "#FFE066", circleColor2: "#247BA0", circleColor3: "#70C1B3" })
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/header2.png')} style={styles.header}>
          <Text style={styles.text1}>The trainee Salma</Text>
          <Text style={styles.text2}>Certification</Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity onPress={this._pickImage1}>
              <Image source={require('../../assets/images/post.png')} style={styles.certification}></Image>
            </TouchableOpacity>
            {this.state.images.map((data, index) => {
              return <Certificate img={{ uri: data }} key={index}></Certificate>
            })}
          </ScrollView>
        </ImageBackground>
        <View>
          <Subject></Subject>
        </View>
        <View >
          {this.setValue}
        </View>
        <Levels
          cColor1={this.state.circleColor1}
          cColor2={this.state.circleColor2}
          cColor3={this.state.circleColor3}
          pColor1={this.state.progressColor1}
          pColor2={this.state.progressColor2}
          pColor3={this.state.progressColor3}
          press1={this.setLevel1}
          press2={this.setLevel2}
          press3={this.setLevel3}
        ></Levels>

        {/* To render image picker and show the popUp page for sharing a certification */}
        <Modal isVisible={this.state.show1}>
          <TouchableOpacity style={styles.modal} onPress={this.onShow1}>
            <View style={styles.popUp1}>
              {/* To push the new image uri into an array and creat certification component using that uri */}
              <View style={styles.certificationContainer}>
              <Certificate img={{ uri: this.state.image }}></Certificate>
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
    color: "white",
    fontWeight: "bold",
    textDecorationLine: 'underline',
    fontSize: 17,
    margin: 10
  },
  text2: {
    color: "white",
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
    backgroundColor: "white",
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
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 90,
    margin: 10
  },
});
