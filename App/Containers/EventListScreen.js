import React, { Component } from 'react';
import { List, ListItem } from 'native-base';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import EventList from '../Components/EventList';

// Styles
// import styles from './Styles/EventListScreenStyle';
// import { Images } from '../Themes';

export default class EventListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [{
        imgSrc: 'http://www.nisci.gov.vn/wp-content/uploads/2017/04/download.png',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }, {
        imgSrc: 'http://www.nisci.gov.vn/wp-content/uploads/2017/04/download.png',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }, {
        imgSrc: 'http://www.nisci.gov.vn/wp-content/uploads/2017/04/download.png',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }, {
        imgSrc: 'http://www.nisci.gov.vn/wp-content/uploads/2017/04/download.png',
        datetime: '2017/06/24(±) 10:00 〜 12:30',
        description: '【参加無料】「起業したい」から「起業する」〜起業を成功させる3つの本質を学ぶ無料セミナー',
        notes: '【参加無料】「起業したい」から「起業'
      }]
    };
  }

  render() {
    return (
      <List>
        {this.state.eventList && this.state.eventList.map((eventItem, idx) =>
          <ListItem key={idx}>
            <EventList
              imgSrc={eventItem.imgSrc}
              datetime={eventItem.datetime}
              description={eventItem.description}
              notes={eventItem.notes}
            />
          </ListItem>
        )}
      </List>
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
