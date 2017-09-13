import React, { Component } from 'react'
import Map from '../Components/Map'
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
// import styles from './Styles/MapBlayncafeStyle'

export default class MapBlayncafe extends Component {
  render () {
    return (
      <Map />
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
// export default connect(mapStateToProps, mapDispatchToProps)(MapBlayncafe)
