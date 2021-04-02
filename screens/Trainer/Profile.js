//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Button, TouchableOpacity } from "react-native";
import Interest from "../../components/Interests";
import Post from "../../components/Posts";
import Review from "../../components/Reviews";
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
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
let userId;

//The beginning of the class
export default class Profile extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      show: false,
      show1: false,
      show2: false,
      toggle: true,
      toggle1: true,
      toggle2: true,
      image: null,
      image2: null,
      posts: [],
      interests: [],
      reviews: [],
      text: "",
      id: 0,
      name: "",
      field: "",
      bio: " ",
      rate: 0,
      postNum: 0,
      traineeNum: 0
    }
  }

  //To have trainer's profile information
  componentDidMount = async () => {
    userId = await AsyncStorage.getItem("userId");
    let name = ""
    let field = ""
    let bio = ""
    let rate = 0
    let picture = ""
    let traineeNum = 0
    let postNum = 0
    let interests = this.state.interests
    let posts = this.state.posts
    let reviews = this.state.reviews

    //To get trainer's interests
    await axios.get(api + "/Posts/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        posts.push(item.uri);
      });
    })

    //To get trainer's posts
    await axios.get(api + "/Interests/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        interests.push(item.name);
      });
    })

    //To get trainer's reviews
    await axios.get(api + "/Reviews/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        reviews.push({ content: item.content, traineeId: item.traineeId });
      });
    })

    await axios.get(api + "/IdTrainer/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        name = item.name
        field = item.field
        rate = item.rate
        bio = item.bio
        picture = item.picture
        traineeNum = item.traineeNum
        postNum = item.postNum
      });
    })
    this.setState({ id: userId })
    this.setState({ name: name })
    this.setState({ field: field })
    this.setState({ bio: bio })
    this.setState({ rate: rate })
    this.setState({ image2: picture })
    this.setState({ traineeNum: traineeNum })
    this.setState({ postNum: postNum })
  }

  //To show the popup page for adding interest
  onShow = () => {
    if (this.state.toggle)
      this.setState({ show: true, toggle: false });
    else {
      this.setState({ show: false, toggle: true });
    }
  }

  //To show the popup page for uploading a post
  onShow1 = () => {
    if (this.state.toggle1)
      this.setState({ show1: true, toggle1: false });
    else {
      this.setState({ show1: false, toggle1: true });
    }
  }

  //To show the popup page for editing profile
  onShow2 = async () => {
    if (this.state.toggle2)
      this.setState({ show2: true, toggle2: false });
    else {
      this.setState({ show2: false, toggle2: true });
    }
    let userId = await AsyncStorage.getItem("userId");
    await axios.post(api + "/TrainerUpdate/" + userId, {
      picture: this.state.image2,
      name: this.state.name,
      field: this.state.field,
      bio: this.state.bio
    });
  }

  //To push text into an array and creat Interest component using that text
  addInterest = async () => {
    let name = this.state.text;
    let component = this.state.interests;
    component.push(name);
    this.onShow();
    await axios.post(api + "/InterestsPost/" + userId, {
      name: this.state.text
    });
  }

  //To push the new image uri into an array and creat post component using that uri
  addPost = async () => {
    let uri = this.state.image;
    let component = this.state.posts;
    component.push(uri);
    this.onShow1();
    if (this.state.posts.length != 0) {
      this.setState({ postNum: this.state.posts.length })
      await axios.post(api + "/TrainerUpdate/" + userId, {
        picture: this.state.image2,
        name: this.state.name,
        field: this.state.field,
        bio: this.state.bio,
        postNum: this.state.postNum + 1
      });
      await axios.post(api + "/PostsPost/" + userId, {
        uri: this.state.image
      });
    }
  }

  //To change the name in the header
  setName(text) {
    this.setState({ name: text });
  }

  //To change the field in the header
  setField(text) {
    this.setState({ field: text });
  }

  //To change the bio in the header
  setBio(text) {
    this.setState({ bio: text });
  }

  //To directly ask for permission
  //This function will automatically run after rendering the page
  componentDidMount() {
    this.getPermissionAsync();
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

  //To show the image picker and runder it (FOR POSTS)
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
    }
  };

  //To show the image picker and runder it (FOR PROFILE PICTURE)
  _pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      postNumbers: 0
    });
    if (!result.cancelled) {
      {/*Saving the uri of the selected photo*/ }
      this.setState({ image2: result.uri });
    }
  };

  render() {
    return (
      <View style={styles.safeArea}>
        <ScrollView>
          <Button title={AorE.A == true ? LangAr.Edit : LangEn.Edit} color="#247BA0" onPress={this.onShow2}></Button>
          {/* Header section */}
          <Header
            rateForUser={this.state.id}
            postsNum={this.state.postNum}
            traineesNum={this.state.traineeNum}
            uri={this.state.image2}
            name={this.state.name}
            field={this.state.field}
            color="#247BA0"
            bio={this.state.bio}></Header>
          <View style={styles.section2}>
            {/* To have small left margin */}
            <View style={styles.marginContainer}>

              {/* Inserted posts section */}
              <ScrollView horizontal={true} style={AorE.A == true ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }}>
                <TouchableOpacity onPress={this._pickImage1}>
                  <Image style={styles.post} source={require("../../assets/images/post.png")}></Image>
                </TouchableOpacity>
                {this.state.posts.map((data, index) => {
                  return <Post image={data} key={index}></Post>
                })}
              </ScrollView>
              {/* Interests section */}
              <Text style={styles.label}>{AorE.A == true ? LangAr.Interests : LangEn.Interests}</Text>
              <ScrollView horizontal={true} style={[styles.container], AorE.A == true ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }}>
                <TouchableOpacity onPress={this.onShow}>
                  <View style={styles.background}>
                    <Image source={require("../../assets/images/plus.png")} style={styles.plusImage} ></Image>
                  </View>
                </TouchableOpacity>
                {this.state.interests.map((data, index) => {
                  return <Interest interest={data} key={index} />
                })}
              </ScrollView>
              {/* Reviews section */}
              <Text style={styles.label}>{AorE.A == true ? LangAr.Reviews : LangEn.Reviews}</Text>
            </View>
          </View>
          <View style={styles.section1}>
            {this.state.reviews.map((data, index) => {
              return <Review text={data.content} reviewFromUser={data.traineeId} key={index} />
            })}
          </View>
        </ScrollView>

        {/* Popup page for adding interest */}
        <Modal isVisible={this.state.show}>
          <TouchableOpacity style={styles.modal} onPress={this.onShow}>
            <View style={styles.popUp}>
              <TextInput placeholder="Add interest" style={styles.textInput} onChangeText={(txt) => { this.setState({ text: txt }) }}>
              </TextInput>
              <TouchableOpacity onPress={this.addInterest}>
                <Image source={require("../../assets/images/check.png")} style={styles.checkImage}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* To render image picker and show the popUp page for sharing a post */}
        <Modal isVisible={this.state.show1}>
          <TouchableOpacity style={styles.modal} onPress={this.onShow1}>
            <View style={styles.popUp1}>
              {/* To push the new image uri into an array and creat post component using that uri */}
              <View style={styles.postContainer}>
                <Post image={this.state.image}></Post>
              </View>
              <TouchableOpacity style={styles.checkImage} onPress={this.addPost}>
                <Image source={require("../../assets/images/check.png")} style={styles.checkImage}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* To show the popUp page for editing profile */}
        <Modal isVisible={this.state.show2}>
          <TouchableOpacity activeOpacity={1} onPress={this.onShow2}>
            <View style={styles.popUp1}>
              <View style={styles.container}>
                {/* To upload from galary */}
                <TouchableOpacity onPress={this._pickImage2}>
                  <Image source={{ uri: this.state.image2 }} style={styles.mediaImage}></Image>
                </TouchableOpacity>
              </View>
              {/* To change textual information */}
              <TextInput placeholder="Change name" onChangeText={(text) => this.setName(text)}></TextInput>
              <TextInput placeholder="Change field" onChangeText={(text) => this.setField(text)}></TextInput>
              <TextInput placeholder="Change bio" onChangeText={(text) => this.setBio(text)}></TextInput>
              <TouchableOpacity style={styles.checkImage} onPress={this.onShow2}>
                <Image source={require("../../assets/images/check.png")} style={styles.checkImage}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    )
  }
}
//Declare the style
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  background: {
    backgroundColor: "#F9F9F9",
    width: 70,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "baseline",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#FFF",
    margin: 5
  },
  plusImage: {
    width: 15,
    height: 15
  },
  mediaImage: {
    height: 60,
    width: 60,
    opacity: 0.7,
    borderWidth: 1,
    borderColor: "#D4D1D1",
    borderRadius: 90,
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
  popUp: {
    height: 150,
    width: 350,
    alignSelf: "center",
    backgroundColor: "#FFF",
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 30,
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
  textInput: {
    flexWrap: "wrap",
    width: "90%",
    borderColor: "#808080",
    borderBottomWidth: 0.5,
    paddingTop: 50,
    fontSize: 15
  },
  modal: {
    flex: 1,
    justifyContent: "center"
  },
  postContainer: {
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    width: "95%",
    paddingVertical: 10
  },
  section1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
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
    color: "#247BA0",
    marginTop: 15,
    marginHorizontal: 10
  },
  post: {
    height: 150,
    width: 100,
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 5
  },
});
