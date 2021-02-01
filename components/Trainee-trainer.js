import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class TraineeTrainer extends Component {

    render() {
        return (


            <View style={styles.contntView}>

                <View style={styles.leftRightView} />
                {/** trainee  */}
                <View style={styles.contntView}>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/trainee1.png')} />
                    </TouchableOpacity>
                </View>
                {/**end of view  */}

                <View style={styles.middlelView} />

                {/**trainer view */}
                <View style={styles.contntView}>
                    <TouchableOpacity >
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/images/trainer1.png')} />
                    </TouchableOpacity>
                </View>
                {/**end trainer view  */}


                <View style={styles.leftRightView}>
                </View>




            </View>
        );
    }
}


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 20,
        color: 'gray',
        alignSelf: 'center'

    },

    contntView: {
        flex: 1.25,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',

        bottom: '10%'




    },
    leftRightView: {
        flex: 0.75,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',


    },
    middlelView: {
        flex: 0.25,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',

    },

    imageStyle: {
        width: 110,
        height: 120,
        alignSelf: 'center',
        borderRadius: 30,

    }

});


