import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import { Actions } from 'react-native-router-flux'
import moment from 'moment'

import AttendTabHeader from '../Components/AttendTabHeader'
import WillAttendScreen from '../Containers/WillAttendScreen'
import DidAttendScreen from '../Containers/DidAttendScreen'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import EventActions from '../Redux/ListEventsRedux'
// Styles
import styles from './Styles/AttendEventScreenStyle'
import SetEventDetailActions from '../Redux/EventDetailRedux'

const isHeldEvent = (event) => {
  const date = moment(`${event.date} ${event.startingTime}`)
  return date.isBefore(moment())
}

class AttendEventScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onFocus: true
    }
    this.focusDidEvent = this.focusDidEvent.bind(this)
    this.focusWillEvent = this.focusWillEvent.bind(this)
    this.gotoEventDetail = this.gotoEventDetail.bind(this)
  }

  componentWillMount () {
    this.props.listAttendedEventRequest()
  }

  focusWillEvent () {
    this.setState({
      onFocus: true
    })
  }
  focusDidEvent () {
    this.setState({
      onFocus: false
    })
  }

  gotoEventDetail (eventItem) {
    this.props.setEventDetail(eventItem)
    Actions.eventDetail()
  }

  render () {
    const { attendedEvents } = this.props
    const willAttendEvents = attendedEvents.filter(event => !isHeldEvent(event))
    const didAttendEvents = attendedEvents.filter(event => isHeldEvent(event))
    const MainAttend = this.state.onFocus
      ? <WillAttendScreen eventList={willAttendEvents} gotoEventDetail={this.gotoEventDetail} />
      : <DidAttendScreen eventList={didAttendEvents} gotoEventDetail={this.gotoEventDetail} />
    return (
      <Container style={styles.container} >
        <AttendTabHeader
          focusWillEvent={this.focusWillEvent}
          focusDidEvent={this.focusDidEvent}
          onfocusProps={this.state.onFocus}
        />
        <Content>
          {MainAttend}
        </Content>

      </Container>
    )
  }
}

// <View>
//   <TouchableOpacity
//     onPress={() => this.gotoEventListScreen()}
//   >
//     <Text> Go to EventScreen </Text>
//   </TouchableOpacity>
// </View>

const mapStateToProps = (state) => {
  const { event } = state
  return {
    attendedEvents: event.attended
  }
}
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
export default connect(mapStateToProps, {
  listAttendedEventRequest: EventActions.listAttendedEventRequest,
  setEventDetail: SetEventDetailActions.setEventDetail
})(AttendEventScreen)
