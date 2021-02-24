import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";

export default class Interests extends Component {
    render() {
        return (
            <View style={styles.background}>
                <Text style={[styles.name], { color: this.props.textColor }}>{this.props.interest}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#F9F9F9",
        alignSelf: 'baseline',
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "white",
        margin: 5
    },
    name: {
        fontWeight: "bold",
        color: "#247ba0",
    }
});
