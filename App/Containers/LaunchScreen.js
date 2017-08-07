import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> Hello </Text>
      </View>
    );
  }
}
