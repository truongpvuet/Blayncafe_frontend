import React, { Component } from 'react';
import { Container, Content } from 'native-base';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Image } from 'react-native';
import EventListScreen from '../Containers/EventListScreen';
import CalendarScreen from '../Containers/CalendarScreen';
import EventHeader from '../Components/EventHeader';
import EventTabHeader from '../Components/EventTabHeader';
import tabEvent from '../Images/tabEvent.png';
// Styles
import styles from './Styles/EventScreenStyle';
import { Images } from '../Themes';

const heighImage = 41;
const widthImage = 44;

export default class EventScreen extends Component {
  static navigationOptions() {
    return {
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={tabEvent}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      onFocus: true
    };
    this.handleFocusEvent = this.handleFocusEvent.bind(this);
    this.handleFocusCalendar = this.handleFocusCalendar.bind(this);
  }
  handleFocusEvent() {
    this.setState({
      onFocus: true
    });
  }
  handleFocusCalendar() {
    this.setState({
      onFocus: false
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const eventImg = this.state.onFocus ? Images.listEventLight : Images.listEventDark;
    const calendarImg = !this.state.onFocus ? Images.listCalendarLight : Images.listCalendarDark;
    const eventList = (
      <EventListScreen />
    );
    const calendar = (
      <CalendarScreen />
    );
    const eventContent = this.state.onFocus ? eventList : calendar;

    return (
      <Container style={styles.container} >
        <EventHeader onOpen={() => navigate('DrawerOpen')} />
        <EventTabHeader
          focusEvent={this.handleFocusEvent}
          focusCalendar={this.handleFocusCalendar}
          eventImg={eventImg}
          calendarImg={calendarImg}
        />
        <Content>
          {eventContent}
        </Content>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ListEvent);
