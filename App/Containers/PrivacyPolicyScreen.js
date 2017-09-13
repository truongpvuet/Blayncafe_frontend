import React, { Component } from 'react'
import PrivacyPolicy from '../Components/PrivacyPolicy'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
// import styles from './Styles/TosScreenStyle';

export default class PrivacyPolicyScreen extends Component {
  render () {
    return (
      <PrivacyPolicy />
    )
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
// export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicyScreen);
