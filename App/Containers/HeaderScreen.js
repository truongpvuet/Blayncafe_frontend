import React, { Component } from 'react';
import { } from 'react-native';
// import { connect } from 'react-redux';
import Header from '../Components/Header';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/HeaderScreenStyle';

export default class HeaderScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <Header onOpen={this.props.onOpen} />
    );
  }
}

// const mapStateToProps = () => {
//   return {
//   };
// };
//
// const mapDispatchToProps = () => {
//   return {
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(HeaderScreen);
