import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Images } from '../Themes';

// Styles
import styles from './Styles/HomeStyle';

export default class Home extends Component {
  render() {
    const {
      container, titleContent, titleText, graph, button, graphImage,
      signup, signin, signinText, signupText, barcode, barcodeImage
    } = styles;
    const HomeBeforeLogin = (
      <View style={button}>
        <TouchableOpacity
          style={signup}
          onPress={this.props.onOpenSignUp}
        >
          <Text style={signupText}> 新規登録 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={signin}
          onPress={this.props.onOpenSignIn}
        >
          <Text style={signinText}> ログイン </Text>
        </TouchableOpacity>
      </View>
    );
    const HomeAfterLogin = (
      <View style={barcode}>
        <TouchableOpacity>
          <Image style={barcodeImage} source={Images.Barcode} />
        </TouchableOpacity>
      </View>
    );
    const HomeLogin = false ? HomeAfterLogin : HomeBeforeLogin;

    return (
      <View style={container}>

        <View style={titleContent}>
          <Text style={titleText}> 18-00 【19卒】まだ間に合うインターン </Text>
        </View>

        <View style={graph}>
          <Image source={Images.Graph} style={graphImage} />
        </View>

        {HomeLogin}

      </View>
    );
  }
}
