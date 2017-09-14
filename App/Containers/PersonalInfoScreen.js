import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PersonalContent from '../Components/PersonalContent'

// Add Actions - replace 'Your' with whatever your reducer is called :)
import UserProfileActions from '../Redux/UserProfileRedux'

// Styles
// import styles from './Styles/PersonalInfoScreenStyle';

class PersonalInfoScreen extends Component {
  render () {
    return (
      <ScrollView>
        <PersonalContent
          profile={this.props.studentInfo}
          onSubmitInfo={this.props.submitInfo}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    studentInfo: state.profile.payload
  }
}

export default connect(mapStateToProps, {
  submitInfo: UserProfileActions.submitInfoRequest,
  getInfo: UserProfileActions.userProfileRequest
})(PersonalInfoScreen)
