import React, { Component } from 'react'
import SignIn from '../Components/SignIn'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'

// Styles
// import styles from './Styles/SignInScreenStyle';
// Styles

class SignInScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <SignIn
        onClose={() => navigate('HomeScreen')}
        verifyEmail={Actions.verifyEmail}
        doLogin={this.props.doLogin}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

export default connect(mapStateToProps, {
  doLogin: LoginActions.loginRequest
})(SignInScreen)
