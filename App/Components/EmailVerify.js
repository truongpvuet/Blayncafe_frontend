import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/EmailVerifyStyle'

export default class EmailVerify extends Component {
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
  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleTypeEmail = this.handleTypeEmail.bind(this)
  }
  handleTypeEmail (text) {
    this.setState({
      email: text
    })
  }

  render () {
    const { container, title, titleText, textInput, verifyIntro, verifyText, form,
            emailForm, forgotPass, forgorBtn, forgotText,
            copyRight, rightText
    } = styles
    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> パスワード再設定 </Text>
        </View>
        <View style={verifyIntro}>
          <Text style={verifyText}>
            会員登録時に登録されたメールアドレスを入力し{'\n'}
            てください。パスワード再設定ページへのメール{'\n'}をお送りします。
          </Text>
        </View>

        <View style={form}>
          <View style={emailForm}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='メールアドレス'
              value={this.state.email}
              style={textInput}
              onChangeText={(text) => { this.handleTypeEmail(text) }}
              />
          </View>
        </View>

        <View style={forgotPass}>
          <TouchableOpacity
            style={forgorBtn}
            onPress={() => this.props.gotoVerifyMess(this.state.email)}
          >
            <Text style={forgotText}> 送信する </Text>
          </TouchableOpacity>
        </View>
        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    )
  }
}
