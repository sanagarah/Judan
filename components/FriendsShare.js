//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { Share, View, Button } from "react-native";

//The beginning of the class
export default class FriendsShare extends Component {
    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "Try Judan app for free!",
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <Button onPress={this.onShare} title="Share" />
            </View>
        );
    }
}
