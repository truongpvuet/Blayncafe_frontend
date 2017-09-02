import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Images } from '../Themes';

// Styles
import styles from './Styles/HomeLoginStyle';

export default class HomeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      isLogin: false
    });
  }
  render() {
    const {
      container, button, signup, signin, signinText, signupText, barcode, barcodeImage
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
    const Login = this.state.isLogin ? HomeAfterLogin : HomeBeforeLogin;

    return (
      <View style={container}>
        {Login}
      </View>
    );
  }
}
