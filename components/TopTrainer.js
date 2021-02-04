import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width

export default class TopTrainers extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.messageView} onPress={this.props.nav}>
                <Image
                    style={styles.imageStyle1}
                    source={this.props.image} />
                <View style={styles.container}>
                    <Text style={styles.textinsideview}>
                        {this.props.name}
                    </Text>
                    <Text style={styles.Seconddtextinsideview}>
                        {this.props.field}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    messageView: {
        backgroundColor: "#FADBD8",
        width: SCREEN_WIDTH - 30,
        height: 90,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 20,
        marginBottom: '3%',
    },
    container: {
        flexDirection: "column",
        marginLeft: 20
    },
    textinsideview: {
        color: '#F25F5C',
        fontSize: 15,
        fontWeight: 'bold'
    },
    Seconddtextinsideview: {
        color: '#8A7582',
        fontSize: 15
    },
    imageStyle1: {
        width: 50,
        height: 60,
        borderRadius: 90
    },
});
