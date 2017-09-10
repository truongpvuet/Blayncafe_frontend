import React from 'react'
import { connect } from 'react-redux'
import { Router, Scene, Stack, Modal, Drawer, Tabs, Lightbox } from 'react-native-router-flux'
import { Image } from 'react-native'
// import MainStack from './MainStack'
import HomeScreen from '../Containers/HomeScreen'
import ListEventScreen from '../Containers/EventScreen'
import ListSponsorScreen from '../Containers/CompanyScreen'
import AboutScreen from '../Containers/AboutUsScreen'
import Header from '../Components/Header'
import MenuScreen from '../Containers/MenuScreen'
import { Images, View } from '../Themes'
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
      <Stack key='root'>
        <Lightbox>
          <Stack
            hideNavBar
            key='root'
            titleStyle={{ alignSelf: 'center' }}
            renderTitle={
              () => (<Header />)
            }
            navigationBarStyle={{ backgroundColor: 'rgb(20, 18, 18)' }}
          >
            <Drawer
              hideNavBar
              key='drawer'
              contentComponent={MenuScreen}
              drawerIcon={
                () =>
                  <View>
                    <Image style={{width: 50, height: 50, backgroundColor: 'white'}} source={Images.hamburgerIcon} />
                  </View>
              }
              drawerPosition='right'
            >
              <Scene>
                <Tabs
                  key='tabbar'
                  showLabel={false}
                  swipeEnabled
                  activeBackgroundColor='white'
                  headerMode='none'
                  inactiveBackgroundColor='rgba(255, 100, 0, 0.5)'
                  transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
                >
                  <Scene key='home' component={HomeScreen} />
                  <Scene key='event' component={ListEventScreen} />
                  <Scene key='sponsor' component={ListSponsorScreen} />
                  <Scene key='about' component={AboutScreen} />
                </Tabs>
              </Scene>
            </Drawer>
          </Stack>
        </Lightbox>
      </Stack>
    </Modal>
  </Router>

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
