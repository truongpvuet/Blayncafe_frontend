import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Styles/EventTabHeaderStyle';
// import { Images } from '../Themes';

export default class EventTabHeader extends Component {
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
    const { container, tab, tabButtonLeft, tabImageLeft, tabButtonRight, tabImageRight,

    } = styles;
    return (
      <View style={container}>
        <View style={tab}>
          <TouchableOpacity
            style={tabButtonLeft}
            onPress={this.props.focusEvent}
          >
            <Image source={this.props.eventImg} style={tabImageLeft} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tabButtonRight}
            onPress={this.props.focusCalendar}
          >
            <Image source={this.props.calendarImg} style={tabImageRight} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
