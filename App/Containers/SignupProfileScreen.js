import React, { Component } from 'react'
import SignupProfile from '../Components/SignupProfile'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/SignUpScreenStyle';
// Styles

export default class SignUpPrifileScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { goBack } = navigation;
  //   return {
  //     header: (
  //       <SignupProfileHeader goBack={() => goBack()} />
  //     ),
  //     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //     tabBarIcon: ({ focused }) => (
  //       <Image
  //         source={focused ? Images.tabHome : Images.untabHome}
  //         style={{ width: (widthImage / 2), height: (heighImage / 2) }}
  //       />
  //     ),
  //     tabBarVisible: false
  //   };
  // }

  render () {
    const { goBack } = this.props.navigation
    const { navigate } = this.props.navigation
    return (
      <SignupProfile
        goBack={() => goBack()}
        goSuccessMessage={() => navigate('SignupSuccess')}
      />
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
// export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
