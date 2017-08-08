import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './Styles/EventListStyle';

export default class EventList extends Component {
  render() {
    const { imgSrc, datetime, description, notes } = this.props;
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}
