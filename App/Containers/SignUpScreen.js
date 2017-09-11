import React, { Component } from 'react'
import SignUp from '../Components/SignUp'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/SignUpScreenStyle';
// Styles

export default class SignUpScreen extends Component {
  constructor (props) {
    super(props)
    this.gotoTOS = this.gotoTOS.bind(this)
    this.gotoPrivacyPolicy = this.gotoPrivacyPolicy.bind(this)
    this.gotoProfilePolicy = this.gotoProfilePolicy.bind(this)
  }

  gotoTOS () {
    const { navigate } = this.props.navigation
    navigate('TosScreen', { from: 'SignUpScreen' })
  }
  gotoPrivacyPolicy () {
    const { navigate } = this.props.navigation
    navigate('PrivacyPolicyScreen', { from: 'SignUpScreen' })
  }
  gotoProfilePolicy () {
    const { navigate } = this.props.navigation
    navigate('ProfilePolicyScreen')
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <SignUp
        gotoSignupProfile={() => navigate('SignupProfileScreen')}
        gotoTOS={() => this.gotoTOS()}
        gotoPrivacyPolicy={() => this.gotoPrivacyPolicy()}
        gotoProfilePolicy={() => this.gotoProfilePolicy()}
      />
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
