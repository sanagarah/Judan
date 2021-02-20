import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Chat extends Component {
    state = { text: "" }
    render() {
        return (
            <View style={styles.container1}>
                <TouchableOpacity style={styles.LeftButtonchat} onPress={this.props.nav}>
                    <Image
                        style={styles.LeftImagechat}
                        source={require('../assets/images/left.png')} />
                </TouchableOpacity>
                <View style={styles.container2}>
                    <Text style={styles.ChatLabelName}>{this.props.name}</Text>
                    <Text style={styles.text}>{this.props.subname}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container1: {
        flexDirection: "row",
    },
    container2: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "20%"
    },
    LeftButtonchat: {
        margin: '4%',
        width: 70,
        height: 50,
        backgroundColor: '#b3e5d1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 15,
    },
    LeftImagechat: {
        width: 30,
        height: 30,
    },
    ChatLabelName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});