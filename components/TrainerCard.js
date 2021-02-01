import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

import StarBar from './StarBar';
import Header from './TrainerHeader';
import Interest from "./Interests";

const SCREEN_WIDTH = Dimensions.get("window").width

export default class Progress extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../assets/images/org4.jpg')}
                    style={styles.backgroundContainer}>
                    <Header />
                    <View style={styles.ImageContainer} >
                        <Image
                            style={styles.Image}
                            source={require('../assets/images/profile.png')}
                        />
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/images/chat.png')}
                                style={{ height: 70, width: 70, marginLeft: 250 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text1}>{this.props.name}</Text>
                        <StarBar />
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text2}>{this.props.field}</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text3}>About me</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text2}>{this.props.bio}</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Text style={styles.text3}>Interests</Text>
                    </View>

                    <View style={styles.text1Container}>
                        <Interest interest="Art"></Interest>
                        <Interest interest="Piano"></Interest>
                        <Interest interest="Hip hop dancing"></Interest>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        width: '100%',
        height: SCREEN_WIDTH,
        alignContent: 'center',
        alignItems: 'center',
    },

    ImageContainer: {
        height: 200,
        width: 300,
        marginTop: 28,
        justifyContent: 'space-evenly',
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    text1Container: {
        marginLeft: 5,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text1: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 18,
        padding: 9,
        color: '#ffffff',
    },
    text3: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    scrollViewContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#e4717a",
        marginHorizontal: 15,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 120,
        justifyContent: 'space-around'

    },
    scrollText: {
        color: '#ffffff',
        fontSize: 18,

    }
});