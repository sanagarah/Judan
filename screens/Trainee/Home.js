import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View>
<<<<<<< HEAD
        <Text>Hi Ameera 12345676 </Text>
=======
        <Button title="Match me" onPress={() => { this.props.navigation.navigate('Match') }}></Button>
>>>>>>> d8b58ccab6243338c82566fbdb1bf9da86da1b97
      </View>
    );
  }
}
const styles = StyleSheet.create({});