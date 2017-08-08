import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/CalendarStyle';

export default class Calendar extends Component {
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
        <TouchableOpacity
          onPress={this.props.gotoEventDetail}
        >
          <Text>Calendar Component</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
