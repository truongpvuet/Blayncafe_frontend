import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Body } from 'native-base';
// import { connect } from 'react-redux';
import HomeLogin from '../Components/HomeLogin';
import Header from '../Components/Header';

// Set timer graph
import AnimatedTimer from '../Components/AnimatedTimer';

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
      value: 70
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

        <Body
          style={{
            flex: 14,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{ height: 280 }}>
            <AnimatedTimer value={this.state.value} size={280} strokewidth={40} >
              <View style={{ width: '100%', height: '100%' }}>
                <Text
                  style={{ color: 'white', fontSize: 20, width: '100%', textAlign: 'center' }}
                >
                  SEAT
                </Text>
                <View
                  style={{
                    width: 40,
                    height: 1,
                    backgroundColor: 'white',
                    marginTop: 3,
                    alignSelf: 'center'
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 50,
                    fontWeight: '300',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  68%
                </Text>
              </View>
            </AnimatedTimer>
          </View>
        </Body>

        <HomeLogin
          onOpenSignIn={() => this.OpenSignIn()}
          onOpenSignUp={() => this.OpenSignUp()}
        />
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
