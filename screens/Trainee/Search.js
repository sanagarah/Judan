//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";
import SearchBox from "../../components/SearchBox";

//The beginning of the class
export default class Competition extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SearchBox  nav={() => this.props.navigation.navigate("Card")}/>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});