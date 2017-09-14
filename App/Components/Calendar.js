import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CalendarStyle'

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
  constructor (props) {
    super(props)
    this.highlight = this.highlight.bind(this)
  }

  render () {
    const { size, dateNum, dayOfWeek, isFirstLine } = this.props
    const { isToday } = this.props

    // Avoid eslint syntax warning
    let Style1 = styles.dateNum
    if (dayOfWeek === 6) {
      Style1 = styles.dateNumSat
    } else if (dayOfWeek === 0) {
      Style1 = styles.dateNumSun
    }
    let Style2 = styles.dotNot
    if (size === 'large') {
      Style2 = styles.dotLarge
    } else if (size === 'small') {
      Style2 = styles.dotSmall
    }

    return (
      <View style={styles.container}>
        {isFirstLine && <View style={styles.dateHeadline} />}
        <View style={!isToday ? styles.subContainer : styles.highlightedSubContainer}>
          <View style={styles.dateNumRegion}>
            <Text
              style={Style1}
            >
              {dateNum}
            </Text>
          </View>
          <View style={styles.dotRegion}>
            <View style={Style2} />
          </View>
        </View>
      </View>
    )
  }
}
