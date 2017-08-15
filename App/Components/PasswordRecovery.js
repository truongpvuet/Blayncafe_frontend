import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles/PasswordRecoveryStyle';

export default class PasswordRecovery extends Component {
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
    const { container, form, passwordForm, repasswordForm, textInput,
            restorePass, restoreBtn, restoreText, copyRight, rightText
    } = styles;
    return (
      <View style={container}>
        <View style={form}>
          <View style={passwordForm}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder="パスワード"
              style={textInput}
            />
          </View>
          <View style={repasswordForm}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder="確認のため再度ご入力ください"
              style={textInput}
            />
          </View>
        </View>

        <View style={restorePass}>
          <TouchableOpacity
            style={restoreBtn}
            onPress={this.props.gotoRecoverySuccess}
          >
            <Text style={restoreText}> 送信する </Text>
          </TouchableOpacity>
        </View>
        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    );
  }
}
