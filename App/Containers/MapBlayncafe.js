import React, { Component } from 'react';
import { Image } from 'react-native';
import Map from '../Components/Map';
import HeaderSign from '../Components/HeaderSign';
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes';

const heighImage = 57;
const widthImage = 48;
// Styles
// import styles from './Styles/MapBlayncafeStyle'

export default class MapBlayncafe extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => navigate('AboutUsScreen')} />
      ),
      // onClose={() => navigate('HomeScreen')}
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Images.tabAboutus : Images.untabAboutus}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      ),
      tabBarVisible: false
    };
  }

  render() {
    return (
      <Map />
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(MapBlayncafe)
