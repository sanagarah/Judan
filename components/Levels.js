import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Levels extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.circle1} ></View>
                    <Text style={styles.text}>Beginner</Text>
                </View>
                <View style={[styles.line, { backgroundColor: this.props.pColor1 }]} ></View>
                <View style={[styles.circle2, { backgroundColor: this.props.cColor1 }]}></View>
                <View style={[styles.line, { backgroundColor: this.props.pColor2 }]}></View>
                <View style={[styles.circle3, { backgroundColor: this.props.cColor2 }]}></View>
                <View style={[styles.line, { backgroundColor: this.props.pColor3 }]}></View>
                <View>
                    <View style={[styles.circle4, { backgroundColor: this.props.cColor3 }]}>
                        <View style={styles.circle5}>
                            <View style={[styles.circle6, { backgroundColor: this.props.cColor3 }]}></View>
                        </View>
                    </View>
                    <Text style={styles.text}>Expert</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    line: {
        height: 10,
        width: 60,
    },
    circle1: {
        height: 50,
        width: 50,
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 90,
        backgroundColor: "#F25F5C"
    },
    circle2: {
        height: 40,
        width: 40,
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 90,
    },
    circle3: {
        height: 40,
        width: 40,
        borderWidth: 0.5,
        borderColor: "gray",
        borderRadius: 90,
    },
    circle4: {
        height: 50,
        width: 50,
        backgroundColor: "#70C1B3",
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center"
    },
    circle5: {
        height: 40,
        width: 40,
        backgroundColor: "#eeeeee",
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center"
    },
    circle6: {
        height: 30,
        width: 30,
        backgroundColor: "#70C1B3",
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        color: "gray"
    }
});
