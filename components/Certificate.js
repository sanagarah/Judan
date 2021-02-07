import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Lightbox from 'react-native-lightbox-v2';

export default class Certificate extends React.Component {

    render() {
        return (
            <View>
                <Lightbox
                    backgroundColor="#EEEEE"
                    activeProps={
                        {
                            style: {
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height
                            },
                            resizeMode: 'contain'
                        }
                    }>
                    <Image resizeMode="cover" source={this.props.img} style={styles.certification}></Image>
                </Lightbox>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    certification: {
        width: 150,
        height: 120,
        marginLeft: 10
    },
});