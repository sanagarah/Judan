import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default class Reviews extends React.Component {
    render() {
        return (
            <View style={styles.review}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    review: {
        backgroundColor: "white",
        width: "90%",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        padding: 3
    }
});
