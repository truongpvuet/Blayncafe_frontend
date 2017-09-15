import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#222527'
    },
    mainCalendar: {
      marginBottom: 12
    },
    calendarComponent: {
      flexDirection: 'column',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 15
    },
    calendarWeekComponent: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      borderBottomColor: '#383C3D',
      borderBottomWidth: 1
    },
    calendarWeekComponentEnd: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderBottomColor: '#383C3D',
      borderBottomWidth: 1
    },
    bottomLine: {
      width: Metrics.width - 30,
      height: 1,
      backgroundColor: '#909386'
    },
    date: {
      color: '#909386',
      fontSize: 17,
      fontWeight: 'bold',
      marginBottom: 6,
      marginLeft: 15
    },
    eventItem: {
      marginTop: 12,
      paddingLeft: 15,
      paddingRight: 15,
      marginBottom: 5,
      paddingBottom: 15,
      borderBottomColor: '#383C3D',
      borderBottomWidth: 1
    },
    calendarEventItem: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 10,
      height: 45,
      marginTop: 10,
      backgroundColor: '#323637',
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: 'center'
    },
    calendarEventItemText: {
      color: '#909386'
    }
  }
)
