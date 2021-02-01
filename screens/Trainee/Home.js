import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { color } from 'react-native-reanimated';
import FindTrainer from "../../components/FindTrainer"
import TrainersList from "../../components/TrainersList"

export default class Home extends React.Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>

        <FindTrainer nav={() => this.props.navigation.navigate('Match')} />
        <Text style={styles.label}>Top trainers</Text>
        <TrainersList />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#F25F5F"
  }
});


