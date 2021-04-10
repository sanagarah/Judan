//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
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
    this.renderCard = this.renderCard.bind(this);
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
          <TouchableOpacity style={[styles.button, { backgroundColor: "#F25F5C" }]} onPress={() => this.props.navigation.navigate("Profile", {
            id: item.id,
            name: item.name,
            field: item.field,
            picture: item.picture,
            bio: item.bio,
            postNum: item.postNum,
            traineeNum: item.traineeNum
          })}>
            <MaterialIcons name="person" size={20}></MaterialIcons>
            <Text style={styles.center}>{AorE.A == true ? LangAr.Profile : LangEn.Profile}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: "#70C1B3" }]} onPress={() => this.props.navigation.navigate("Request", {
            id: item.id,
            type: "Training"
          })}>
            <MaterialIcons name="school" size={20}></MaterialIcons>
            <Text>{AorE.A == true ? LangAr.Training : LangEn.Training}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: "#247BA0" }]} onPress={() => this.props.navigation.navigate("Request", {
            id: item.id,
            type: "Performing"
          })}>
            <MaterialIcons name="mic" size={20}></MaterialIcons>
            <Text>{AorE.A == true ? LangAr.Performing : LangEn.Performing}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: "#FFE066" }]} onPress={() => this.props.navigation.navigate("Chating", {
            id: item.id,
            name: item.name,
          })}>
            <MaterialIcons name="chat" size={20}></MaterialIcons>
            <Text style={styles.center}>{AorE.A == true ? LangAr.Chat : LangEn.Chat}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Card.FeaturedTitle style={styles.name}>{item.name}</Card.FeaturedTitle>
          <Card.FeaturedTitle style={styles.rate}>{item.rate}</Card.FeaturedTitle>
        </View>
        <Card.FeaturedSubtitle style={styles.city}>{item.city}</Card.FeaturedSubtitle>
        <Card.FeaturedSubtitle style={styles.field}>{item.field}</Card.FeaturedSubtitle>
        <Card.Divider />
        <Text>{item.bio}</Text>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
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
  name: {
    marginTop: 5,
    color: "#247BA0"
  },
  field: {
    color: "#808080"
  },
  city: {
    color: "#F25F5C"
  },
  rate: {
    color: "#D2B204",
    marginTop: 5,
    marginLeft: 10
  },
  button: {
    height: 55,
    width: 80,
    backgroundColor: "#F25F5C",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  chatImage: {
    height: 70,
    width: 70,
    marginLeft: 250
  }
});