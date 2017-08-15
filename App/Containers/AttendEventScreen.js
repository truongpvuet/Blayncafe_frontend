import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content } from 'native-base';
import AttendEventHeader from '../Components/AttendEventHeader';
import AttendTabHeader from '../Components/AttendTabHeader';
import WillAttendScreen from '../Containers/WillAttendScreen';
import DidAttendScreen from '../Containers/DidAttendScreen';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/AttendEventScreenStyle';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;

export default class AttendEventScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <AttendEventHeader
          gobackMenu={() => { navigate('HomeScreen'); navigate('DrawerOpen'); }}
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
      onFocus: true
    };
    this.focusDidEvent = this.focusDidEvent.bind(this);
    this.focusWillEvent = this.focusWillEvent.bind(this);
    this.gotoEventListScreen = this.gotoEventListScreen.bind(this);
  }
  focusWillEvent() {
    this.setState({
      onFocus: true
    });
  }
  focusDidEvent() {
    this.setState({
      onFocus: false
    });
  }
  gotoEventListScreen() {
    const { navigate } = this.props.navigation;
    navigate('EventScreen');
    navigate('EventDetailScreen');
  }

  render() {
    const MainAttend = this.state.onFocus
      ? <WillAttendScreen gotoEventDetail={() => this.gotoEventListScreen()} />
      : <DidAttendScreen />;
    return (
      <Container style={styles.container} >
        <AttendTabHeader
          focusWillEvent={this.focusWillEvent}
          focusDidEvent={this.focusDidEvent}
          onfocusProps={this.state.onFocus}
        />
        <Content>
          {MainAttend}
        </Content>

      </Container>
    );
  }
}

// <View>
//   <TouchableOpacity
//     onPress={() => this.gotoEventListScreen()}
//   >
//     <Text> Go to EventScreen </Text>
//   </TouchableOpacity>
// </View>

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
// export default connect(mapStateToProps, mapDispatchToProps)(PersonalEventScreen)
