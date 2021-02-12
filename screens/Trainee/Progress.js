import React from "react";
import { StyleSheet, View, ImageBackground, Dimensions, Text, ScrollView } from "react-native";
import Levels from "../../components/Levels"
import Subject from "../../components/Subject"
import Certificate from "../../components/Certificate"

const SCREEN_HEIGHT = Dimensions.get("window").height;
let levelNum = 2;

export default class Progress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      progressColor1: "white",
      progressColor2: "white",
      progressColor3: "white",
      circleColor1: "gray",
      circleColor2: "gray",
      circleColor3: "gray",
    }
  }
  componentDidMount() {
    if (levelNum == 1)
      this.setState({ progressColor1: "#FFE066", circleColor1: "#FFE066" });
    if (levelNum == 2)
      this.setState({ progressColor1: "#FFE066", progressColor2: "#FFE066", circleColor1: "#FFE066", circleColor2: "#247BA0" });
    if (levelNum == 3)
      this.setState({ progressColor1: "#FFE066", progressColor2: "#FFE066", progressColor3: "#FFE066", circleColor1: "#FFE066", circleColor2: "#247BA0", circleColor3: "#70C1B3" });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/header1.png')} style={styles.header}>
          <View>
            <Text style={styles.text}>Certification</Text>
            <ScrollView horizontal={true} >
              <Certificate img={require('../../assets/images/certificate.png')}></Certificate>
              <Certificate img={require('../../assets/images/certificate.png')}></Certificate>
              <Certificate img={require('../../assets/images/certificate.png')}></Certificate>
            </ScrollView>
          </View>
        </ImageBackground>
        <View>
          <Subject></Subject>
        </View>
        <View >
          {this.setValue}
        </View>
        <Levels cColor1={this.state.circleColor1} cColor2={this.state.circleColor2} cColor3={this.state.circleColor3}
          pColor1={this.state.progressColor1} pColor2={this.state.progressColor2} pColor3={this.state.progressColor3}></Levels>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: "#eeeeee"
  },
  header: {
    height: SCREEN_HEIGHT / 2,
    justifyContent: "space-around",
  },
  text: {
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 15,
    marginTop: 70
  }
});
