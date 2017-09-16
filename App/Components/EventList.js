import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import styles from './Styles/EventListStyle'

export default class EventList extends Component {
  render () {
    const { imgSrc, datetime, startTime, endTime, title, notes } = this.props
    const eventDate = moment(datetime).format('YYYY/MM/DD')
    const eventStart = moment(startTime, 'h:m:s').format('hh:mm')
    const eventEnd = moment(endTime, 'h:m:s').format('hh:mm')
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
          <Text style={styles.datetime}>{`${eventDate} (±) ${eventStart}~${eventEnd}`}</Text>
          <Text style={styles.description} numberOfLines={3}>{title}</Text>
          <View style={styles.divider} />
          <Text style={styles.notes} numberOfLines={1}>{notes}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
// <Text style={styles.datetime}>{datetime}</Text>
// <Text style={styles.description}>{description}</Text>
