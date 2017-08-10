import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignUp from '../Components/SignUp';
import HeaderSign from '../Components/HeaderSign';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/SignUpScreenStyle';

export default class SignUpScreen extends Component {
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
      <SignUp />
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
// export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
