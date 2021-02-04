import React from "react";
import Interest from "../../components/Interests";
import Post from "../../components/Posts";
import Review from "../../components/Reviews";
import Modal from 'react-native-modal';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class PopUps extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      toggle: true,
      image: null,
    }
  }
  onShow = () => {
    if (this.state.toggle)
      this.setState({ show: true, toggle: false });
    else {
      this.setState({ show: false, toggle: true });
    }
  }

  render() {
    let { image } = this.state;
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ScrollView>
          <Button title="Edit profile" color="#247ba0" onPress={this.onShow}></Button>
          {/* Header section */}
          <View style={styles.section1}>
            {/*Container for the first row in the header */}
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.label1}>100</Text>
                <Text style={styles.label2}>Posts</Text>
              </View>
              <Image source={{ uri: image }} style={styles.profileImage}></Image>
              <View style={styles.header}>
                <Text style={styles.label1}>100</Text>
                <Text style={styles.label2}>Trainees</Text>
              </View>
            </View>
            {/*The second row in the header starts here */}
            <Text style={styles.label1}>Name</Text>
            {/*The third row in the header starts here */}
            <Text style={styles.label2}>field, trainer</Text>
            {/*The fourth row in the header starts here */}
            <Text style={styles.label3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </View>
          <View style={styles.section2}>
            {/* To have small left margin */}
            <View style={styles.marginContainer}>
              {/* Inserted media section */}
              <ScrollView horizontal={true}>
                <Post imgPath={require("../../assets/images/post1.jpg")}></Post>
                <Post imgPath={require("../../assets/images/post2.jpg")}></Post>
                <Post imgPath={require("../../assets/images/post3.png")}></Post>
                <Post imgPath={require("../../assets/images/post1.jpg")}></Post>
              </ScrollView>
              {/* Interests section */}
              <Text style={styles.label4}>Interests</Text>
              <View style={styles.container}>
                <Interest interest="piano"></Interest>
              </View>
              {/* Reviews section */}
              <Text style={styles.label4}>Reviews</Text>
            </View>
          </View>
          <View style={styles.section1}>
            <Review text="hi"></Review>
          </View>
        </ScrollView>
        {/* Upload button */}
        <TouchableOpacity style={styles.upload}>
          <Image source={require("../../assets/images/upload.png")} style={styles.uploadImage} ></Image>
        </TouchableOpacity>
        {/* To show the popUp page for editing profile */}
        <Modal isVisible={this.state.show}>
          <TouchableOpacity activeOpacity={1} onPress={this.onShow}>
            <View style={styles.popUp}>
              <View style={styles.container}>
                {/* To upload from galary */}
                <TouchableOpacity onPress={this._pickImage}>
                  <Image source={{ uri: image }} style={styles.mediaImage}></Image>
                </TouchableOpacity>
              </View>
              {/* To change textual information */}
              <TextInput placeholder="Change name"></TextInput>
              <TextInput placeholder="Change field"></TextInput>
              <TextInput placeholder="Change bio"></TextInput>
              <TouchableOpacity style={styles.checkImage} onPress={this.onShow}>
                <Image source={require("../../assets/images/check.png")} style={styles.checkImage}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView >
    )
  }
  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      {/*Saving the uri of the selected photo*/ }
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({
  upload: {
    position: "absolute",
    bottom: 5,
    right: 5,
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
    height: 60,
    width: 60,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 90,
  },
  popUp: {
    height: 300,
    width: 350,
    alignSelf: "center",
    backgroundColor: "white",
    paddingLeft: 15,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: "#247ba0"
  },
  section1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dadfe5",
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
  profileImage: {
    height: 90,
    width: 90,
    borderWidth: 1,
    borderColor: "#D4D1D1",
    borderRadius: 90,
    marginRight: 50,
    marginLeft: 70
  },
  label1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center"
  },
  label2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#247ba0",
  },
  label3: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
    color: "gray",
    marginTop: 10
  },
  label4: {
    fontSize: 16,
    fontWeight: "700",
    color: "#247ba0",
    marginTop: 15
  },
});
