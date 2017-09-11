import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Stack, Modal, Drawer, Tabs, Lightbox, Actions } from 'react-native-router-flux'
import { Image, TouchableOpacity } from 'react-native'
// import MainStack from './MainStack'
import HomeScreen from '../Containers/HomeScreen'
import ListEventScreen from '../Containers/EventScreen'
import ListSponsorScreen from '../Containers/CompanyScreen'
import AboutScreen from '../Containers/AboutUsScreen'
import MenuScreen from '../Containers/MenuScreen'
import LoginScreen from '../Containers/SignInScreen'
import SignupScreen from '../Containers/SignUpScreen'
import { Images } from '../Themes'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import Styles from './Styles/NavigationStyles'

// here is our redux-aware our smart component
// function ReduxNavigation (props) {
//   const { dispatch, nav } = props
//   const navigation = ReactNavigation.addNavigationHelpers({
//     dispatch,
//     state: nav
//   })

//   return <AppNavigation navigation={navigation} />
// }

// const mapStateToProps = state => ({ nav: state.nav })
// export default connect(mapStateToProps)(ReduxNavigation)
const ReduxNavigation = (props) =>
  <Router>
    <Modal
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
            <Scene>
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
                <Scene key='event' component={ListEventScreen} icon={({focused}) =>
                  <Image
                    source={focused ? Images.tabEvent : Images.untabEvent}
                    style={Styles.tabIcon}
                  />
                } />
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
            </Scene>
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
    </Modal>
  </Router>

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
