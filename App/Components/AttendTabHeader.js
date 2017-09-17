import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/AttendTabHeaderStyle'
// import { Images } from '../Themes';

export default class AttendTabHeader extends Component {
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

  render () {
    const { container, button, willAttend, didAttend, textAttend
    } = styles
    const onFocus = this.props.onfocusProps
    const activeStyle = onFocus ? didAttend : willAttend
    const inactiveStyle = !onFocus ? didAttend : willAttend
    return (
      <View style={container}>
        <View style={button}>
          <TouchableOpacity
            style={activeStyle}
            onPress={this.props.focusWillEvent}
          >
            <Text style={textAttend}> 参加予定 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={inactiveStyle}
            onPress={this.props.focusDidEvent}
          >
            <Text style={textAttend}> 参加したイベント </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
