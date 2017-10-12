import React, { Component } from 'react'
import { Container, Content, List } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { View, Text, TouchableOpacity, RefreshControl, ScrollView } from 'react-native'
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
      eventList: [],
      refreshing: false,
    }
    this.handleFocusEvent = this.handleFocusEvent.bind(this)
    this.handleFocusCalendar = this.handleFocusCalendar.bind(this)
    this.GotoEventDetail = this.GotoEventDetail.bind(this)
  }
  componentWillMount () {
    // console.log('ios suck')
    if (!this.props.eventList || !this.props.eventList.events) {
      this.props.listEventsRequest()
    }
    if (!this.props.attendedEvents) {
      this.props.listAttendedEventRequest()
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.currentScreen === 'event' && nextProps.currentScreen !== this.props.currentScreen) {
      if (!this.props.eventList || !this.props.eventList.events) {
        this.props.listEventsRequest()
      }
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
    const attendedEvents = this.props.attendedEvents || []
    const isJoined = attendedEvents.filter(event => event.id === eventItem.id).length
    this.props.setEventDetail(eventItem, isJoined > 0)
    Actions.eventDetail()
  }

  fetchData() {
      fetch('http://localhost/Webservice/service.php')
      .then()
      .then()
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  render () {
    const now = moment()
    const dateSegments = segmentDatesOfMonth(now.month() + 1, now.year()) // month in moment js return in range 0 -> 11

    const eventImg = this.state.onFocus ? Images.listEventLight : Images.listEventDark
    const calendarImg = !this.state.onFocus ? Images.listCalendarLight : Images.listCalendarDark

    const todayEvents = this.props.eventList
      ? this.props.eventList.events.filter(event => {
        const eventDate = moment(event.date)
        return eventDate.date() === now.date()
      })
      : []
    const upCommingEvents = this.props.eventList
    ? this.props.eventList.events.filter(event => {
      const eventDate = moment(`${event.date} ${event.startingTime}`)
      const checkStatus = event.status === 'approved'
      return eventDate.isAfter(now) ? checkStatus : false
    })
    : []

    const eventList = (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.fetchData}
          />
        }
      >
        <List>
          {upCommingEvents.map((eventItem, idx) =>
            <View
              style={styles.eventItem}
              key={idx}
            >
              <EventList
                newIcon
                isInEventScreen
                eventStatus={eventItem.status}
                imgSrc={eventItem.images}
                datetime={eventItem.date}
                startTime={eventItem.startingTime}
                endTime={eventItem.endTime}
                title={eventItem.eventTitle}
                status={eventItem.status}
                notes={eventItem.description.substring(0, 19)}
                gotoEventDetail={() => this.GotoEventDetail(eventItem)}
              />
            </View>
          )}
        </List>
      </ScrollView>
    )
    const calendar = (
      <View style={styles.calendarComponent}>
        <Text style={styles.date}>{now.month() + 1}月</Text>
        <View style={styles.mainCalendar}>
          {dateSegments.map((dateSegment, idx) => (
            <View key={dateSegment[0].date()}>
              <View
                style={idx !== dateSegments.length - 1
                  ? styles.calendarWeekComponent
                  : styles.calendarWeekComponentEnd}
              >
                {dateSegment.map(dayObj => {
                  const eventInDate = this.props.eventList
                  ? this.props.eventList.events.filter(event => {
                    const eventDate = moment(event.date)
                    return eventDate.date() === dayObj.date() &&
                      eventDate.month() === dayObj.month() &&
                      eventDate.year() === dayObj.year()
                  })
                  : []
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
            </View>
          ))}
        </View>
        {todayEvents.map(event => {
          const eventStart = moment(event.startingTime, 'h:m:s').format('hh:mm')
          const eventEnd = moment(event.endTime, 'h:m:s').format('hh:mm')
          return (
            <TouchableOpacity
              key={event.id}
              style={styles.calendarEventItem}
              onPress={() => this.GotoEventDetail(event)}
            >
              <Text
                style={styles.calendarEventItemText}
                numberOfLines={1}
              >
                {`${eventStart} ~ ${eventEnd} ${event.eventTitle}`}
              </Text>
            </TouchableOpacity>
          )
        })}
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
    eventList: state.event.payload,
    currentScreen: state.routes.scene,
    attendedEvents: state.event.attended
  }
}

export default connect(mapStateToProps, {
  listEventsRequest: Creators.listEventsRequest,
  listAttendedEventRequest: Creators.listAttendedEventRequest,
  setEventDetail: SetEventDetailActions.setEventDetail
})(EventScreen)
