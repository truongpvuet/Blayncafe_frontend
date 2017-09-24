import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import LoginActions from '../Redux/LoginRedux'
import SignupProfile from '../Components/SignupProfile'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/SignUpScreenStyle';
// Styles

class SignUpPrifileScreen extends Component {
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
  constructor (props) {
    super(props)
    this.gotoSignupSuccess = this.gotoSignupSuccess.bind(this)
    this.gobackToRevision = this.gobackToRevision.bind(this)
  }

  gotoSignupSuccess () {
    Actions.push('signupSucess')
  }
  gobackToRevision () {
    Actions.pop()
  }

  render () {
    console.log(this.props.submitStudent && this.props.submitStudent.familyName)
    return (
      <SignupProfile
        submitStudent={this.props.submitStudent}
        images={this.props.image}
        signUpRequest={this.props.signUpRequest}
        gobackToRevision={this.gobackToRevision}
        gotoSignupSuccess={this.gotoSignupSuccess}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {
  signUpRequest: LoginActions.signUpRequest
})(SignUpPrifileScreen)

//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
