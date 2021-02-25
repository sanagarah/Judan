import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class PaymentPlan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            border: 0
        }
    }
    changeColor1 = () => {
        this.setState({ border: 1 })
    }

    changeColor2 = () => {
        this.setState({ border: 2 })
    }

    changeColor3 = () => {
            this.setState({ border: 3 })
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.changeColor1}>
                    <View style={[styles.firstView,
                    {
                        borderColor: this.state.border === 1 ? "#F25F5C" : "gray",
                        borderStyle: this.state.border === 1 ? "solid" : "dotted"
                    }]}>
                    <View style={styles.secondView}>
                        <Text style={styles.title}>Hourly Payment</Text>
                        <Text style={styles.descrition}>Pay for each hour</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>5$</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.changeColor2}>
                    <View style={[styles.firstView,
                    {
                        borderColor: this.state.border === 2 ? "#F25F5C" : "gray",
                        borderStyle: this.state.border === 2 ? "solid" : "dotted"
                    }]}>
                    <View style={styles.secondView}>
                        <Text style={styles.title}>Monthly Payment</Text>
                        <Text style={styles.descrition}>5 hours/mo</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>15$</Text>
                    </View>
                </View>
            </TouchableOpacity>
                <TouchableOpacity onPress={this.changeColor3}>
                    <View style={[styles.firstView,
                    {
                        borderColor: this.state.border === 3 ? "#F25F5C" : "gray",
                        borderStyle: this.state.border === 3 ? "solid" : "dotted"
                    }]}>
                    <View style={styles.secondView}>
                        <Text style={styles.title}>Yearly Payment</Text>
                        <Text style={styles.descrition}>10 hours/mo</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>25$</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
}
var styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstView: {
        marginVertical: 10,
        width: "80%",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 10
    },
    secondView: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 25,
        color: '#247ba0',
        fontWeight: 'bold'
    },
    descrition: {
        fontSize: 17,
        color: '#f25f5c',
    },
    price: {
        color: '#70c1b3',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 10
    }
});
