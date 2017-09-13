import React, { Component } from 'react'
import TermOfUse from '../Components/TermOfUse'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
// import styles from './Styles/TosScreenStyle';

export default class TosScreen extends Component {
  render () {
    return (
      <TermOfUse />
    )
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
// export default connect(mapStateToProps, mapDispatchToProps)(TosScreen)
