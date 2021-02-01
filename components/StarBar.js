import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity
} from 'react-native';

const StarBar = () => {
    // To set the default Star Selected
    const [defaultRating, setDefaultRating] = useState(2);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star. You can also give the path from local
    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= defaultRating
                                        ? { uri: starImageFilled }
                                        : { uri: starImageCorner }
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

                {/*View to hold our Stars*/}
                <CustomRatingBar />
                <Text style={styles.textStyle}>
                    {/*To show the rating selected*/}
                    {defaultRating} / {Math.max.apply(null, maxRating)}
                </Text>

            </View>
        </SafeAreaView>
    );
};

export default StarBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#ffffff',
        marginTop: 7,

    },

    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 15,
        marginTop: 7
    },
    starImageStyle: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },
});