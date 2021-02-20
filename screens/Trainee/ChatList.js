import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import ChatBox from "../../components/ChatBox"

export default class ChatList extends React.Component {
  state = { text: "" }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*View for ppl's msg*/}
        <ScrollView>
          <ChatBox
            nav={() => this.props.navigation.navigate('Chating')}
            name="Sana"
            lastMassage="hi"
            time="15 m">
          </ChatBox>
          <ChatBox
            nav={() => this.props.navigation.navigate('Chating')}
            name="Salwa"
            lastMassage="hi, whats up"
            time="15 m">
          </ChatBox>
          <ChatBox
            nav={() => this.props.navigation.navigate('Chating')}
            name="Aseel"
            lastMassage="hi, whats up"
            time="15 m">
          </ChatBox>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
