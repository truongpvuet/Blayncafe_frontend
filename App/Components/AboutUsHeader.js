import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/AboutUsHeaderStyle'
import { Images } from '../Themes'

export default class AboutUsHeader extends Component {
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
    const { container, icon, title, titleImage } = styles
    return (
      <View style={container}>

        <View style={{ height: 50, width: 50 }}>
          <TouchableOpacity />
        </View>

        <View style={title}>
          <Image style={titleImage} source={Images.TitleAboutUs} />
        </View>

        <View>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image style={icon} source={Images.hamburgerIcon} />
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
