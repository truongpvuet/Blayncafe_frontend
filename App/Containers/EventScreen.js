import React, { Component } from 'react';
import { Container, Content, List,
  ListItem
} from 'native-base';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Image } from 'react-native';
import Event from '../Components/Event';
import EventHeader from '../Components/EventHeader';
import tabEvent from '../Images/tabEvent.png';
// Styles
import styles from './Styles/EventScreenStyle';

const heighImage = 41;
const widthImage = 44;

export default class EventScreen extends Component {
  static navigationOptions = () => {
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
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container} >
        <EventHeader onOpen={() => navigate('DrawerOpen')} />
        <Content>
          <List>
            {this.state.eventList && this.state.eventList.map((eventItem, idx) =>
              <ListItem key={idx}>
                <Event
                  imgSrc={eventItem.imgSrc}
                  datetime={eventItem.datetime}
                  description={eventItem.description}
                  notes={eventItem.notes}
                />
              </ListItem>
            )}
          </List>
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
