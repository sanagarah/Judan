import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Button title="Match me" onPress={() => { this.props.navigation.navigate('Match') }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({});