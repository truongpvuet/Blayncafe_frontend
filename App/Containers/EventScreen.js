import React, { Component } from 'react';
import { Container, Content, List, ListItem } from 'native-base';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Image } from 'react-native';
import EventList from '../Components/EventList';
import Calendar from '../Components/Calendar';
import EventHeader from '../Components/EventHeader';
import EventTabHeader from '../Components/EventTabHeader';
import tabEvent from '../Images/tabEvent.png';
// Styles
import styles from './Styles/EventScreenStyle';
import { Images } from '../Themes';

const heighImage = 41;
const widthImage = 44;

export default class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <EventHeader
          onOpen={() => navigate('DrawerOpen')}
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

  constructor(props) {
    super(props);
    this.state = {
      onFocus: true,
      eventList: [{
        imgSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }, {
        imgSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }, {
        imgSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }, {
        imgSrc: 'https://www.w3schools.com/images/w3schools_green.jpg',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }]
    };
    this.handleFocusEvent = this.handleFocusEvent.bind(this);
    this.handleFocusCalendar = this.handleFocusCalendar.bind(this);
    this.GotoEventDetail = this.GotoEventDetail.bind(this);
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
  GotoEventDetail() {
    const { navigate } = this.props.navigation;
    navigate('EventDetailScreen');
  }

  render() {
    const eventImg = this.state.onFocus ? Images.listEventLight : Images.listEventDark;
    const calendarImg = !this.state.onFocus ? Images.listCalendarLight : Images.listCalendarDark;
    const eventList = (
      <List>
        {this.state.eventList && this.state.eventList.map((eventItem, idx) =>
          <ListItem key={idx}>
            <EventList
              imgSrc={eventItem.imgSrc}
              datetime={eventItem.datetime}
              description={eventItem.description}
              notes={eventItem.notes}
              gotoEventDetail={() => this.GotoEventDetail()}
            />
          </ListItem>
        )}
      </List>
    );
    const calendar = (
      <Calendar
        gotoEventDetail={() => this.GotoEventDetail()}
      />
    );
    const eventContent = this.state.onFocus ? eventList : calendar;

    return (
      <Container style={styles.container} >
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
