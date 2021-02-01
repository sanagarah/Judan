import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.butoonStyle} onPress={this.props.nav}>
                <Text style={styles.textStyle} > {this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 15,
        color: "#F25F5C"
    },

    butoonStyle: {

    }
});