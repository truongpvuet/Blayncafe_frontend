import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/LogOutStyle';

export default class LogOut extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>LogOut Component</Text>
      </View>
    );
  }
}
