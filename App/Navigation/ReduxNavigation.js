import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Stack, Drawer, Tabs, Lightbox, Actions, Reducer } from 'react-native-router-flux'
import { Image, TouchableOpacity, View, Text } from 'react-native'
// import MainStack from './MainStack'
import HomeScreen from '../Containers/HomeScreen'
import ListEventScreen from '../Containers/EventScreen'
import ListSponsorScreen from '../Containers/CompanyScreen'
import AboutScreen from '../Containers/AboutUsScreen'

import MenuScreen from '../Containers/MenuScreen'

import LoginScreen from '../Containers/SignInScreen'
import SignupScreen from '../Containers/SignUpScreen'
import SignupSuccessScreen from '../Components/SignupSuccess'
import ProfilePolicyScreen from '../Containers/ProfilePolicyScreen'

import EventDetail from '../Containers/EventDetailScreen'

import ProfileScreen from '../Containers/PersonalInfoScreen'
import AttendedEventScreen from '../Containers/AttendEventScreen'
import CoffeeHistoryScreen from '../Containers/CoffeeHistoryScreen'
import PolicyScreen from '../Containers/PrivacyPolicyScreen'
import TosScreen from '../Containers/TosScreen'
import EmailVerifyScreen from '../Containers/EmailVerifyScreen'
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
    component: LoginScreen
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
    component: EmailVerifyScreen
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
        <Stack
          hideNavBar
        >
          <Lightbox>
            <Stack
              key='root'
            >
              <Stack
                hideNavBar
                key='drawer'
                renderRightButton={() =>
                  <TouchableOpacity onPress={() => Actions.menu()}>
                    <Image style={Styles.drawerIconStyle} source={Images.hamburgerIcon} />
                  </TouchableOpacity>
                }
                renderTitle={
                  () => (<ReduxTitleImage isMain />)
                }
                navigationBarStyle={Styles.header}
              >
                <Stack hideNavBar>
                  <Stack>
                    <Tabs
                      key='tabbar'
                      showLabel={false}
                      swipeEnabled
                      activeBackgroundColor='white'
                      headerMode='none'
                      inactiveBackgroundColor='white'
                      inactiveTintColor='red'
                    >
                      <Scene key='home' component={HomeScreen} icon={({focused}) =>
                        <Image
                          source={focused ? Images.tabHome : Images.untabHome}
                          style={Styles.tabIcon}
                        />
                      } />
                      <Scene
                        key='event'
                        component={ListEventScreen}
                        icon={({focused}) =>
                          <Image
                            source={focused ? Images.tabEvent : Images.untabEvent}
                            style={Styles.tabIcon}
                          />
                        }
                      />
                      <Scene key='sponsor' component={ListSponsorScreen} icon={({focused}) =>
                        <Image
                          source={focused ? Images.tabCompany : Images.untabCompany}
                          style={Styles.tabIcon}
                        />
                      } />
                      <Scene key='about' component={AboutScreen} icon={({focused}) =>
                        <Image
                          source={focused ? Images.tabAboutus : Images.untabAboutus}
                          style={Styles.tabIcon}
                        />
                      } />
                    </Tabs>
                  </Stack>
                  <Stack
                    key='eventDetail'
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
                  >
                    <Scene component={EventDetail} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Lightbox>
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
                  <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
                </TouchableOpacity>
              }
            >
              <Scene component={route.component} />
            </Stack>
          )}
        </Stack>
      </Router>
    )
  }
}

const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation)
