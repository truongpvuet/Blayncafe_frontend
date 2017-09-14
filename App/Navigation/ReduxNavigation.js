import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Stack, Drawer, Tabs, Lightbox, Actions } from 'react-native-router-flux'
import { Image, TouchableOpacity } from 'react-native'
// import MainStack from './MainStack'
import HomeScreen from '../Containers/HomeScreen'
import ListEventScreen from '../Containers/EventScreen'
import ListSponsorScreen from '../Containers/CompanyScreen'
import AboutScreen from '../Containers/AboutUsScreen'

import MenuScreen from '../Containers/MenuScreen'

import LoginScreen from '../Containers/SignInScreen'
import SignupScreen from '../Containers/SignUpScreen'

import EventDetail from '../Containers/EventDetailScreen'

import ProfileScreen from '../Containers/PersonalInfoScreen'
import AttendedEventScreen from '../Containers/AttendEventScreen'
import CoffeeHistoryScreen from '../Containers/CoffeeHistoryScreen'
import PolicyScreen from '../Containers/PrivacyPolicyScreen'
import TosScreen from '../Containers/TosScreen'
import MapBlayncafe from '../Containers/MapBlayncafe'

import ListEventActions from '../Redux/ListEventsRedux'
import { Images } from '../Themes'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import Styles from './Styles/NavigationStyles'

const ReduxNavigation = (props) =>
  <Router>
    <Stack
      hideNavBar
    >
      <Lightbox>
        <Stack
          key='root'
        >
          <Drawer
            hideNavBar
            key='drawer'
            contentComponent={MenuScreen}
            drawerPosition='right'
            renderRightButton={() =>
              <TouchableOpacity onPress={() => Actions.drawerOpen()}>
                <Image style={Styles.drawerIconStyle} source={Images.hamburgerIcon} />
              </TouchableOpacity>
            }
            renderTitle={
              () => (<Image style={Styles.titleImage} source={Images.TitleCafe} />)
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
                  transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
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
                  <Image style={Styles.titleImage} source={Images.TitleCafe} />
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
          </Drawer>
        </Stack>
      </Lightbox>
      <Stack
        key='login'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonClose} />
          </TouchableOpacity>
        }
        back
      >
        <Scene component={LoginScreen} />
      </Stack>
      <Stack
        key='signup'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonClose} />
          </TouchableOpacity>
        }
      >
        <Scene component={SignupScreen} />
      </Stack>
      <Stack
        key='profile'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
          </TouchableOpacity>
        }
      >
        <Scene component={ProfileScreen} />
      </Stack>
      <Stack
        key='attendedEvent'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
          </TouchableOpacity>
        }
      >
        <Scene component={AttendedEventScreen} />
      </Stack>
      <Stack
        key='coffeeHistory'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
          </TouchableOpacity>
        }
      >
        <Scene component={CoffeeHistoryScreen} />
      </Stack>
      <Stack
        key='policy'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
          </TouchableOpacity>
        }
      >
        <Scene component={PolicyScreen} />
      </Stack>
      <Stack
        key='tos'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
          </TouchableOpacity>
        }
      >
        <Scene component={TosScreen} />
      </Stack>
      <Stack
        key='map'
        navigationBarStyle={Styles.header}
        renderTitle={() =>
          <Image style={Styles.titleImage} source={Images.TitleCafe} />
        }
        renderLeftButton={() =>
          <TouchableOpacity
            onPressIn={() => Actions.pop()}
          >
            <Image style={Styles.drawerIconStyle} source={Images.buttonBack} />
          </TouchableOpacity>
        }
      >
        <Scene component={MapBlayncafe} />
      </Stack>
    </Stack>
  </Router>

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps, {
  listEventsRequest: ListEventActions.listEventsRequest
})(ReduxNavigation)
