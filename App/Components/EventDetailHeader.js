import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './Styles/EventDetailHeaderStyle';
import { Images } from '../Themes';

export default class EventDetailHeader extends Component {
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
    const { container, icon, title, titleImage, backIcon } = styles;
    return (
      <View style={container}>

        <View>
          <TouchableOpacity onPress={this.props.goBack}>
            <Image style={backIcon} source={Images.buttonBack} />
          </TouchableOpacity>
        </View>

        <View style={title}>
          <Image style={titleImage} source={Images.TitleEvent} />
        </View>

        <View>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image style={icon} source={Images.hamburgerIcon} />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
