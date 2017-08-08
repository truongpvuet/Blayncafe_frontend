import React, { Component } from 'react';
import { View, Image } from 'react-native';
import AboutUs from '../Components/AboutUs';
import AboutUsHeader from '../Components/AboutUsHeader';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutUsScreenStyle';

import tabAboutus from '../Images/tabAboutus.png';

const heighImage = 57;
const widthImage = 48;

export default class AboutUsScreen extends Component {
  static navigationOptions() {
    return {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={tabAboutus}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <AboutUsHeader
          onOpen={() => navigate('DrawerOpen')}
        />
        <AboutUs />
      </View>
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
// export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
