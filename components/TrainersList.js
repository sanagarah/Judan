import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TopTrainer from "./TopTrainer"

export default class TrainersList extends Component {

    render() {
        return (
            <ScrollView>
                <TopTrainer
                    image={require('../assets/images/girlpic.png')}
                    name="Sana"
                    field="drawing trainer"
                ></TopTrainer>

                <TopTrainer
                    image={require('../assets/images/girlpic.png')}
                    name="Sara"
                    field="coocking trainer"
                ></TopTrainer>

                <TopTrainer
                    image={require('../assets/images/girlpic.png')}
                    name="Hind"
                    field="dancing trainer"
                ></TopTrainer>
            </ScrollView>
        );
    }
}


