import React, { Component } from 'react'
import { } from 'redux-form'
// import PropTypes from 'prop-types'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import { Content, Form, Item, Input, Label } from 'native-base'
import styles from './Styles/SignInStyle'

export default class SignIn extends Component {
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
      email: '',
      password: ''
    }

    this.editFormField = this.editFormField.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  editFormField (field, value) {
    this.setState({
      [field]: value
    })
  }

  handleLogin () {
    this.props.doLogin(this.state.email, this.state.password)
  }

  render () {
    const { container, title, titleText, formCover, mainForm, form,
            copyrightForm, emailForm, passwordForm, textInput,
            loginBtnView, loginBtn, loginText, copyRight, forgotPass,
            forgotText, rightText
    } = styles
    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> ログイン  - {this.props.name} </Text>
        </View>

        <View style={formCover}>
          <View style={mainForm}>
            <View style={{ flex: 1 }} />
            <View style={form}>
              <View style={emailForm}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='メールアドレス'
                  value={this.state.email}
                  style={textInput}
                  onChangeText={(text) => this.editFormField('email', text)}
                />
              </View>
              <View style={passwordForm}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='パスワード'
                  value={this.state.password}
                  password
                  secureTextEntry
                  style={textInput}
                  onChangeText={(text) => this.editFormField('password', text)}
                />
              </View>
            </View>
            <View style={loginBtnView}>
              <TouchableOpacity style={loginBtn} onPress={this.handleLogin}>
                <Text style={loginText}> ログイン </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={copyrightForm}>
            <View style={forgotPass}>
              <TouchableOpacity onPress={this.props.verifyEmail}>
                <Text style={forgotText}> パスワードをお忘れの方 </Text>
              </TouchableOpacity>
            </View>
            <View style={copyRight}>
              <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

// <View style={emailForm}>
//   <TextInput
//     style={emailText}
//     underlineColorAndroid='transparent'
//     placeholder="Email"
//   />
// </View>
// <View style={passwordForm}>
//   <TextInput
//     style={passwordText}
//     underlineColorAndroid='transparent'
//     placeholder="Password"
//     secureTextEntry
//   />
// </View>
