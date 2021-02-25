import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class Date extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            name: "Choose a date"
        }
    }

    onShow = () => {
            this.setState({ show: true });
    }

    onHide = () => {
            this.setState({ show: false});
    }

    setDate = (date) => {
        var stringDate = date.toLocaleString().substring(0, 10);
        this.setState({ name: stringDate})
     };
    
    
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={this.onShow}>
                    <Image
                        source={require('../assets/images/calender.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{this.state.name}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    mode='date'
                    isVisible={this.state.show}
                    onConfirm={this.setDate}
                    onCancel={this.onHide}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    text: {
        fontSize: 16,
        color: "#c7c7c7"
    }
})