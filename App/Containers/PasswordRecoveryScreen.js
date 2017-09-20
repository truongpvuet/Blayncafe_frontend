import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PasswordRecovery from '../Components/PasswordRecovery'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'

// Styles
import styles from './Styles/PasswordRecoveryScreenStyle'

class PasswordRecoveryScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     header: (
  //       <HeaderSign onClose={() => navigate('HomeScreen')} />
  //     ),
  //     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //     tabBarIcon: ({ focused }) => (
  //       <Image
  //         source={focused ? Images.tabHome : Images.untabHome}
  //         style={{ width: (widthImage / 2), height: (heighImage / 2) }}
  //       />
  //     ),
  //     tabBarVisible: false
  //   };
  // }
  constructor (props) {
    super(props)
    this.GotoRecoverySuccess = this.GotoRecoverySuccess.bind(this)
  }
  GotoRecoverySuccess () {
    const { navigate } = this.props.navigation
    navigate('RecoverySuccess')
  }

  render () {
    const { container, title, titleText, verifyIntro, verifyText
    } = styles
    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> パスワード再設定 </Text>
        </View>
        <View style={verifyIntro}>
          <Text style={verifyText}>
            パスワードの再設定を行います。{'\n'}
            新しいパスワードを入力し「再設定する」ボタン{'\n'}
            を押してください。{'\n\n'}
            ・半角英字、数字、アンダースコアを3〜16文字{'\n'}で使用できます。
          </Text>
        </View>
        <PasswordRecovery
          changePassword={this.props.changePassword}
          restoreEmail={this.props.restoreEmail}
          gotoRecoverySuccess={() => this.GotoRecoverySuccess()}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restoreEmail: state.auth.restoreEmail
  }
}

export default connect(mapStateToProps, {
  changePassword: LoginActions.changePassword
})(PasswordRecoveryScreen)
