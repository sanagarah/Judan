import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

export default class HomeHeader extends Component {
    state = {
        firstQuery: '',
    };
    render() {
        const { firstQuery } = this.state;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/findTrainer.png')} />


                <View style={{ flexDirection: 'row' }}>


                    <View style={styles.searchbarView}>

                        <Searchbar
                            placeholder=" "
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                            value={firstQuery} />

                    </View>

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT / 2,
    },
    imageStyle: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2,
        position: "absolute",
    },
    searchbarView: {
        backgroundColor: '#fff',
        width: SCREEN_WIDTH / 1.3,
        alignSelf: 'center',
        marginHorizontal: SCREEN_WIDTH / 10,
        top: SCREEN_HEIGHT / 4,
    },
    MatchMeView: {
        width: 150,
        height: 30,
        backgroundColor: '#247BA0',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: SCREEN_WIDTH / 5,
        top: SCREEN_HEIGHT / 2.18,
    },
});