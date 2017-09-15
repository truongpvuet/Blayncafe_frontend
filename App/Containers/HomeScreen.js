import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Body } from 'native-base'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { isLoggedIn } from '../Lib/authHelper'
import HomeLogin from '../Components/HomeLogin'

// Set timer graph
import AnimatedTimer from '../Components/AnimatedTimer'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import styles from './Styles/HomeScreenStyle'

// Styles

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.OpenSignIn = this.OpenSignIn.bind(this)
    this.OpenSignUp = this.OpenSignUp.bind(this)
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
  }
  OpenSignIn () {
    Actions.login()
  }
  OpenSignUp () {
    Actions.signup()
  }

  render () {
    const { container, titleContent, titleText
    } = styles
    return (
      <View style={container}>
        <View style={titleContent}>
          <Text style={titleText}> 18-00 【19卒】まだ間に合うインターン </Text>
        </View>

        <Body
          style={{
            flex: 14,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{ height: 280 }}>
            <AnimatedTimer
              value={this.state.value} size={251} strokewidth={40}
              startColor='#77CD45' endColor='#B6DE44'
            >
              <View style={{ width: '100%', height: '100%' }}>
                <Text
                  style={{ color: 'white', fontSize: 22, width: '100%', textAlign: 'center' }}
                >
                  SEAT
                </Text>
                <View
                  style={{
                    width: 40,
                    height: 1,
                    backgroundColor: 'white',
                    marginTop: 3,
                    alignSelf: 'center'
                  }}
                />
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
            </AnimatedTimer>
          </View>
        </Body>

        <HomeLogin
          onOpenSignIn={() => this.OpenSignIn()}
          onOpenSignUp={() => this.OpenSignUp()}
          isLogin={isLoggedIn(this.props.accessToken)}
          barcodeValue={this.props.userProfile && this.props.userProfile.barcode}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    ...auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
