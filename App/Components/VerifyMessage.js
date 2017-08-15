import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles/VerifyMessageStyle';
import HeaderSign from '../Components/HeaderSign';

export default class VerifyMessage extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => navigate('HomeScreen')} />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarVisible: false
    };
  }

  render() {
    const { container, title, titleText, verifyIntro, verifyText
    } = styles;
    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> パスワード再設定 </Text>
        </View>
        <TouchableOpacity
          style={verifyIntro}
          onPress={() => this.props.navigation.navigate('PasswordRecoveryScreen')}
        >
          <Text style={verifyText}>
            パスワード再設定ページへのURLを送信しました。{'\n'}
            確認メールに記載のURLから再設定の手続きを行な{'\n'}
            ってください。{'\n\n\n'}
            再設定メール
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
