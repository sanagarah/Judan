//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions, TextInput } from "react-native";
import Interest from "../../components/Interests";
import Post from "../../components/Posts";
import Review from "../../components/Reviews";
import Modal from "react-native-modal";
import Header from "../../components/ProfileHeader";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import Api link
import Api from "../../Api";

let api = Api.link;

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
      review: [],
      interests: [],
      posts: [],
      reviews: [],
      id: 0,
      name: "",
      field: "",
      picture: "",
      bio: "",
      postNum: 0,
      traineeNum: 0
    }
  }

  componentDidMount = async () => {
    const { params } = this.props.navigation.state
    let id = await params.id
    let name = await params.name
    let field = await params.field
    let picture = await params.picture
    let bio = await params.bio
    let postNum = await params.postNum
    let traineeNum = await params.traineeNum
    this.setState({ id: id });
    this.setState({ name: name });
    this.setState({ field: field });
    this.setState({ picture: picture });
    this.setState({ bio: bio });
    this.setState({ postNum: postNum });
    this.setState({ traineeNum: traineeNum });


    await axios.get(api + "/Interests/" + this.state.id).then(resp => {
      let response = resp.data;
      this.setState({ interests: response })
    })

    await axios.get(api + "/Posts/" + this.state.id).then(resp => {
      let response = resp.data;
      this.setState({ posts: response })
    })

    await axios.get(api + "/Reviews/" + this.state.id).then(resp => {
      let response = resp.data;
      this.setState({ reviews: response })
    })
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
  addReview = async () => {
    let userId = await AsyncStorage.getItem("userId");
    await axios.post(api + "/ReviewPost/", {
      content: this.state.text,
      trainerId: this.state.id,
      traineeId: parseInt(userId)
    });
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
            postsNum={this.state.postNum}
            traineesNum={this.state.traineeNum}
            uri={this.state.picture}
            name={this.state.name}
            field={this.state.field}
            rateForUser={this.state.id}
            bio={this.state.bio}>
          </Header>
          <View style={styles.section2}>
            {/* To have small left margin */}
            <View style={styles.marginContainer}>
              {/* Inserted media section */}
              <ScrollView horizontal={true}>
                {this.state.posts.map((data) => {
                  return (
                    <Post key={data.id} image={data.uri}></Post>
                  )
                })}
              </ScrollView>
              {/* Interests section */}
              <Text style={styles.label}>{AorE.A == true ? LangAr.Interests : LangEn.Interests}</Text>
              <ScrollView horizontal={true} style={[styles.container], AorE.A == true ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }}>
                {this.state.interests.map((data) => {
                  return (
                    <Interest key={data.id} interest={data.name} textColor="#F25F5C"></Interest>
                  )
                })}
              </ScrollView>
              {/* Reviews section */}
              <Text style={styles.label}>{AorE.A == true ? LangAr.Reviews : LangEn.Reviews}</Text>
            </View>
          </View>
          <View style={styles.section1}>
            {this.state.reviews.map((data) => {
              return <Review key={data.id} reviewFromUser={data.traineeId.toString()} text={data.content} />
            })}
          </View>
        </ScrollView>
        {/* Write button */}
        <TouchableOpacity style={styles.write} onPress={this.onShow}>
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
    right: 5
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