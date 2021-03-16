//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions, TextInput } from "react-native";
import Interest from "../../components/Interests";
import Post from "../../components/Posts";
import Review from "../../components/Reviews";
import Modal from "react-native-modal";
import Header from "../../components/ProfileHeader";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//To have the total height of the screen
const SCREEN_HEIGHT = Dimensions.get("window").height;

//The beginning of the class
export default class TrainerProfile extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      show: false,
      toggle: true,
      text: "",
      review: []
    }
  }

  //Function used to change the show state
    onShow = () => {
    if (this.state.toggle)
      this.setState({ show: true, toggle: false });
    else {
      this.setState({ show: false, toggle: true });
    }
  }

  //Function to push the new review into the array
  addReview = () => {
    let name = this.state.text;
    let component = this.state.review;
    component.push(name);
    this.setState({ review: component, text: "" })
    this.onShow();
  }

  render() {
    return (
      <View>
        <ScrollView>
          {/* Header section */}
          <Header
            color="#F25F5C"
            postsNum={100}
            traineesNum={100}
            uri="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            name="Sara"
            field="Piano"
            rate={4.5}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></Header>
          <View style={styles.section2}>
            {/* To have small left margin */}
            <View style={styles.marginContainer}>
              {/* Inserted media section */}
              <ScrollView horizontal={true}>
                <Post image={require("../../assets/images/post1.jpg")}></Post>
                <Post image={require("../../assets/images/post2.jpg")}></Post>
                <Post image={require("../../assets/images/post3.png")}></Post>
                <Post image={require("../../assets/images/post1.jpg")}></Post>
              </ScrollView>
              {/* Interests section */}
              <Text style={styles.label}>{AorE.A == true ? LangAr.Interests : LangEn.Interests}</Text>
              <View style={[styles.container], AorE.A == true ? { alignSelf: "flex-end" } : { alignSelf: "flex-start"}}>
                <Interest interest="piano"></Interest>
              </View>
              {/* Reviews section */}
              <Text style={styles.label}>{AorE.A == true ? LangAr.Reviews : LangEn.Reviews}</Text>
            </View>
          </View>
          <View style={styles.section1}>
            {this.state.review.map((data, index) => {
              return <Review text={data} key={index} />
            })}
          </View>
        </ScrollView>
        {/* Write button */}
        <TouchableOpacity style={[styles.write, AorE.A == true ? { left: 5 } : { right: 5 } ]} onPress={this.onShow}>
          <Image source={require("../../assets/images/write.png")} style={styles.writeImage} ></Image>
        </TouchableOpacity>

        {/* Popup page*/}
        <Modal isVisible={this.state.show}>
          <TouchableOpacity style={styles.modal} onPress={this.onShow}>
            <View style={styles.popUp}>
              <TextInput placeholder={AorE.A == true ? LangAr.WriteReview : LangEn.WriteReview} style={styles.textInput} onChangeText={(txt) => { this.setState({ text: txt }) }}>
              </TextInput>
              <TouchableOpacity style={styles.checkImage} onPress={this.addReview}>
                <Image source={require("../../assets/images/check.png")} style={styles.checkImage}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View >
    )
  }
}
//Declare the style
const styles = StyleSheet.create({
  write: {
    position: "absolute",
    bottom: 5,
  },
  writeImage: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0)",
    borderRadius: 90,
  },
  modal: {
    flex: 1,
    justifyContent: "center"
  },
  popUp: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    height: SCREEN_HEIGHT / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 0.5,
    width: "90%",
    borderColor: "#808080",
    borderBottomWidth: 1,
    fontSize: 17
  },
  section1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dadfe5",
    paddingVertical: 10,
  },
  section2: {
    backgroundColor: "#FFF",
    paddingTop: 10
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  marginContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F25F5C",
    marginTop: 15,
    marginHorizontal: 5
  },
  checkImage: {
    height: 50,
    width: 50,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 90,
    margin: 10,
  },
});