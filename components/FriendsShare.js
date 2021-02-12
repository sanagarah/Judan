import React, { Component } from 'react';
import { Share, View, Button } from 'react-native';

class ShareExample extends Component {
    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Try Judan app for free!',
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

export default ShareExample;