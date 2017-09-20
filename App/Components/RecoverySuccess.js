import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/RecoverySuccessStyle'
import { Actions } from 'react-native-router-flux'
import { Images } from '../Themes'
// Styles

export default class RecoverySuccess extends Component {
  render () {
    const { container, title, titleText, styleCup, img, sumaryMessage, textMessage,
            button, successBtn, successText, copyRight, rightText
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
          <Text style={textMessage}>
            パスワードの再設定が完了しました。{'\n'}
            次回ログインより新しいパスワードがご利用いた{'\n'}
            だけます。
          </Text>
        </View>

        <View style={button}>
          <TouchableOpacity
            onPress={() => Actions.login()}
            style={successBtn}
          >
            <Text style={successText}> ログイン </Text>
          </TouchableOpacity>
        </View>

        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    )
  }
}
