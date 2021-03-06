//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Text, Image } from "react-native";
import StarBar from "./StarBar";

//The beginning of the class
export default class ProfileHeader extends Component {
    render() {
        return (
            <View style={styles.section1}>
                {/*Container for the first row in the header */}
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.label1}>{this.props.postsNum}</Text>
                        <Text style={[styles.label2, { color: this.props.color }]}>Posts</Text>
                    </View>
                    <Image source={{ uri: this.props.uri }} style={styles.profileImage}></Image>
                    <View style={styles.header}>
                        <Text style={styles.label1}>{this.props.traineesNum}</Text>
                        <Text style={[styles.label2, { color: this.props.color }]}>Trainees</Text>
                    </View>
                </View>
                {/*The second row in the header starts here */}
                <Text style={styles.label1}>{this.props.name}</Text>
                {/*The third row in the header starts here */}
                <Text style={[styles.label2, { color: this.props.color }]}>{this.props.field} trainer</Text>
                {/*The fourth row in the header starts here */}
                <Text style={styles.label3}>{this.props.bio} </Text>
                {/*The fifth row in the header starts here */}
                <StarBar rate={this.props.rate} />
            </View>
        )
    }
}
//Declare the style
const styles = StyleSheet.create({
    section1: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0",
        paddingVertical: 10,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        height: 90,
        width: 90,
        borderWidth: 1,
        borderColor: "#D4D1D1",
        borderRadius: 90,
        marginRight: 50,
        marginLeft: 70
    },
    label1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#808080",
        textAlign: "center"
    },
    label2: {
        fontSize: 14,
        fontWeight: "bold",
    },
    label3: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "700",
        color: "#808080",
    },
});
