import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ChaBox extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.nav}
                style={styles.chatbox}>
                <View style={{flexDirection: "column"}}>
                <Text style={styles.text1}>{this.props.name}</Text>
                <Text style={styles.text2}>{this.props.lastMassage}</Text>
                </View>
                <Text style={styles.text3}>{this.props.time}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    chatbox: {
        backgroundColor: '#E7E8EF',
        width: '95%',
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        padding: '3%',
        borderRadius: 10,
        marginVertical: '2%'
    },
    text1: {
        color: '#70C1B3',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10
    },
    text2: {
        color: '#F25F5C',
        fontSize: 15,
    },
    text3: {
        color: '#247BA0',
        fontSize: 13,
        marginVertical: "5%",
        marginRight: "2%"
    }
});