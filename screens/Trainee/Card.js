import React from 'react';
import { View } from 'react-native';

import TrainerCard from "../../components/TrainerCard"
import Header from '../../components/TrainerHeader';

export default class Card extends React.Component {
  render() {
    return (
      <View>
        <Header
          proNav={() => this.props.navigation.navigate('Profile')}
        /*tNav=
        perNav={} */
        ></Header>
        <TrainerCard
          name='Rahaf'
          field="drawing trainer"
          bio="I'm a passionate drawing trainer with 11 years experience. I like to encourage and help others to professionally draw pictures."
        ></TrainerCard>
      </View>
    );
  }
}