import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/SignupSuccessStyle';
import HeaderSign from '../Components/HeaderSign';
import { Images } from '../Themes';

export default class SignupSuccess extends Component {
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
    const { container, title, titleText, styleCup, img, sumaryMessage, imgMessage,
            button, successBtn, copyRight, rightText
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
          <Image source={Images.sumaryMessage} style={imgMessage} />
        </View>

        <View style={button}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignInScreen')}
          >
            <Image source={Images.buttonSuccess} style={successBtn} />
          </TouchableOpacity>
        </View>

        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    );
  }
}
