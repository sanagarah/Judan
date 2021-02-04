import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import FindTrainer from "../../components/FindTrainer"
import TopTrainer from "../../components/TopTrainerList"

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <FindTrainer nav={() => this.props.navigation.navigate('Match')} />
        <Text style={styles.label}>Top trainers</Text>
        <TopTrainer
          image1={require('../../assets/images/girlpic.png')}
          name1="Sana"
          field1="drawing trainer"

          image2={require('../../assets/images/girlpic.png')}
          name2="Sana"
          field2="drawing trainer"

          image3={require('../../assets/images/girlpic.png')}
          name3="Sana"
          field3="drawing trainer"

          nav={() => this.props.navigation.navigate('Card')}
        ></TopTrainer>

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


