import React, { Component } from 'react';
import { } from 'react-native';
// import { connect } from 'react-redux';
import EmailVerify from '../Components/EmailVerify';
import HeaderSign from '../Components/HeaderSign';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/EmailVerifyScreenStyle';

export default class EmailVerifyScreen extends Component {
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
    return (
      <EmailVerify
        gotoVerifyMess={() => this.props.navigation.navigate('VerifyMessage')}
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
// export default connect(mapStateToProps, mapDispatchToProps)(EmailVerifyScreen)
