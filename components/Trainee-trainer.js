//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

//The beginning of the class
export default class TraineeTrainer extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            opacity: 0
        }
    }

     //To change the opacity of the chosen choice
    changeOpacity1 = () => {
        this.setState({ opacity: 1 })
    }

    changeOpacity2 = () => {
        this.setState({ opacity: 2 })
    }


    render() {
        return (
            <View style={styles.container}>

                {/** trainee view*/}
                <View>
                    <TouchableOpacity onPress={this.changeOpacity1}>
                        <Image
                            style={[styles.image,
                            {
                                opacity: this.state.opacity === 1 ? 1 : 0.4
                            }]}
                            source={require("../assets/images/trainee1.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.middlelView} />

                {/**trainer view */}
                <View >
                    <TouchableOpacity onPress={this.changeOpacity2}>
                        <Image
                            style={[styles.image,
                            {
                                opacity: this.state.opacity === 2 ? 1 : 0.4
                            }]}
                            source={require("../assets/images/trainer1.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        flex: 1.25,
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        bottom: "10%"
    },
    middlelView: {
        flex: 0.25,
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: "center",
    },
    image: {
        width: 110,
        height: 120,
        alignSelf: "center",
        borderRadius: 30,
    }
});


