import React, { Component } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class TrainerHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.container} onPress={this.props.proNav}>
                    <MaterialIcons name="person" size={30}></MaterialIcons>
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} onPress={this.props.tNav}>
                    <MaterialIcons name="school" size={30}></MaterialIcons>
                    <Text style={styles.text}>Training</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} onPress={this.props.perNav}>
                    <MaterialIcons name="mic" size={30}></MaterialIcons>
                    <Text style={styles.text}>Performing</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: 75,
        width: "100%",
        backgroundColor: '#f25f5c',
        justifyContent: "space-around",
        flexDirection: 'row',
        padding: 10
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#ffffff',
    }
});