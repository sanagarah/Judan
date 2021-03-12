//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View } from "react-native";
import FindTrainer from "../../components/FindTrainer";
import TopTrainer from "../../components/TopTrainerList";

//The beginning of the class
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FindTrainer
          nav1={() => this.props.navigation.navigate("Match")}
          nav2={() => this.props.navigation.navigate("Search")}/>
        <Text style={styles.label}>Top trainers</Text>
        <TopTrainer
          image1={require("../../assets/images/girlpic.png")}
          name1="Rahaf"
          field1="drawing"
          rate1={3.5}

          image2={require("../../assets/images/girlpic.png")}
          name2="Salma"
          field2="cooking"
          rate2={5}

          image3={require("../../assets/images/girlpic.png")}
          name3="Rawan"
          field3="dancing"
          rate3={4}

          image4={require("../../assets/images/girlpic.png")}
          name4="Sana"
          field4="drawing"
          rate4={3.5}

          nav={() => this.props.navigation.navigate("Card")}></TopTrainer>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#F25F5F"
  }
});


