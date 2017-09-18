import { StyleSheet, Dimensions } from 'react-native'
import { Metrics } from '../../Themes/'
const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#222527'
    },
    mainCalendar: {
      marginBottom: (height / 53.3)
    },
    calendarComponent: {
      flexDirection: 'column',
      marginHorizontal: (width / 24),
      marginTop: (height / 42.66)
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
      fontSize: (height / 37.6),
      fontWeight: 'bold',
      marginBottom: (height / 106.67),
      marginLeft: (width / 24)
    },
    eventItem: {
      marginTop: (height / 42.66),
      paddingHorizontal: (width / 24),
      paddingBottom: (height / 42.66),
      borderBottomColor: '#383C3D',
      borderBottomWidth: 1,
    },
    calendarEventItem: {
      marginLeft: 0,
      marginRight: 0,
      marginVertical: (height / 64),
      height: (height / 14.2),
      backgroundColor: '#323637',
      paddingHorizontal: (width / 36),
      justifyContent: 'center'
    },
    calendarEventItemText: {
      color: '#909386'
    }
  }
)
