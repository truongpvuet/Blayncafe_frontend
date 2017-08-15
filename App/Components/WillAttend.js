import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/WillAttendStyle';

export default class WillAttend extends Component {
  render() {
    const { imgSrc, datetime, description, notes } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.gotoEventDetail}
      >
        <Image
          style={styles.image}
          source={{ uri: imgSrc }}
        />
        <View style={styles.content}>
          <Text style={styles.datetime}>{datetime}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.divider} />
          <Text style={styles.notes}>{notes}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
