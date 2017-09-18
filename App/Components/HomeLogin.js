import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import Barcode from 'react-native-barcode-builder'
const { height, width } = Dimensions.get('window')
// 640, 360
// 1334, 750
// rgb(34, 37, 39)
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
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.onToggleBarcode}
        style={{
          width: 0.91 * width,
          height: (height / 5),
          backgroundColor: 'white',
          paddingTop: (height / 64),
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Barcode
          value='1234567890123' format='ITF14'
          width={1.88}
          height={60}
        />
        <Text style={{ marginTop: -3, fontWeight: '900', fontSize: 17, color: 'black' }}> 123 45678 90123 </Text>
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
