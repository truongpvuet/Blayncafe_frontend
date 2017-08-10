import React, { Component } from 'react';
import { View } from 'react-native';
import SignInScreen from '../Containers/SignInScreen';
// import SignUpScreen from '../Containers/SignUpScreen';
import HeaderSign from '../Components/HeaderSign';
import { StackAuthentication } from '../Navigation/StackAuthentication';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/AuthenticationScreenStyle';

export default class AuthenticationScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => goBack()} />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarVisible: false
    };
  }

  render() {
    return (
      <StackAuthentication />
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
// export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationScreen);
