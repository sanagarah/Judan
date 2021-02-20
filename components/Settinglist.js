import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class Settinglist extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.settingBlockContainer} onPress={this.props.nav}>
                <View style={styles.BlockButtonimageeSeting}>
                    <Image
                        style={styles.settingImage}
                        source={this.props.icon} />
                </View>
                <View style={styles.textsettingView}>
                    <Text style={styles.settinglistText}> {this.props.name}</Text>
                </View>
                    <Image
                        style={styles.settingImage}
                        source={this.props.right} />
                </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    settingBlockContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 30,
    },
    settingImage: {
        width: 30,
        height: 30,
    },
    textsettingView: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        marginBottom: 15
    },
    settinglistText: {
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold'
    },
});