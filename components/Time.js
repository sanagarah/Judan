import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class Date extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            name: "Choose a time"
        }
    }

    onShow = () => {
        this.setState({ show: true });
    }

    onHide = () => {
        this.setState({ show: false });
    }

    setTime = (time) => {
        var stringTime = time.toLocaleString().substring(10, 16);
        this.setState({ name: stringTime })
    };

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={this.onShow}>
                    <Image
                        source={require('../assets/images/time.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{this.state.name}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    mode='time'
                    isVisible={this.state.show}
                    onConfirm={this.setTime}
                    onCancel={this.onHide}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center"
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
    text: {
        fontSize: 16,
        color: "#c7c7c7"
    }
})