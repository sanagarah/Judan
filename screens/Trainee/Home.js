import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FindTriner from "../../components/FindTriner"
import TrinersList from "../../components/TrinersList"

export default class Home extends React.Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>

        <FindTriner nav={() => this.props.navigation.navigate('Match')} />
        <TrinersList />




      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


