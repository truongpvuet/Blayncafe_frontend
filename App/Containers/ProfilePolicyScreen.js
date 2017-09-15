import React, { Component } from 'react';
import { Image } from 'react-native';
import ProfilePolicy from '../Components/ProfilePolicy';
import ProfilePolicyHeader from '../Components/ProfilePolicyHeader';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
// import styles from './Styles/TosScreenStyle';

export default class ProfilePolicyScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      header: (
        <ProfilePolicyHeader
          gobackSignup={() => { goBack(); }}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Images.tabHome : Images.untabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  };

  render() {
    return (
      <ProfilePolicy />
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
// export default connect(mapStateToProps, mapDispatchToProps)(TosScreen)
