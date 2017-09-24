import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Stack, Tabs, Actions, Reducer, Modal, LightBox } from 'react-native-router-flux'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import { isLoggedIn } from '../Lib/authHelper'
// import MainStack from './MainStack'
import HomeScreen from '../Containers/HomeScreen'
import ListEventScreen from '../Containers/EventScreen'
import ListSponsorScreen from '../Containers/CompanyScreen'
import AboutScreen from '../Containers/AboutUsScreen'

import MenuScreen from '../Containers/MenuScreen'

import LoginScreen from '../Containers/SignInScreen'
import SignupScreen from '../Containers/SignUpScreen'
import SignupProfileScreen from '../Containers/SignupProfileScreen'
import SignupSuccessScreen from '../Components/SignupSuccess'
import ProfilePolicyScreen from '../Containers/ProfilePolicyScreen'
import PasswordRecoveryScreen from '../Containers/PasswordRecoveryScreen'
import PasswordRecoverySuccessScreen from '../Components/RecoverySuccess'

import EventDetail from '../Containers/EventDetailScreen'
import CompanyDetail from '../Containers/CompanyDetailScreen'
import ProfileScreen from '../Containers/PersonalInfoScreen'
import AttendedEventScreen from '../Containers/AttendEventScreen'
import CoffeeHistoryScreen from '../Containers/CoffeeHistoryScreen'
import PolicyScreen from '../Containers/PrivacyPolicyScreen'
import TosScreen from '../Containers/TosScreen'
import EmailVerifyScreen from '../Containers/EmailVerifyScreen'
import VerifyMessage from '../Components/VerifyMessage'
import MapBlayncafe from '../Containers/MapBlayncafe'

import { Images } from '../Themes'
import Styles from './Styles/NavigationStyles'

const tabImageHeaderSource = (tabName) => {
  if (tabName === 'home') {
    return Images.TitleCafe
  }
  if (tabName === 'event') {
    return Images.TitleEvent
  }
  if (tabName === 'sponsor') {
    return Images.TitleCompany
  }
  if (tabName === 'about') {
    return Images.TitleAboutUs
  }
}

const additionalRoutes = [
  {
    key: 'login',
    titleImage: Images.TitleCafe,
    component: LoginScreen,
    backButtonIcon: Images.buttonClose
  },
  {
    key: 'signup',
    titleImage: Images.TitleCafe,
    component: SignupScreen
  },
  {
    key: 'signupSucess',
    titleImage: Images.TitleCafe,
    component: SignupSuccessScreen
  },
  {
    key: 'signupProfileScreen',
    titleImage: Images.TitleCafe,
    component: SignupProfileScreen
  },
  {
    key: 'profile',
    titleImage: Images.profileIconBold,
    text: 'プロフィール',
    component: ProfileScreen
  },
  {
    key: 'profilePolicy',
    titleImage: Images.TitleCafe,
    component: ProfilePolicyScreen
  },
  {
    key: 'attendedEvent',
    titleImage: Images.iconPersonalEvent,
    text: '参加イベント',
    component: AttendedEventScreen
  },
  {
    key: 'coffeeHistory',
    titleImage: Images.iconShop,
    text: '来店ポイント',
    component: CoffeeHistoryScreen
  },
  {
    key: 'policy',
    titleImage: Images.TitleCafe,
    component: PolicyScreen
  },
  {
    key: 'tos',
    titleImage: Images.TitleCafe,
    component: TosScreen
  },
  {
    key: 'map',
    titleImage: Images.TitleCafe,
    component: MapBlayncafe
  },
  {
    key: 'menu',
    titleImage: Images.Title,
    component: MenuScreen
  },
  {
    key: 'verifyEmail',
    titleImage: Images.TitleCafe,
    component: EmailVerifyScreen,
    backButtonIcon: Images.buttonClose
  },
  {
    key: 'verifyMessage',
    titleImage: Images.TitleCafe,
    component: VerifyMessage,
    backButtonIcon: Images.buttonClose
  },
  {
    key: 'recoverPassword',
    titleImage: Images.TitleCafe,
    component: PasswordRecoveryScreen,
    backButtonIcon: Images.buttonClose
  },
  {
    key: 'recoveryPasswordSuccess',
    titleImage: Images.TitleCafe,
    component: PasswordRecoverySuccessScreen,
    backButtonIcon: Images.buttonClose
  }
]

const TitleImage = (props) => {
  let source = ''
  const onlyImages = props.isMain || !props.text
  if (props.titleImage) {
    source = props.titleImage
  } else {
    source = tabImageHeaderSource(props.r.scene)
  }
  return (
    <View style={Styles.profileName}>
      <Image
        style={onlyImages ? Styles.titleImage : Styles.subsceneTitle}
        source={source} />
      <Text style={Styles.subsceneTitleText}>{props.text}</Text>
    </View>
  )
}
const ReduxTitleImage = connect(state => ({ r: state.routes }), {})(TitleImage)

