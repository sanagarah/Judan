import React from 'react';
import { View } from 'react-native';
import TrainerCard from "../../components/TrainerCard"
import Header from '../../components/CardHeader';

export default class Card extends React.Component {
  render() {
    return (
      <View>
        <Header
          proNav={() => this.props.navigation.navigate('Profile')}
          tNav={() => this.props.navigation.navigate('Request')}
          perNav={() => this.props.navigation.navigate('Request')}
        ></Header>
        <TrainerCard
          nav={() => this.props.navigation.navigate('Chating')}
          name='Rahaf'
          field="drawing trainer"
          rate={2.5}
          bio="I'm a passionate drawing trainer with 11 years experience. I like to encourage and help others to professionally draw pictures."
        ></TrainerCard>
      </View>
    );
  }
}