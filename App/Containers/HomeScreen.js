import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Body } from 'native-base'
import { connect } from 'react-redux'
import { isLoggedIn } from '../Lib/authHelper'
import HomeLogin from '../Components/HomeLogin'
import Header from '../Components/Header'

// Set timer graph
import AnimatedTimer from '../Components/AnimatedTimer'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes'
import styles from './Styles/HomeScreenStyle'

const heighImage = 44
const widthImage = 51
// Styles

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 70
    }
    this.OpenSignIn = this.OpenSignIn.bind(this)
    this.OpenSignUp = this.OpenSignUp.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps && nextProps.accessToken !== this.props.accessToken) {
      this.props.navigation.setParams({
        loggedIn: isLoggedIn(nextProps.accessToken)
      })
    }
  }
  OpenSignIn () {
    const { navigate } = this.props.navigation
    navigate('SignInScreen', { name: 'Truong' })
  }
  OpenSignUp () {
    const { navigate } = this.props.navigation
    navigate('SignUpScreen')
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

HomeScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation
  return {
    header: (
      <Header
        onOpen={() => navigate('DrawerOpen')}
        loggedIn={navigation.state.params && navigation.state.params.loggedIn}
      />
    ),
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ focused }) => (
      <Image
        source={focused ? Images.tabHome : Images.untabHome}
        style={{ width: (widthImage / 2), height: (heighImage / 2) }}
      />
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
