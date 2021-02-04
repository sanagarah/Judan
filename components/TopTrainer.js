import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class TopTrainers extends Component {

    render() {
        return (
            <View style={styles.container1}>
                <Image
                    style={styles.imageStyle1}
                    source={this.props.image} />
                <View style={styles.container2}>
                    <Text style={styles.textinsideview}>
                        {this.props.name}
                    </Text>
                    <Text style={styles.Seconddtextinsideview}>
                        {this.props.field}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
        alignSelf: 'center',
    },
    container2: {
        flexDirection: "column",
        marginLeft: 20
    },
    textinsideview: {
        color: '#F25F5C',
        fontSize: 15,
        fontWeight: 'bold'
    },
    Seconddtextinsideview: {
        color: '#247BA0',
        fontSize: 15,
    },
    imageStyle1: {
        width: 50,
        height: 60,
        borderRadius: 90
    },
});