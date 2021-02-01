import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get("window").height

export default class FindTriner extends Component {
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
                <Image
                    style={styles.imageboxStyle}
                    source={require('../assets/images/matchme.png')} />

                <TouchableOpacity style={styles.MatchMeView} onPress={this.props.nav}>

                    <Text style={{ fontSize: 15, color: '#fff', alignSelf: 'center' }}> Match me  </Text>

                    <Image
                        style={styles.setImage}
                        source={require('../assets/images/right.png')} />
                </TouchableOpacity>

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
        height: SCREEN_HEIGHT / 1.8,
    },
    imageStyle: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 1.8,
        position: "absolute"
    },
    searchbarView: {
        backgroundColor: '#fff',
        width: SCREEN_WIDTH / 1.3,
        alignSelf: 'center',
        marginHorizontal: SCREEN_WIDTH / 10,
        top: SCREEN_HEIGHT / 4,
    },
    imageboxStyle: {
        width: SCREEN_WIDTH / 1.2,
        height: SCREEN_HEIGHT / 5,
        borderRadius: 30,
        position: 'absolute',
        top: SCREEN_HEIGHT / 3,
        alignSelf: 'center',
    },
    setImage: {
        width: 20,
        height: 20,
        left: '80%',
        position: 'absolute',
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