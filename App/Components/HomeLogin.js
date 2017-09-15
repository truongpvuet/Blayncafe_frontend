import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Barcode from 'react-native-barcode-builder'

// Styles
import styles from './Styles/HomeLoginStyle'

const HomeLogin = (props) => {
  const {
    container, button, signup, signin, signinText, signupText, barcode
  } = styles
  const HomeBeforeLogin = (
    <View style={button}>
      <TouchableOpacity
        style={signup}
        onPress={props.onOpenSignUp}
      >
        <Text style={signupText}> 新規登録 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={signin}
        onPress={props.onOpenSignIn}
      >
        <Text style={signinText}> ログイン </Text>
      </TouchableOpacity>
    </View>
  )
  const HomeAfterLogin = (
    <View style={barcode}>
      <TouchableOpacity onPress={props.onToggleBarcode}>
        <Barcode value={props.barcodeValue} format='CODE128' />
      </TouchableOpacity>
    </View>
  )
  const Login = props.isLogin ? HomeAfterLogin : HomeBeforeLogin

  return (
    <View style={container}>
      {Login}
    </View>
  )
}

export default HomeLogin
