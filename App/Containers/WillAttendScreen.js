import React, { Component } from 'react'
import { } from 'react-native'
import { Container, Content, List, ListItem } from 'native-base'
import EventList from '../Components/EventList'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/WillAttendScreenStyle';

export default class WillAttendScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onFocus: true
    }
  }

  render () {
    return (
      <Container>
        <Content>
          <List>
            {this.props.eventList && this.props.eventList.map((eventItem, idx) =>
              <ListItem key={idx}>
                <EventList
                  newIcon
                  isInEventScreen={false}
                  eventStatus={eventItem.status}
                  imgSrc={eventItem.images}
                  datetime={eventItem.date}
                  startTime={eventItem.startingTime}
                  endTime={eventItem.endTime}
                  title={eventItem.eventTitle}
                  notes={eventItem.description.substring(0, 19)}
                  gotoEventDetail={() => this.props.gotoEventDetail(eventItem)}
                />
              </ListItem>
            )}
          </List>
        </Content>
      </Container>
    )
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
