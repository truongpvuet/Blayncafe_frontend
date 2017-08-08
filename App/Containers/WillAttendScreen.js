import React, { Component } from 'react';
import { } from 'react-native';
import WillAttend from '../Components/WillAttend';
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/WillAttendScreenStyle';

export default class WillAttendScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <WillAttend />
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
// export default connect(mapStateToProps, mapDispatchToProps)(WillAttend)
