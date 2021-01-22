import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default class Posts extends React.Component {
    render() {
        return (
            <View>
                <Image source={this.props.imgPath} style={styles.media}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    media: {
        height: 150,
        width: 100,
        borderWidth: 1,
        borderRadius: 30,
        marginRight: 5
    },
});