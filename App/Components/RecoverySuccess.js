import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/RecoverySuccessStyle';
import HeaderSign from '../Components/HeaderSign';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Styles

export default class RecoverySuccess extends Component {
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
    const { container, title, titleText, styleCup, img, sumaryMessage, textMessage,
            button, successBtn, successText, copyRight, rightText
    } = styles;
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
            onPress={() => this.props.navigation.navigate('SignInScreen')}
            style={successBtn}
          >
            <Text style={successText}> ログイン </Text>
          </TouchableOpacity>
        </View>

        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    );
  }
}
