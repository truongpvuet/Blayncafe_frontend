import React, { Component } from 'react';
import { } from 'react-native';
import SignIn from '../Components/SignIn';
import HeaderSign from '../Components/HeaderSign';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/SignInScreenStyle';

export default class SignInScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => navigate('HomeScreen')} />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarVisible: false
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SignIn
        onClose={() => navigate('HomeScreen')}
        verifyEmail={() => navigate('EmailVerifyScreen')}
      />
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
// export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen)
