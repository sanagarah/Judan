import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
<<<<<<< HEAD
=======

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
>>>>>>> d8b58ccab6243338c82566fbdb1bf9da86da1b97
}

const styles = StyleSheet.create({});