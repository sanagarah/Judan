import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class SocialNetwork extends Component {
    render() {
        return (
            <View style={styles.containerView}>
                {/** text  */}
                <View style={styles.viewBehindTheText}>

                    <View style={styles.textViewStyle}>
                        <Text style={{ fontSize: 17, color: 'gray', }}> Enter via social networks  </Text>
                    </View>
                </View>

                {/** pic  */}

                <View style={styles.viewBehindThePic}>

                    <TouchableOpacity style={styles.GoogleView}>
                        <Image
                            style={styles.setImage}
                            source={require('../assets/images/google.png')} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.FacebookView}>
                        <Image
                            style={styles.setImage}
                            source={require('../assets/images/facebook.png')} />
                    </TouchableOpacity>


                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    containerView: {
        flex: 2,
        width: '100%',
        flexDirection: 'column'
    },
    viewBehindTheText: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'column'
    },
    viewBehindThePic: {
        flex: 4,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row'
    },

    imageStyle: {
        width: '100%',
        alignSelf: 'center',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,

    },
    BlockButton: {
        flex: 0.75,
        margin: '3%',
        width: "8%",
        backgroundColor: '#b3e5d1',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute'

    },

    setImage: {
        width: 40, height: 40, left: '40%', position: 'absolute', top: '10%'
    },

    textViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        top: '3%'
    },

    GoogleView: {
        flex: 0.75,
        margin: '3%',
        width: "40%",
        height: 35,
        backgroundColor: '#FFE066',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: '2%',
        top: '10%'


    },

    FacebookView: {
        flex: 0.75,
        margin: '3%',
        width: "40%",
        height: 35,
        backgroundColor: '#4267B2',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute',
        left: '50%',
        top: '10%'



    },

});


