//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { View } from "react-native";
import TrainerCard from "../../components/TrainerCard";
import Header from "../../components/CardHeader";

//The beginning of the class
export default class Card extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      id: 0,
      name: "",
      field: "",
      picture: "",
      rate: 0,
      bio: "",
      postNum: 0,
      traineeNum: 0
    }
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state
    let id = await params.id
    let name = await params.name
    let field = await params.field
    let picture = await params.picture
    let bio = await params.bio
    let postNum = await params.postNum
    let traineeNum = await params.traineeNum
    this.setState({ id: id });
    this.setState({ name: name });
    this.setState({ field: field });
    this.setState({ picture: picture });
    this.setState({ bio: bio });
    this.setState({ postNum: postNum });
    this.setState({ traineeNum: traineeNum });
  }

  render() {
    return (
      <View>
        <Header
          proNav={() => this.props.navigation.navigate("Profile", {
            id: this.state.id,
            name: this.state.name,
            field: this.state.field,
            picture: this.state.picture,
            bio: this.state.bio,
            traineeNum: this.state.traineeNum,
            postNum: this.state.postNum
          })}
          tNav={() => this.props.navigation.navigate("Request", {
            id: this.state.id,
          })}
          perNav={() => this.props.navigation.navigate("Request", {
            id: this.state.id,
          })}>

        </Header>
        <TrainerCard
          nav={() => this.props.navigation.navigate("Chating", {
            id: this.state.id,
            name: this.state.name,
          })}
          name={this.state.name}
          field={this.state.field}
          uri={this.state.picture}
          rateForUser={this.state.id}
          bio={this.state.bio}
          interestsForUser={this.state.id}>
        </TrainerCard>
      </View>
    );
  }
}