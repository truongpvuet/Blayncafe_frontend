import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/EventListStyle';

export default class EventList extends Component {
  render() {
    const { imgSrc, datetime, title, notes, releaseYear } = this.props;
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
          <Text style={styles.releaseYear}>{releaseYear}</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.divider} />
          <Text style={styles.notes}>{notes}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
// <Text style={styles.datetime}>{datetime}</Text>
// <Text style={styles.description}>{description}</Text>