const DrawerButton = (props) => {
  const loggedIn = isLoggedIn(props.auth.accessToken)
  if (!loggedIn) {
    return <View />
  }
  return (
    <TouchableOpacity onPress={() => Actions.menu()}>
      <Image style={Styles.drawerIconStyle} source={Images.hamburgerIcon} >
        {props.cancelAlert > 0 &&
          <View
            style={{
              backgroundColor: 'red', width: 15, height: 15,
              borderRadius: 8, borderColor: 'red', marginRight: 8, marginTop: 8
            }}
          >
            <Text
              style={{ backgroundColor: 'transparent', fontWeight: 'bold', textAlign: 'center', fontSize: 10, color: 'white' }}
            >
              {props.cancelAlert}
            </Text>
          </View>
        }
      </Image>
    </TouchableOpacity>
  )
}
const ReduxDrawerButton = connect(state => {
  const attendedEvents = state.event.attended || []
  const canceledEvents = attendedEvents.filter(event => event.status === 'canceled')
  return {
    auth: state.auth,
    cancelAlert: canceledEvents.length
  }
}, {})(DrawerButton)

class ReduxNavigation extends React.Component {
  reducerCreate (params) {
    const defaultReducer = Reducer(params)
    return (state, action) => {
      this.props.dispatch(action)
      return defaultReducer(state, action)
    }
  }
  render () {
    return (
      <Router
        createReducer={this.reducerCreate.bind(this)}
      >
        <Modal
          hideNavBar
          transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}
        >
          <Tabs
            key='tabbar'
            showLabel={false}
            swipeEnabled={false}
            activeBackgroundColor='white'
            inactiveBackgroundColor='white'
            inactiveTintColor='red'
            tabBarPosition='bottom'
            tabBarStyle={Styles.tabBar}
            lazy
            renderRightButton={() =>
              <ReduxDrawerButton />
            }
            renderTitle={
              () => (<ReduxTitleImage isMain />)
            }
            renderLeftButton={() =>
              <View />
            }
            navigationBarStyle={Styles.header}
          >
            <Scene key='home' component={HomeScreen} icon={({focused}) =>
              <Image
                source={focused ? Images.tabHome : Images.untabHome}
                style={Styles.tabIcon}
              />
            } />
            <Scene
              key='event'
              icon={({focused}) =>
                <Image
                  source={focused ? Images.tabEvent : Images.untabEvent}
                  style={Styles.tabIcon}
                />
              }
              hideNavBar
              transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}
            >
              <Stack>
                <Scene
                  navigationBarStyle={Styles.header}
                  renderTitle={() =>
                    <ReduxTitleImage titleImage={Images.titleEvent} />
                  }
                  component={ListEventScreen}
                />
              </Stack>
              <Stack
                key='eventDetail'
              >
                <Scene
                  component={EventDetail}
                  navigationBarStyle={Styles.header}
                  renderTitle={() =>
                    <ReduxTitleImage titleImage={Images.titleEvent} />
                  }
                  renderLeftButton={() =>
                    <TouchableOpacity
                      onPressIn={() => Actions.pop()}
                    >
                      <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
                    </TouchableOpacity>
                  }
                />
              </Stack>
            </Scene>
            <Scene
              key='sponsor'
              icon={({focused}) =>
                <Image
                  source={focused ? Images.tabCompany : Images.untabCompany}
                  style={Styles.tabIcon}
                />
              }
              hideNavBar
              transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}
            >
              <Stack>
                <Scene
                  navigationBarStyle={Styles.header}
                  renderTitle={() =>
                    <ReduxTitleImage titleImage={Images.TitleCompany} />
                  }
                  component={ListSponsorScreen}
                />
              </Stack>
              <Stack
                key='companyDetail'
              >
                <Scene
                  component={CompanyDetail}
                  navigationBarStyle={Styles.header}
                  renderTitle={() =>
                    <ReduxTitleImage titleImage={Images.TitleCompany} />
                  }
                  renderLeftButton={() =>
                    <TouchableOpacity
                      onPressIn={() => Actions.pop()}
                    >
                      <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
                    </TouchableOpacity>
                  }
                />
              </Stack>
            </Scene>
            <Scene key='about' component={AboutScreen} icon={({focused}) =>
              <Image
                source={focused ? Images.tabAboutus : Images.untabAboutus}
                style={Styles.tabIcon}
              />
            } />
          </Tabs>
          {additionalRoutes.map(route =>
            <Stack
              key={route.key}
              navigationBarStyle={Styles.header}
              renderTitle={() =>
                <ReduxTitleImage titleImage={route.titleImage} text={route.text} />
              }
              renderLeftButton={() =>
                <TouchableOpacity
                  onPressIn={() => Actions.pop()}
                >
                  <Image style={Styles.drawerIconStyle} source={route.backButtonIcon || Images.buttonBack} />
                </TouchableOpacity>
              }
              renderRightButton={() =>
                <View />
              }
            >
              <Scene component={route.component} />
            </Stack>
          )}
        </Modal>
      </Router>
    )
  }
}

const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation)
