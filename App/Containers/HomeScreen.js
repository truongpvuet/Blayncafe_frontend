import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
// import { connect } from 'react-redux';
import Timer from '../Components/Timer';
import HomeLogin from '../Components/HomeLogin';
import Header from '../Components/Header';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes';
import styles from './Styles/HomeScreenStyle';

const heighImage = 44;
const widthImage = 51;
// Styles

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <Header
          onOpen={() => navigate('DrawerOpen')}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={Images.tabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      value: 87.5
    };
    this.OpenSignIn = this.OpenSignIn.bind(this);
    this.OpenSignUp = this.OpenSignUp.bind(this);
  }
  OpenSignIn() {
    const { navigate } = this.props.navigation;
    navigate('SignInScreen');
  }
  OpenSignUp() {
    const { navigate } = this.props.navigation;
    navigate('SignUpScreen');
  }

  render() {
    const { container, titleContent, titleText
    } = styles;
    return (
      <View style={container}>
        <View style={titleContent}>
          <Text style={titleText}> 18-00 【19卒】まだ間に合うインターン </Text>
        </View>

        <Timer />

        <HomeLogin
          onOpenSignIn={() => this.OpenSignIn()}
          onOpenSignUp={() => this.OpenSignUp()}
        />
      </View>
    );
  }
}

// const mapStateToProps = () => ({
// });
//
// const mapDispatchToProps = () => ({
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
