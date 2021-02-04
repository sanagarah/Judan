import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import FindTrainer from "../../components/FindTrainer"
import TopTrainer from "../../components/TopTrainer"

export default class Home extends React.Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>

        <FindTrainer nav={() => this.props.navigation.navigate('Match')} />
        <Text style={styles.label}>Top trainers</Text>
        <ScrollView>
          <TopTrainer
            image={require('../../assets/images/girlpic.png')}
            name="Sana"
            field="drawing trainer"
            nav={() => this.props.navigation.navigate('Card')}
          ></TopTrainer>

          <TopTrainer
            image={require('../../assets/images/girlpic.png')}
            name="Sara"
            field="coocking trainer"
            nav={() => this.props.navigation.navigate('Card')}
          ></TopTrainer>

          <TopTrainer
            image={require('../../assets/images/girlpic.png')}
            name="Hind"
            field="dancing trainer"
            nav={() => this.props.navigation.navigate('Card')}
          ></TopTrainer>
        </ScrollView>

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


