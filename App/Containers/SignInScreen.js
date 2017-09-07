import React, { Component } from 'react';
import { Image } from 'react-native';
import SignIn from '../Components/SignIn';
import HeaderSign from '../Components/HeaderSign';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
import LoginActions from '../Redux/LoginRedux'

// Styles
// import styles from './Styles/SignInScreenStyle';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Styles

class SignInScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => navigate('HomeScreen')} />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Images.tabHome : Images.untabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      ),
      tabBarVisible: false
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SignIn
        onClose={() => navigate('HomeScreen')}
        verifyEmail={() => navigate('EmailVerifyScreen')}
        doLogin={this.props.doLogin}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }

export default connect(mapStateToProps, {
  doLogin: LoginActions.loginRequest,
})(SignInScreen)
