import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    };
    this.highlight = this.highlight.bind(this);
  }

  highlight = (isHighlight) => {
    this.setState({ isPressed: isHighlight });
  }

  render() {
    const { size, dateNum, dayOfWeek, isFirstLine } = this.props;
    const { isPressed } = this.state;

    // Avoid eslint syntax warning
    let Style1 = styles.dateNum;
    if (dayOfWeek === 6) {
      Style1 = styles.dateNumSat;
    } else if (dayOfWeek === 0) {
      Style1 = styles.dateNumSun;
    }
    let Style2 = styles.dotNot;
    if (size === 'large') {
      Style2 = styles.dotLarge;
    } else if (size === 'small') {
      Style2 = styles.dotSmall;
    }

    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.highlight(true)}
        onPressOut={() => this.highlight(false)}
      >
        <View style={styles.container}>
          {isFirstLine && <View style={styles.dateHeadline} />}
          <View style={!isPressed ? styles.subContainer : styles.highlightedSubContainer}>
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
      </TouchableWithoutFeedback>
    );
  }
}
