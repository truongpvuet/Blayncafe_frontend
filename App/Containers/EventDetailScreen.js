import React, { Component } from 'react';
import { Image } from 'react-native';
import EventDetail from '../Components/EventDetail';
import EventDetailHeader from '../Components/EventDetailHeader';
import tabEvent from '../Images/tabEvent.png';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

const heighImage = 41;
const widthImage = 44;
// Styles
// import styles from './Styles/EventDetailScreenStyle';

export default class EventDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <EventDetailHeader
          onOpen={() => navigate('DrawerOpen')}
          goBack={() => navigation.goBack()}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={tabEvent}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  }

  render() {
    return (
      <EventDetail />
    );
  }
}
//
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
// export default connect(mapStateToProps, mapDispatchToProps)(EventDetailScreen)
