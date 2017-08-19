import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles/VerifyMessageStyle';
import HeaderSign from '../Components/HeaderSign';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Styles

export default class VerifyMessage extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => navigate('HomeScreen')} />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={Images.tabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      ),
      tabBarVisible: false
    };
  }

  render() {
    const { container, title, titleText, verifyIntro, verifyText, copyRight, rightText
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
            ってください。{'\n\n'}
            再設定メールが届かない場合は、迷惑メールボック{'\n'}
            スの設定解除 blayncafe.jpからのドメイン着信許{'\n'}
            可の設定をご確認ください。
          </Text>
        </TouchableOpacity>
        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    );
  }
}
