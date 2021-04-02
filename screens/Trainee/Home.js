//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FindTrainer from "../../components/FindTrainer";
import TopTrainer from "../../components/TopTrainer";
import axios from "axios";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import Api link
import Api from "../../Api";

let api = Api.link;

//The beginning of the class
export default class Home extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      data: []
    }
  }

  //To have the top six trainers
  componentDidMount = async () => {
    await axios.get(api + "/rate").then(resp => {
      let response = resp.data;
      let topSix = response.slice(0, 6);
      this.setState({ data: topSix })
    })
  }

  lapsList() {
    return this.state.data.map((data) => {
      return (
        <TopTrainer
          nav={() => this.props.navigation.navigate("Card", {
            id: data.id,
            name: data.name,
            field: data.field,
            picture: data.picture,
            bio: data.bio,
            postNum: data.postNum,
            traineeNum: data.traineeNum
          })}
          key={data.id}
          picture={data.picture}
          name={data.name}
          field={data.field}
          rateForUser={data.id}>
        </TopTrainer>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FindTrainer
          nav1={() => this.props.navigation.navigate("Match")}
          nav2={() => this.props.navigation.navigate("Search")} />
        <Text style={styles.label}>{AorE.A == true ? LangAr.Top : LangEn.Top}</Text>
        <ScrollView style={{ flex: 1 }}>
          {this.lapsList()}
        </ScrollView>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  label: {
    marginTop: 5,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#F25F5F"
  }
});


