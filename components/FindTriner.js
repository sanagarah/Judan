import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';




export default class FindTriner extends Component {
    state = {
        firstQuery: '',
    };
    render() {
        const { firstQuery } = this.state;
        return (
            <View style={styles.FindTrainerContainer}>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/findTriner.png')} />
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

    FindTrainerContainer: {
        height: 370,
        width: '100%',
        flexDirection: 'column'
    },

    imageStyle: {
        width: '100%',
        position: 'absolute',

    },
    searchbarView: {
        backgroundColor: '#fff',
        width: '85%',
        alignSelf: 'center',
        marginLeft: '7%',
        top: '40%',
    },
    imageboxStyle: {
        width: '80%',
        height: 120,
        alignSelf: 'flex-start',
        borderRadius: 30,
        position: 'absolute',
        top: '60%',
        alignSelf: 'center',
    },
    setImage: {
        width: 20, height: 20, left: '80%', position: 'absolute', top: '17%'
    },

    MatchMeView: {
        width: "30%",
        backgroundColor: '#407cbf',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: '20%',
        top: '80%'
    },


});