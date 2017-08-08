import React, { Component } from 'react';
import { } from 'react-native';
import DidAttend from '../Components/DidAttend';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/DidAttendScreenStyle';

export default class DidAttendScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <DidAttend />
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
// export default connect(mapStateToProps, mapDispatchToProps)(DidAttendScreen)
