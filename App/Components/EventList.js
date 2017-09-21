import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import moment from 'moment'
import { Images } from '../Themes'
import styles from './Styles/EventListStyle'
const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default class EventList extends Component {
  render () {
    const { newIcon } = Images;
    const { imgSrc, datetime, startTime, endTime, title, notes, status } = this.props
    const newImg = this.props.newIcon
    ? <Image source={newIcon} style={styles.redNewImage} />
    : <Text />
    const redBlurBg = this.props.eventStatus === 'canceled'
    ? (
        <View
          style={{
            width: (width / 3.24),
            height: (width / 3.24),
            backgroundColor: 'red',
            opacity: 0.7
          }}
        >
          {newImg}
        </View>
      )
    : newImg
    const isInEventScreen = this.props.isInEventScreen
    ? newImg
    : redBlurBg
    const eventDate = moment(datetime).format('YYYY-MM-DD')
    const eventStart = moment(startTime, 'h:m:s').format('hh:mm')
    const eventEnd = moment(endTime, 'h:m:s').format('hh:mm')

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.gotoEventDetail}
      >
        <Image style={styles.image} source={{ uri: imgSrc }}>
          {isInEventScreen}
        </Image>
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
// const eventTimeDate = moment(datetime + ' ' + startTime)
// const currentTimeDate = moment()
// const isUpcommingEvent = eventTimeDate.isAfter(currentTimeDate)
// t thấy c so sánh để chỉ list ra các event sắp diễn ra thôi mà
