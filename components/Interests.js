import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from "react-native";

export default class Interests extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={styles.name}>{this.props.interest}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#247ba015",
        alignSelf: 'baseline',
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "white",
        margin: 5
    },
    name: {
        color: "white",
        fontWeight: "bold"
    }

});
