import React, { Component } from 'react';
import { } from 'react-native';
// import { connect } from 'react-redux';
import Menu from '../Components/Menu';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/MenuScreenStyle';

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.drawToHome = this.drawToHome.bind(this);
    this.gotoPersonalInfo = this.gotoPersonalInfo.bind(this);
    this.gotoAttendEvent = this.gotoAttendEvent.bind(this);
    this.gotoCoffeeShop = this.gotoCoffeeShop.bind(this);
    this.gotoPrivacyPolicy = this.gotoPrivacyPolicy.bind(this);
    this.gotoTOS = this.gotoTOS.bind(this);
  }

  drawToHome() {
    const { navigate } = this.props.navigation;
    navigate('DrawerClose');
  }
  gotoPersonalInfo() {
    const { navigate } = this.props.navigation;
    navigate('PersonalInfoScreen');
  }
  gotoAttendEvent() {
    const { navigate } = this.props.navigation;
    navigate('AttendEventScreen');
  }
  gotoCoffeeShop() {
    const { navigate } = this.props.navigation;
    navigate('CoffeeShopScreen');
  }
  gotoPrivacyPolicy() {
    const { navigate } = this.props.navigation;
    navigate('PrivacyPolicyScreen');
  }
  gotoTOS() {
    const { navigate } = this.props.navigation;
    navigate('TosScreen');
  }

  render() {
    return (
      <Menu
        onClose={() => this.drawToHome()}
        openPersonalInfo={() => this.gotoPersonalInfo()}
        openTOS={() => this.gotoTOS()}
        openPrivacyPolicy={() => this.gotoPrivacyPolicy()}
        gotoCoffeeShop={() => this.gotoCoffeeShop()}
        gotoAttendEvent={() => this.gotoAttendEvent()}
      />
    );
  }
}

// const mapStateToProps = () => {
//   return {
//
//   };
// };
//
// const mapDispatchToProps = () => {
//   return {
//
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
