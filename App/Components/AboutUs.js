import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ScrollView, View, Image } from 'react-native';
import { Images } from '../Themes';
import styles from './Styles/AboutUsStyle';

export default class AboutUs extends Component {
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
    const { container, main, pointCover, point, menu, access
    } = styles;
    const {
      mainAboutus, pointAboutus, menuAboutus
    } = Images;
    return (
      <ScrollView style={container}>
        <Image source={mainAboutus} style={main} />
        <View style={pointCover}>
          <Image source={pointAboutus} style={point} />
        </View>
        <Image source={menuAboutus} style={menu} />

        <View style={access}>
        </View>
      </ScrollView>
    );
  }
}
