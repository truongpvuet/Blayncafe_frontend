import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import { connect } from 'redux'
import styles from './Styles/PasswordRecoveryStyle'

export default class PasswordRecovery extends Component {
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
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeText = this.handleChangeText.bind(this)
    this.state = {
      password: ''
    }
  }

  handleChangePassword () {
    this.props.changePassword(this.props.restoreEmail, this.state.password)
  }

  handleChangeText (text) {
    this.setState({
      password: text
    })
  }

  render () {
    const { container, form, passwordForm, repasswordForm, textInput,
            restorePass, restoreBtn, restoreText, copyRight, rightText
    } = styles
    return (
      <View style={container}>
        <View style={form}>
          <View style={passwordForm}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='パスワード'
              style={textInput}
              value={this.state.password}
              onChangeText={(text) => this.handleChangeText(text)}
              password
            />
          </View>
          <View style={repasswordForm}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='確認のため再度ご入力ください'
              style={textInput}
              password
            />
          </View>
        </View>

        <View style={restorePass}>
          <TouchableOpacity
            style={restoreBtn}
            onPress={this.handleChangePassword}
          >
            <Text style={restoreText}> 送信する </Text>
          </TouchableOpacity>
        </View>
        <View style={copyRight}>
          <Text style={rightText}> © blayn Inc. All Rights Reserved. </Text>
        </View>
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     restoreEmail: state.auth.restoreEmail
//   }
// }

// export default connect(mapStateToProps, {

// })(PasswordRecovery)
