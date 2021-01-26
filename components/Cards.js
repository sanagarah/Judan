import React from "react";
import { View, StyleSheet, Animated, PanResponder, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width
//To tite the swipe distance to the actual width of the screen
const SWIP_THRESHOLD = 0.25 * SCREEN_WIDTH;

export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        //Instance of the animation 
        const position = new Animated.ValueXY();
        //Initiating the PanResponder
        const panResponder = PanResponder.create({
            //Drives the control to here whenever the user touches the screen
            onStartShouldSetPanResponder: () => true,
            //Shows what element is begin pressed in which way
            onPanResponderMove: (event, gesture) => {
                //Updating the position of animation to the position brought from gesture
                position.setValue({ x: gesture.dx, y: gesture.dy })

            },
            onPanResponderRelease: (event, gesture) => {
                //Condition to indicate when the card is swiped too much in the right or left to force changing its position
                if (gesture.dx > SWIP_THRESHOLD) {
                    this.forceSwipe("right");

                } else if (gesture.dx < -SWIP_THRESHOLD) {
                    this.forceSwipe("left");
                }
                else {
                    this.onRelease();
                }
            }

        });
        //Setting both animation and PanResponder to state to call them later
        this.state = { panResponder, position };
    }

    forceSwipe(direction) {
        const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x: x, y: 0 },
            //The period of time
            duration: 250,
            useNativeDriver: false
            //This function will be excuted after the animation finishs, taking the direction as a parameter.
        }).start(() => this.onSwipeComplete(direction))
    }

    onSwipeComplete(direction) {
        const { onSwipeRight, onSwipeLeft } = this.props;
        direction === "right" ? onSwipeRight() : onSwipeLeft();

    }

    //Reset back to the position
    onRelease() {
        Animated.spring(
            this.state.position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    }

    //Funcation that returns the animation layout for Animated.View style and sets the rotation of it
    cardStyle() {
        //Interpolation is used to linearly change the rotation of the card as xd changes
        const rotate = this.state.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', "120deg"]
        })
        return {
            ...this.state.position.getLayout(),
            transform: [{ rotate: rotate }]
        };
    }

    renderCards() {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View key={item.id}
                        {...this.state.panResponder.panHandlers}
                        style={this.cardStyle()}
                    >
                        {/*Puts each individual card as a parameter in renderCard*/}
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }
            return this.props.renderCard(item);
        });
    }
    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}




