import React, { Component } from 'react'
import { } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Menu from '../Components/Menu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'

// Styles
// import styles from './Styles/MenuScreenStyle'

class MenuScreen extends Component {
  constructor (props) {
    super(props)
    this.drawToHome = this.drawToHome.bind(this)
    this.gotoPersonalInfo = this.gotoPersonalInfo.bind(this)
    this.gotoAttendEvent = this.gotoAttendEvent.bind(this)
    this.gotoCoffeeHistory = this.gotoCoffeeHistory.bind(this)
    this.gotoPrivacyPolicy = this.gotoPrivacyPolicy.bind(this)
    this.gotoTOS = this.gotoTOS.bind(this)
  }

  drawToHome () {
    Actions.drawerClose()
  }
  gotoPersonalInfo () {
    // const { navigate } = this.props.navigation
    Actions.profile()
  }
  gotoAttendEvent () {
    // const { navigate } = this.props.navigation
    Actions.attendedEvent()
  }
  gotoCoffeeHistory () {
    Actions.coffeeHistory()
  }
  gotoPrivacyPolicy () {
    // const { navigate } = this.props.navigation
    // navigate('PrivacyPolicyScreen', { from: 'MenuScreen' })
    Actions.policy()
  }
  gotoTOS () {
    Actions.tos()
  }

  render () {
    return (
      <Menu
        onClose={() => this.drawToHome()}
        openPersonalInfo={() => this.gotoPersonalInfo()}
        openTOS={() => this.gotoTOS()}
        openPrivacyPolicy={() => this.gotoPrivacyPolicy()}
        gotoCoffeeHistory={() => this.gotoCoffeeHistory()}
        gotoAttendEvent={() => this.gotoAttendEvent()}
        userProfile={this.props.auth.userProfile}
        doLogout={() => this.props.doLogout()}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps, {
  doLogout: LoginActions.logout
})(MenuScreen)
