import React, { Component } from 'react';
import { Image } from 'react-native';
// import { connect } from 'react-redux';
import PersonalInfo from '../Components/PersonalInfo';
import PersonalInfoHeader from '../Components/PersonalInfoHeader';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/PersonalInfoScreenStyle';

export default class PersonalInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <PersonalInfoHeader
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
    const { navigate } = this.props.navigation;
    return (
      <PersonalInfo
        gobackMenu={() => { navigate('HomeScreen'); navigate('DrawerOpen'); }}
      />
    );
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
// export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoScreen);
