import React, { Component } from 'react';
import { Image } from 'react-native';
import SignUp from '../Components/SignUp';
import HeaderSign from '../Components/HeaderSign';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/SignUpScreenStyle';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Styles

export default class SignUpScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { goBack } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => goBack()} />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={Images.tabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      ),
      tabBarVisible: false
    };
  }
  constructor(props) {
    super(props);
    this.gotoTOS = this.gotoTOS.bind(this);
    this.gotoPrivacyPolicy = this.gotoPrivacyPolicy.bind(this);
    this.gotoProfilePolicy = this.gotoProfilePolicy.bind(this);
  }

  gotoTOS() {
    const { navigate } = this.props.navigation;
    navigate('TosScreen');
  }
  gotoPrivacyPolicy() {
    const { navigate } = this.props.navigation;
    navigate('PrivacyPolicyScreen');
  }
  gotoProfilePolicy() {
    const { navigate } = this.props.navigation;
    navigate('ProfilePolicyScreen');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SignUp
        gotoSignupProfile={() => navigate('SignupProfileScreen')}
        gotoTOS={() => this.gotoTOS()}
        gotoPrivacyPolicy={() => this.gotoPrivacyPolicy()}
        gotoProfilePolicy={() => this.gotoProfilePolicy()}
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
// export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
