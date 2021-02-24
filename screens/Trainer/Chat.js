import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ChatDpnd from '../../components/ChatDpnd';
import Header from "../../components/ChatHeader";

export default class Chat extends Component {
  state = { text: "" }
  render() {
    return (
      <SafeAreaView style={styles.container1}>

        {/*view for header box*/}
        <View style={styles.container2}>
          <Header name="Sara" subname="Rigesterd" nav={() => this.props.navigation.navigate('Chat')}>
          </Header>
        </View>

        {/*view for masseage box*/}
        <View style={styles.container3}>
          <ChatDpnd />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    height: 100,
    backgroundColor: '#79D2AE',
    width: '100%',
    flexDirection: 'column',
  },
  container3: {
    flex: 5,
    backgroundColor: '#E7E8EF',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

