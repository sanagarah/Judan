//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import StarRating from "react-native-star-rating";
import axios from "axios";
//import Api link
import Api from "../Api";

let api = Api.link;

//The beginning of the class
export default class StartBar extends Component {

    constructor(props) {
        super(props);
        //Declare the initial values for states
        this.state = {
            starCount: 0,
            overAllCount: 0
        };
    }

    //To get the current traine's rate and display it
    componentDidMount = async () => {
        let currentRate;
        await axios.get(api + "/IdTrainer/" + this.props.rateForUser).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                currentRate = item.rate
            });
            this.setState({ starCount: currentRate })
        })
    }

    async onStarRatingPress(rating, user) {
        //To calculate the weighted average rate
        let overAll = 0
        let totalRating = 0;
        //To get trainer's current rating
        await axios.get(api + "/IdTrainer/" + user).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                overAll = item.rate
                totalRating++
                totalRating += rating;
                overAll = ((overAll * totalRating) + rating) / (totalRating + 1)
            });
            this.setState({
                overAllCount: overAll
            });
            //To show the individual rate
            this.setState({
                starCount: rating
            });
        })
        //To update the rate for the trainer
        await axios.post(api + "/TrainerRateUpdate/" + user, {
            rate: this.state.overAllCount
        });
    }

    render() {
        return (
            <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating, this.props.rateForUser)}
                fullStarColor={"#FFD700"}
                starSize={30}
                emptyStarColor="#FFE066"
            />
        );
    }
}