import React, { Component } from 'react'
import { Container, Content, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { View, Text } from 'react-native'
import moment from 'moment'
import { Actions } from 'react-native-router-flux'
import EventList from '../Components/EventList'
import Calendar from '../Components/Calendar'
import EventTabHeader from '../Components/EventTabHeader'
import { segmentDatesOfMonth } from '../Lib/DatetimeHelper'
// Styles
import styles from './Styles/EventScreenStyle'
import { Images } from '../Themes'
import Creators from '../Redux/ListEventsRedux'
import SetEventDetailActions from '../Redux/EventDetailRedux'

// const randomColor = () => {
//   const num = Math.random() * 3
//   if (num < 1) {
//     return 'clear'
//   } else if (num > 1 && num < 2) {
//     return 'small'
//   }
//   return 'large'
// }
// return num < 1 ? 'clear' : num < 2 ? 'small' : 'large';

class EventScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onFocus: true,
      eventList: []
    }
    this.handleFocusEvent = this.handleFocusEvent.bind(this)
    this.handleFocusCalendar = this.handleFocusCalendar.bind(this)
    this.GotoEventDetail = this.GotoEventDetail.bind(this)
  }
  componentWillMount () {
    if (!this.props.eventList || !this.props.eventList.events) {
      this.props.listEventsRequest()
    }
  }
  handleFocusEvent () {
    this.setState({
      onFocus: true
    })
  }
  handleFocusCalendar () {
    this.setState({
      onFocus: false
    })
  }
  GotoEventDetail (eventItem) {
    const { joinedEvents } = this.props.eventList
    const isJoined = joinedEvents.filter(event => event.id === eventItem.id).length
    this.props.setEventDetail(eventItem, isJoined > 0)
    Actions.eventDetail()
  }

  render () {
    const now = moment()
    const dateSegments = segmentDatesOfMonth(now.month() + 1, now.year()) // month in moment js return in range 0 -> 11

    const eventImg = this.state.onFocus ? Images.listEventLight : Images.listEventDark
    const calendarImg = !this.state.onFocus ? Images.listCalendarLight : Images.listCalendarDark
    const eventList = (
      <List>
        {this.props.eventList && this.props.eventList.events.map((eventItem, idx) =>
          <ListItem key={idx}>
            <EventList
              imgSrc={eventItem.images}
              datetime={eventItem.date}
              title={eventItem.eventTitle}
              notes={eventItem.description.substring(0, 19)}
              gotoEventDetail={() => this.GotoEventDetail(eventItem)}
            />
          </ListItem>
        )}
      </List>
    )
    const calendar = (
      <View style={styles.calendarComponent}>
        <Text style={styles.date}>{now.month() + 1}月</Text>
        {dateSegments.map((dateSegment, idx) => (
          <View key={dateSegment[0].date()}>
            <View
              style={idx !== dateSegments.length - 1
                ? styles.calendarWeekComponent
                : styles.calendarWeekComponentEnd}
            >
              {dateSegment.map(dayObj => {
                const eventInDate = this.props.eventList &&
                  this.props.eventList.events.filter(event => {
                    const eventDate = moment(event.date)
                    return eventDate.date() === dayObj.date()
                  })
                let size = 'clear'
                if (eventInDate.length === 0) {
                  size = 'clear'
                } else if (eventInDate.length < 3) {
                  size = 'small'
                } else {
                  size = 'large'
                }
                return (
                  <Calendar
                    isFirstLine={idx === 0}
                    key={dayObj.date()}
                    dayOfWeek={dayObj.day()}
                    dateNum={dayObj.date()} size={size}
                    isToday={dayObj.date() === now.date()}
                  />
                )
              })}
            </View>
            <View style={styles.bottomLine} />
          </View>
        ))}
      </View>
    )
    const eventContent = this.state.onFocus ? eventList : calendar

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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    eventList: state.event.payload
  }
}

export default connect(mapStateToProps, {
  listEventsRequest: Creators.listEventsRequest,
  setEventDetail: SetEventDetailActions.setEventDetail
})(EventScreen)
