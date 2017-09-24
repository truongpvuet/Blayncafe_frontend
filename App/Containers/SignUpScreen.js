import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import SignUp from '../Components/SignUp'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'

// Styles
// import styles from './Styles/SignUpScreenStyle';
// Styles

class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.gotoTOS = this.gotoTOS.bind(this)
    this.gotoPrivacyPolicy = this.gotoPrivacyPolicy.bind(this)
    this.gotoProfilePolicy = this.gotoProfilePolicy.bind(this)
    this.gotoSignupProfile = this.gotoSignupProfile.bind(this)
  }

  gotoTOS () {
    Actions.tos()
  }
  gotoPrivacyPolicy () {
    Actions.policy()
  }
  gotoProfilePolicy () {
    Actions.profilePolicy()
  }
  gotoSignupProfile (submitStudent, image, profilePreview, studentCardPreview) {
    Actions.push('signupProfileScreen', { submitStudent, image, profilePreview, studentCardPreview })
    // console.log(submitStudent)
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <SignUp
        gotoSignupProfile={this.gotoSignupProfile}
        gotoTOS={() => this.gotoTOS()}
        gotoPrivacyPolicy={() => this.gotoPrivacyPolicy()}
        gotoProfilePolicy={() => this.gotoProfilePolicy()}
        signUpRequest={this.props.signUpRequest}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {
  signUpRequest: LoginActions.signUpRequest
})(SignUpScreen)
