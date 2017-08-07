import React, { Component } from 'react';
import { Image } from 'react-native';
import TermOfUse from '../Components/TermOfUse';
import TosHeader from '../Components/TosHeader';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
// import styles from './Styles/TosScreenStyle';

export default class TosScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <TosHeader
          gobackMenu={() => { navigate('HomeScreen'); navigate('DrawerOpen'); }}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={Images.tabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  };

  render() {
    return (
      <TermOfUse />
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
