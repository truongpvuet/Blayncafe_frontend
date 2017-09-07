import React, { Component } from 'react'
import { } from 'react-native'
import { connect } from 'react-redux'
import Menu from '../Components/Menu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

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
    const { navigate } = this.props.navigation
    navigate('DrawerClose')
  }
  gotoPersonalInfo () {
    const { navigate } = this.props.navigation
    navigate('PersonalInfoScreen')
  }
  gotoAttendEvent () {
    const { navigate } = this.props.navigation
    navigate('AttendEventScreen')
  }
  gotoCoffeeHistory () {
    const { navigate } = this.props.navigation
    navigate('CoffeeHistoryScreen')
  }
  gotoPrivacyPolicy () {
    const { navigate } = this.props.navigation
    navigate('PrivacyPolicyScreen', { from: 'MenuScreen' })
  }
  gotoTOS () {
    const { navigate } = this.props.navigation
    navigate('TosScreen', { from: 'MenuScreen' })
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

// const mapDispatchToProps = () => {
//   return {

//   }
// }

export default connect(mapStateToProps, {})(MenuScreen)
