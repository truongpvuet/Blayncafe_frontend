import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Menu from '../Components/Menu'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'
import ListEventActions from '../Redux/ListEventsRedux'

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
  componentWillMount () {
    if (!this.props.attendedEvent) {
      this.props.getAttendedEvent()
    }
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
    const willAttendedEvents = (this.props.attendedEvent || []).filter(event => {
      const date = moment(`${event.date} ${event.startingTime}`)
      return date.isAfter(moment())
    })
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
        willAttendedEvents={willAttendedEvents}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const { auth, event } = state
  return {
    auth,
    attendedEvent: event.attended
  }
}

export default connect(mapStateToProps, {
  doLogout: LoginActions.logout,
  getAttendedEvent: ListEventActions.listAttendedEventRequest
})(MenuScreen)
