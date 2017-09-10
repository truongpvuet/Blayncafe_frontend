import React, { Component } from 'react'
import { Container, Content, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { View } from 'react-native'
import EventList from '../Components/EventList'
import Calendar from '../Components/Calendar'
import EventTabHeader from '../Components/EventTabHeader'
import { segmentDatesOfMonth } from '../Lib/DatetimeHelper'
// Styles
import styles from './Styles/EventScreenStyle'
import { Images } from '../Themes'
import Creators from '../Redux/ListEventsRedux'
import SetEventDetailActions from '../Redux/EventDetailRedux'

const month = 6
const year = 2017

const randomColor = () => {
  const num = Math.random() * 3
  if (num < 1) {
    return 'clear'
  } else if (num > 1 && num < 2) {
    return 'small'
  }
  return 'large'
}
// return num < 1 ? 'clear' : num < 2 ? 'small' : 'large';

class EventScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     header: (
  //       <EventHeader
  //         onOpen={() => navigate('DrawerOpen')}
  //       />
  //     ),
  //     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //     tabBarIcon: ({ focused }) => (
  //       <Image
  //         source={focused ? Images.tabEvent : Images.untabEvent}
  //         style={{ width: (widthImage / 2), height: (heighImage / 2) }}
  //       />
  //     )
  //   };
  // }
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
    // console.log(this.props.listEventsRequest)
    this.props.listEventsRequest()
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
    this.props.setEventDetail(eventItem)
    const { navigate } = this.props.navigation
    navigate('EventDetailScreen')
  }

  render () {
    const dateSegments = segmentDatesOfMonth(month, year)

    const eventImg = this.state.onFocus ? Images.listEventLight : Images.listEventDark
    const calendarImg = !this.state.onFocus ? Images.listCalendarLight : Images.listCalendarDark
    const eventList = (
      <List>
        {this.props.eventList && this.props.eventList.map((eventItem, idx) =>
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
        {dateSegments.map((dateSegment, idx) => (
          <View key={dateSegment[0].date()}>
            <View
              style={idx !== dateSegments.length - 1
                ? styles.calendarWeekComponent
                : styles.calendarWeekComponentEnd}
            >
              {dateSegment.map(dayObj =>
                <Calendar
                  isFirstLine={idx === 0}
                  key={dayObj.date()}
                  dayOfWeek={dayObj.day()}
                  dateNum={dayObj.date()} size={randomColor()}
                />
              )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    listEventsRequest: Creators.listEventsRequest
  }
}

export default connect(mapStateToProps, {
  listEventsRequest: Creators.listEventsRequest,
  setEventDetail: SetEventDetailActions.setEventDetail
})(EventScreen)
