import React, { Component } from 'react';
import { } from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import WillAttend from '../Components/WillAttend';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/WillAttendScreenStyle';

export default class WillAttendScreen extends Component {
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
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.eventList && this.state.eventList.map((eventItem, idx) =>
              <ListItem key={idx}>
                <WillAttend
                  imgSrc={eventItem.imgSrc}
                  datetime={eventItem.datetime}
                  description={eventItem.description}
                  notes={eventItem.notes}
                  gotoEventDetail={this.props.gotoEventDetail}
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
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(WillAttendScreen)
