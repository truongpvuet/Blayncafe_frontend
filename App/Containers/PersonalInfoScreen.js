import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import PersonalContent from '../Components/PersonalContent';
import PersonalInfoHeader from '../Components/PersonalInfoHeader';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Add Actions - replace 'Your' with whatever your reducer is called :)
import Creators from '../Redux/UserProfileRedux'

// Styles
// import styles from './Styles/PersonalInfoScreenStyle';

class PersonalInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <PersonalInfoHeader
          gobackMenu={() => { navigate('HomeScreen'); navigate('DrawerOpen'); }}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Images.tabHome : Images.untabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  }
  constructor(props) {
    super(props);
    this.GobackMenu = this.GobackMenu.bind(this);
  }

  componentWillMount() {
    this.props.getUserProfile()
  }

  GobackMenu() {
    const { navigate } = this.props.navigation;
    navigate('HomeScreen');
    navigate('DrawerOpen');
  }

  render() {
    return (
      <ScrollView>
        <PersonalContent
          profile={this.props.studentInfo}
          gobackMenu={() => this.GobackMenu()}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentInfo: state.profile.payload
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, {
  getUserProfile: Creators.userProfileRequest
})(PersonalInfoScreen);
