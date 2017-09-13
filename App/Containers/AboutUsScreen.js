import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import AboutUs from '../Components/AboutUs'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AboutUsScreenStyle'

export default class AboutUsScreen extends Component {
  GotoMapView () {
    Actions.map()
  }

  render () {
    return (
      <View style={styles.container}>
        <AboutUs gotoMapView={() => this.GotoMapView()} />
      </View>
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
// export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
