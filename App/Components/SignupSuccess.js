import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './Styles/SignupSuccessStyle'
import { Images } from '../Themes'
// Styles

export default class SignupSuccess extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     header: (
  //       <HeaderSign onClose={() => navigate('HomeScreen')} />
  //     ),
  //     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //     tabBarIcon: ({ focused }) => (
  //       <Image
  //         source={focused ? Images.tabHome : Images.untabHome}
  //         style={{ width: (widthImage / 2), height: (heighImage / 2) }}
  //       />
  //     ),
  //     tabBarVisible: false
  //   };
  // }

  render () {
    const { container, title, titleText, styleCup, img, sumaryMessage, imgMessage,
            button, successBtn, copyRight, rightText
    } = styles
    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> 会員登録完了 </Text>
        </View>

        <View style={styleCup}>
          <Image source={Images.imageCup} style={img} />
        </View>

        <View style={sumaryMessage}>
          <Image source={Images.sumaryMessage} style={imgMessage} />
        </View>

        <View style={button}>
          <TouchableOpacity
            onPress={() => Actions.login()}
          >
            <Image source={Images.buttonSuccess} style={successBtn} />
          </TouchableOpacity>
        </View>

        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    )
  }
}
