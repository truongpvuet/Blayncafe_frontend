import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/SignupProfileHeaderStyle';
import { Images } from '../Themes';

export default class SignupProfileHeader extends Component {
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
    const { container, icon, title, titleImage } = styles;
    return (
      <View style={container}>
        <View>
          <TouchableOpacity onPress={this.props.goBack}>
            <Image style={icon} source={Images.buttonBack} />
          </TouchableOpacity>
        </View>

        <View style={title}>
          <Image style={titleImage} source={Images.TitleCafe} />
        </View>

        <View style={{ height: 50, width: 50 }} />
      </View>
    );
  }
}
