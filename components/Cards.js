import React from "react";
import {
    View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width
//To tite the swipe distance to the actual width of the screen
const SWIP_THRESHOLD = 0.25 * SCREEN_WIDTH;

export default class Cards extends React.Component {
    static defaultProps = {
        onSwipeRight: () => { },
        onSwipeLeft: () => { }
    }
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
                //Condition to indicate when the card is swiped too much to force changing its position
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
        this.state = { panResponder, position, index: 0 };
    }

    forceSwipe(direction) {
        const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x: x, y: 0 },
            duration: 250,
            useNativeDriver: false
            //This function will be excuted after the animation finishs, taking the direction as a parameter.
        }).start(() => this.onSwipeComplete(direction))
    }

    onSwipeComplete(direction) {
        const { onSwipeLeft, onSwipeRight, data } = this.props;
        const item = data[this.state.index];

        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        //Resetting the position to the origin
        this.state.position.setValue({ x: 0, y: 0 });
        //Incrementing the index by one to have the next card
        this.setState({ index: this.state.index + 1 });
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
        if (this.state.index >= this.props.data.length) {
            return this.props.renderNoMoreCards();
        }
        return this.props.data.map((item, i) => {
            //To ignore the previous cards that have been swiped
            if (i < this.state.index) { return null; };
            //To give the animation and panResponder to the current card
            if (i === this.state.index) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[this.cardStyle(), styles.cardStyle, { zIndex: 99 }]}
                        {...this.state.panResponder.panHandlers}
                    >{/*Puts each individual card as a parameter in renderCard*/}
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }
            //To make the other cards ans show them on screen
            return (
                <Animated.View
                    key={item.id}
                    style={[styles.cardStyle, { top: 10 * (i - this.state.index), zIndex: 5 }]}
                >
                    {this.props.renderCard(item)}
                </Animated.View>
            );
        }).reverse();
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }
}

const styles = {
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH
    }
};
