import React, { Component } from 'react'
import { View } from 'react-native'
import AboutUs from '../Components/AboutUs'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutUsScreenStyle'

export default class AboutUsScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     header: (
  //       <AboutUsHeader onOpen={() => navigate('DrawerOpen')} />
  //     ),
  //     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //     tabBarIcon: ({ focused }) => (
  //       <Image
  //         source={focused ? Images.tabAboutus : Images.untabAboutus}
  //         style={{ width: (widthImage / 2), height: (heighImage / 2) }}
  //       />
  //     )
  //   };
  // }
  constructor (props) {
    super(props)
    this.OpenDrawer = this.OpenDrawer.bind(this)
  }

  OpenDrawer () {
    const { navigate } = this.props.navigation
    navigate('DrawerOpen')
  }
  GotoMapView () {
    const { navigate } = this.props.navigation
    navigate('MapBlayncafe')
  }

  render () {
    return (
      <View style={styles.container}>
        <AboutUs gotoMapView={() => this.GotoMapView()} />
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
