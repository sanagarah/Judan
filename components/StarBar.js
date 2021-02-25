//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import StarRating from "react-native-star-rating";

//The beginning of the class
export default class StartBar extends Component {

    constructor(props) {
        super(props);
        //Declare the initial values for states
        this.state = {
            starCount: props.rate
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={"#FFD700"}
                starSize={30}
                emptyStarColor="#FFE066"
            />
        );
    }
}