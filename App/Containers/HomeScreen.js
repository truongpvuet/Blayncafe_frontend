import React, { Component } from 'react';
import { Image } from 'react-native';
// import { connect } from 'react-redux';
import Home from '../Components/Home';
import Header from '../Components/Header';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Styles
// import styles from './Styles/HomeScreenStyle';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <Header
          onOpen={() => navigate('DrawerOpen')}
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
      <Home
        onOpenSignIn={() => navigate('SignInScreen')}
        onOpenSignUp={() => navigate('SignUpScreen')}
      />
    );
  }
}

// const mapStateToProps = () => ({
// });
//
// const mapDispatchToProps = () => ({
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
