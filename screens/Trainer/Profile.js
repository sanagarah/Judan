import React from "react";
import Interest from "../../components/Interests";
import Post from "../../components/Posts";
import Review from "../../components/Reviews";
import Modal from 'react-native-modal';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../../components/ProfileHeader";

export default class PopUps extends React.Component {
  constructor(props) {
    super(props)
    
    //Declaring the states
    this.state = {
      show: false,
      show1: false,
      show2: false,
      toggle: true,
      toggle1: true,
      toggle2: true,
      image: null,
      image2: null,
      images: [],
      interests: [],
      text: "",
      name: "Name",
      field: "Field",
      bio: "Please let me be your trainer",
    }
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
  onShow2 = () => {
    if (this.state.toggle2)
      this.setState({ show2: true, toggle2: false });
    else {
      this.setState({ show2: false, toggle2: true });
    }
  }

  //To push text into an array and creat Interest component using that text
  addInterest = () => {
    let name = this.state.text;
    let component = this.state.interests;
    component.push(name);
    this.setState({ review: component, text: '' })
    this.onShow();
  }

  //To push the new image uri into an array and creat post component using that uri
  addPost = () => {
    let name = this.state.image;
    let component = this.state.images;
    component.push(name);
    this.setState({ array: component, text: '' })
    this.onShow1();
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
  componentDidMount() {
    this.getPermissionAsync();
  }

  //To have the permission needed for access the camera roll
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
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
      console.log(result);
    }
  };

  //To show the image picker and runder it (FOR PROFILE PICTURE)
  _pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    
    console.log(result);
    if (!result.cancelled) {
      {/*Saving the uri of the selected photo*/ }
      this.setState({ image2: result.uri });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
          <Button title="Edit profile" color="#247ba0" onPress={this.onShow2}></Button>
          {/* Header section */}
          <Header
            rate={5}
            postsNum={100}
            traineesNum={100}
            uri={this.state.image2}
            name={this.state.name}
            field={this.state.field}
            color="#247ba0"
            bio={this.state.bio}></Header>
          <View style={styles.section2}>
            {/* To have small left margin */}
            <View style={styles.marginContainer}>

              {/* Inserted posts section */}
              <ScrollView horizontal={true}>
                <TouchableOpacity onPress={this._pickImage1}>
                  <Image style={styles.post}source={require("../../assets/images/post.png")}></Image>
                </TouchableOpacity>
                {this.state.images.map((data, index) => {
                  return <Post imgPath={{ uri: data }} key={index}></Post>
                })}
              </ScrollView>
              {/* Interests section */}
              <Text style={styles.label}>Interests</Text>
              <View style={styles.container}>
                <TouchableOpacity style={styles.write} onPress={this.onShow}>
                  <View style={styles.background}>
                    <Image source={require("../../assets/images/plus.png")} style={styles.plusImage} ></Image>
                  </View>
                </TouchableOpacity>
                {this.state.interests.map((data, index) => {
                  return <Interest interest={data} key={index} />
                })}
              </View>
              {/* Reviews section */}
              <Text style={styles.label}>Reviews</Text>
            </View>
          </View>
          <View style={styles.section1}>
            <Review text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></Review>
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
                <Post imgPath={{ uri: this.state.image }}></Post>
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
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  background: {
    backgroundColor: "#F9F9F9",
    width: 70,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'baseline',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "white",
    margin: 5
  },
  plusImage: {
    width: 15,
    height: 15
  },
  upload: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  mediaImage: {
    height: 60,
    width: 60,
    opacity: 0.7,
    borderWidth: 1,
    borderColor: "#D4D1D1",
    borderRadius: 90,
  },
  uploadImage: {
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0)",
    borderRadius: 90,
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
  popUp: {
    height: 150,
    width: 350,
    alignSelf: "center",
    backgroundColor: "white",
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 30,
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
  textInput: {
    flexWrap: "wrap",
    width: "90%",
    borderColor: "gray",
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
    backgroundColor: "white",
    paddingTop: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: "center",
  },
  marginContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#247ba0",
    marginTop: 15
  },
  post: {
    height: 150,
    width: 100,
    borderWidth: 1,
    borderRadius: 30,
    marginRight: 5
  },
});
