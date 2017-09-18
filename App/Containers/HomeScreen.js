import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Body } from 'native-base'
import moment from 'moment'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { isLoggedIn } from '../Lib/authHelper'
import HomeLogin from '../Components/HomeLogin'
import EventActions from '../Redux/ListEventsRedux'
// Set timer graph
import AnimatedTimer from '../Components/AnimatedTimer'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import styles from './Styles/HomeScreenStyle'

// Styles
const { width, height } = Dimensions.get('window')

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      timerToggle: true
    }
    this.OpenSignIn = this.OpenSignIn.bind(this)
    this.OpenSignUp = this.OpenSignUp.bind(this)
    this.handleToggleBarcode = this.handleToggleBarcode.bind(this)
  }
  componentWillMount () {
    if (!this.props.events) {
      this.props.listEventsRequest()
    }
  }
  componentDidMount () {
    this.setState({
      value: 70
    })
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.accessToken && nextProps.accessToken !== this.props.accessToken) {
      this.props.navigation.setParams({
        loggedIn: isLoggedIn(nextProps.accessToken)
      })
    }
    if (nextProps.currentScreen !== 'home' && nextProps.currentScreen !== this.props.currentScreen) {
      if (!this.props.events) {
        this.props.listEventsRequest()
      }
    }
  }
  OpenSignIn () {
    Actions.login()
  }
  OpenSignUp () {
    Actions.signup()
  }
  handleToggleBarcode () {
    const nextToggle = !this.state.timerToggle
    this.setState({
      timerToggle: !this.state.timerToggle
    })
    const now = moment()
    const matchingCurrentEvent = this.props.events && this.props.events.events && this.props.events.events.filter(event => {
      const startTime = moment(`${event.date} ${event.startingTime}`)
      const endTime = moment(`${event.date} ${event.endTime}`)
      if (startTime.isBefore(now) && endTime.isAfter(now)) {
        return true
      }
      return false
    })
    const currentEvent = matchingCurrentEvent && matchingCurrentEvent.length > 0 && matchingCurrentEvent[0]
    if (!nextToggle) {
      // const startTime = moment(`${currentEvent.date} ${currentEvent.startingTime}`)
      if (currentEvent) {
        const endTime = moment(`${currentEvent.date} ${currentEvent.endTime}`)
        this.setState({ value: (endTime.hours() - now.hours()) * 60 + (endTime.minutes() - now.minutes()) })
      } else {
        this.setState({ value: 0 })
      }
    } else {
      this.setState({ value: 70 })
    }
  }

  render () {
    const { container, titleContent, titleText
    } = styles
    const now = moment()
    const matchingCurrentEvent = this.props.events && this.props.events.events && this.props.events.events.filter(event => {
      const startTime = moment(`${event.date} ${event.startingTime}`)
      const endTime = moment(`${event.date} ${event.endTime}`)
      if (startTime.isBefore(now) && endTime.isAfter(now)) {
        return true
      }
      return false
    })
    const currentEvent = matchingCurrentEvent && matchingCurrentEvent.length > 0 && matchingCurrentEvent[0]
    const seatPercentComponent = (
      <View style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>
        <Text
          style={{ color: 'white', fontSize: 22, width: '100%', textAlign: 'center' }}
        >
          SEAT
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 38,
            fontWeight: '300',
            width: '100%',
            textAlign: 'center'
          }}
        >
          68%
        </Text>
      </View>
    )
    const timerPercentComponent = (
      <View style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}>
        <Text
          style={{ color: 'white', fontSize: 22, width: '100%', textAlign: 'center' }}
        >
          TIMER
        </Text>
        <View style={{ backgroundColor: 'transparent', flexDirection: 'row' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 38,
              fontWeight: '300',
              width: '100%',
              textAlign: 'center'
            }}
          >
            32min
          </Text>
        </View>
      </View>
    )

    const closed = (
      <View style={{ width: '100%', height: '100%', backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'column' }}>
        <Text
          style={{ color: 'white', fontSize: 30, width: '100%', textAlign: 'center' }}
        >
          CLOSE
        </Text>
      </View>
    )
    return (
      <View style={container}>
        <View style={titleContent}>
          <Text style={titleText}>{currentEvent ? currentEvent.eventTitle : '定休日'}</Text>
        </View>

        <Body
          style={{
            flex: 14,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{ height: 280 / 667 * height }}>
            <AnimatedTimer
              value={this.state.value} size={275 / 667 * height} strokewidth={40 / 667 * height}
              startColor={this.state.timerToggle ? '#E01F41' : '#77CD45'}
              endColor={this.state.timerToggle ? '#894532' : '#B6DE44'}
              hideLine={this.state.value === 0}
            >
              {this.state.timerToggle
                ? seatPercentComponent
                : currentEvent
                  ? timerPercentComponent
                  : closed
              }
            </AnimatedTimer>
          </View>
        </Body>

        <HomeLogin
          onOpenSignIn={() => this.OpenSignIn()}
          onOpenSignUp={() => this.OpenSignUp()}
          isLogin={isLoggedIn(this.props.accessToken)}
          barcodeValue={this.props.userProfile && this.props.userProfile.barcode}
          onToggleBarcode={this.handleToggleBarcode}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    ...auth,
    currentScreen: state.routes.scene,
    events: state.event.payload
  }
}

export default connect(mapStateToProps, {
  listEventsRequest: EventActions.listEventsRequest
})(HomeScreen)
