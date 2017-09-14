import React, { Component } from 'react'
import { Container, Content } from 'native-base'
import AttendTabHeader from '../Components/AttendTabHeader'
import WillAttendScreen from '../Containers/WillAttendScreen'
import DidAttendScreen from '../Containers/DidAttendScreen'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import EventActions from '../Redux/ListEventsRedux'
// Styles
import styles from './Styles/AttendEventScreenStyle'

class AttendEventScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     header: (
  //       <AttendEventHeader
  //         gobackMenu={() => { navigate('HomeScreen'); navigate('DrawerOpen'); }}
  //       />
  //     ),
  //     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //     tabBarIcon: ({ focused }) => (
  //       <Image
  //         source={focused ? Images.tabHome : Images.untabHome}
  //         style={{ width: (widthImage / 2), height: (heighImage / 2) }}
  //       />
  //     )
  //   };
  // };
  constructor (props) {
    super(props)
    this.state = {
      onFocus: true
    }
    this.focusDidEvent = this.focusDidEvent.bind(this)
    this.focusWillEvent = this.focusWillEvent.bind(this)
    this.gotoEventListScreen = this.gotoEventListScreen.bind(this)
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
  gotoEventListScreen () {
    const { navigate } = this.props.navigation
    navigate('EventScreen')
    navigate('EventDetailScreen')
  }

  render () {
    const MainAttend = this.state.onFocus
      ? <WillAttendScreen eventList={this.props.attendedEvents} gotoEventDetail={() => this.gotoEventListScreen()} />
      : <DidAttendScreen />
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
  listAttendedEventRequest: EventActions.listAttendedEventRequest
})(AttendEventScreen)
