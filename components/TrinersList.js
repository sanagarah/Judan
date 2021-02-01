import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';


export default class TrinersList extends Component {

    render() {
        return (
            <View style={{
                flex: 4,
                backgroundColor: 'pink',
                width: '100%',
                flexDirection: 'column'
            }}>

                <View style={{
                    flex: 0.5,
                    backgroundColor: '#fff',
                    width: '100%',
                    flexDirection: 'column'
                }}>
                    <Text style={{ fontSize: 20, color: '#407cbf', alignSelf: 'flex-start', fontWeight: 'bold', left: '5%', }}> Top Trainers  </Text>

                </View>

                <View style={{
                    flex: 3,
                    backgroundColor: '#fff',
                    width: '100%',
                    flexDirection: 'column'
                }}>

                    <ScrollView>
                        {/**---------------------------FIREST-----------------------------*/}

                        <TouchableOpacity style={styles.messageView}>

                            <Image
                                style={styles.imageStyle1}
                                source={require('../assets/images/girlpic.png')} />



                            <Text style={styles.textinsideview}>
                                Sara
              </Text>

                            <Text style={styles.Seconddtextinsideview}>
                                Drowing trainer
              </Text>
                        </TouchableOpacity>

                        {/**---------------------------Second-----------------------------*/}

                        <TouchableOpacity style={styles.messageView2}>

                            <Image
                                style={styles.imageStyle1}
                                source={require('../assets/images/boy.png')} />



                            <Text style={styles.textinsideview}>
                                Lan
             </Text>

                            <Text style={styles.Seconddtextinsideview}>
                                Baking trainer
               </Text>
                        </TouchableOpacity>
                        {/**---------------------------Third-----------------------------*/}

                        <TouchableOpacity style={styles.messageView3}>

                            <Image
                                style={styles.imageStyle1}
                                source={require('../assets/images/girlpic.png')} />



                            <Text style={styles.textinsideview}>
                                Mona
              </Text>

                            <Text style={styles.Seconddtextinsideview}>
                                Piano trainer
              </Text>
                        </TouchableOpacity>




                    </ScrollView>



                </View>

            </View>






        );
    }
}


const styles = StyleSheet.create({

    imageStyle: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,

    },
    BlockButton: {
        flex: 0.75,
        margin: '3%',
        width: "8%",
        height: 30,
        backgroundColor: '#b3e5d1',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        position: 'absolute'

    },

    messageView: {
        backgroundColor: '#ffecb3', width: '90%', height: 90, justifyContent: 'center', alignContent: 'center', alignSelf: 'center',
        padding: 10, paddingVertical: 23, borderRadius: 20, marginBottom: '3%',

    },

    messageView2: {
        backgroundColor: '#b3e5d1', width: '90%', height: 90, justifyContent: 'center', alignContent: 'center', alignSelf: 'center',
        padding: 10, paddingVertical: 23, borderRadius: 20, marginBottom: '3%',

    },

    messageView3: {
        backgroundColor: '#e5b3bf', width: '90%', height: 90, justifyContent: 'center', alignContent: 'center', alignSelf: 'center',
        padding: 10, paddingVertical: 23, borderRadius: 20, marginBottom: '3%',

    },

    textinsideview: {
        color: '#407cbf', fontSize: 15, left: '20%', fontWeight: 'bold'
    },

    Seconddtextinsideview: {
        color: '#407cbf', fontSize: 15, left: '20%', top: '15%'
    },

    imageStyle1: {
        width: 50, height: 60, left: '4%', position: 'absolute', borderRadius: 400 / 2
    },

    setImage: {
        width: 30, height: 30, left: '20%', position: 'absolute', top: '20%'
    },

});

