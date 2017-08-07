import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/CoffeeShopStyle';
// import { Images } from '../Themes';

export default class CoffeeShop extends Component {
  render() {
    const { container, timeDetail } = styles;
    const { date, time } = this.props;
    return (
      <View style={container}>
        <Text style={timeDetail}> {date} </Text>
        <Text style={timeDetail}> {time} </Text>
      </View>
    );
  }
}
