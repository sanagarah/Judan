import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Deck from "../../components/Cards";

const DATA = [
  { id: 1, name: 'Layla', field: "football", bio: "I'm a passionate trainer who loves to play football", uri: 'https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_1200x.jpeg?v=1579365491' },
  { id: 2, name: 'Rahaf', field: "dance", bio: "I'm a passionate trainer who loves to dance", uri: 'https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg' },

];

export default class Match extends React.Component {

  renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Image source={{ uri: item.uri }}></Card.Image>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.button1}>
            <MaterialIcons name="person" size={20}></MaterialIcons>
            <Text>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <MaterialIcons name="school" size={20}></MaterialIcons>
            <Text>Training</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <MaterialIcons name="mic" size={20}></MaterialIcons>
            <Text>Performing</Text>
          </TouchableOpacity>

        </View>
        <Card.FeaturedTitle style={{ color: "black" }}>{item.name}</Card.FeaturedTitle>
        <Card.FeaturedSubtitle style={{ color: "gray" }}>{item.field}</Card.FeaturedSubtitle>
        <Card.Divider />
        <Text>{item.bio}</Text>
      </Card>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}>
        </Deck>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button1: {
    height: 50, width: 80,
    backgroundColor: "#F25F5C",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button2: {
    height: 50, width: 80,
    backgroundColor: "#70C1B3",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  button3: {
    height: 50, width: 80,
    backgroundColor: "#FFE066",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
});