//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import Deck from "../../components/Cards";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import Api link
import Api from "../../Api";

let api = Api.link;

//The data to disply on cards
let Data = [];

//The beginning of the class
export default class Match extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      data: [],
      traineeCity: "",
      traineeInterest: ""
    }
  }

  componentDidMount = async () => {
    let userId = await AsyncStorage.getItem("userId");
    let city = ""
    let FirstData = []
    let FinalData = []

    //Get trainee city and interest by using the id
    await axios.get(api + "/IdTrainee/" + userId).then(resp => {
      let items = (resp.data);
      items.filter(function (item) {
        city = item.city;
        interest = item.interest;
      });
      this.setState({ traineeCity: city });
      this.setState({ traineeInterest: interest });
    })

    //Get trainers array who have the same city and interest
    await axios.get(api + "/Match/" + this.state.traineeCity + "/" + this.state.traineeInterest)
      .then(resp => {
        FirstData = resp.data
      })

    //Get trainers array who have only the same interest and add it to the end othe previose array
    await axios.get(api + "/Interest/" + this.state.traineeInterest + "/" + this.state.traineeCity)
      .then(resp => {
        FinalData = FirstData.concat(resp.data);
      })

    this.setState({ data: FinalData })
  }

  //Function to return card structure
  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Image style={styles.card} source={{ uri: item.picture }}></Card.Image>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.button1} >
            <MaterialIcons name="person" size={20}></MaterialIcons>
            <Text style={styles.center}>{AorE.A == true ? LangAr.Profile : LangEn.Profile}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <MaterialIcons name="school" size={20}></MaterialIcons>
            <Text>{AorE.A == true ? LangAr.Training : LangEn.Training}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <MaterialIcons name="mic" size={20}></MaterialIcons>
            <Text>{AorE.A == true ? LangAr.Performing : LangEn.Performing}</Text>
          </TouchableOpacity>
        </View>
        <Card.FeaturedTitle style={{ color: "#000000" }}>{item.name}</Card.FeaturedTitle>
        <Card.FeaturedSubtitle style={{ color: "#808080" }}>{item.field}</Card.FeaturedSubtitle>
        <Card.Divider />
        <Text>{item.bio}</Text>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There"s no more content here!
        </Text>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container1}>
        <Deck
          data={this.state.data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}>
        </Deck>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    marginTop: 20,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  card: {
    height: 250
  },
  center: {
    textAlign: "center"
  },
  button1: {
    height: 60,
    width: 80,
    backgroundColor: "#F25F5C",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button2: {
    height: 60,
    width: 80,
    backgroundColor: "#70C1B3",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button3: {
    height: 60,
    width: 80,
    backgroundColor: "#FFE066",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
});