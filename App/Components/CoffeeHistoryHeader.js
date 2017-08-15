import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from '../Themes';
import styles from './Styles/CoffeeHistoryHeaderStyle';

export default class CoffeeHistoryHeader extends Component {
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
    const { header, icon, title, profileName, textProfile, userIcon
    } = styles;
    return (
      <View style={header}>
        <View>
          <TouchableOpacity onPress={this.props.gobackMenu}>
            <Image style={icon} source={Images.buttonBack} />
          </TouchableOpacity>
        </View>
        <View style={title}>
          <View style={profileName}>
            <Image style={userIcon} source={Images.iconShop} />
            <Text style={textProfile}> 来店ポイント </Text>
          </View>
        </View>
        <View style={{ height: 50, width: 50 }}>
          <View />
        </View>
      </View>
    );
  }
}
