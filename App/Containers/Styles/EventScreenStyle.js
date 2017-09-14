import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#222527'
    },
    calendarComponent: {
      flexDirection: 'column',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 15
    },
    calendarWeekComponent: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    calendarWeekComponentEnd: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    bottomLine: {
      width: Metrics.width - 30,
      height: 1,
      backgroundColor: '#B4B7A9'
    },
    date: {
      color: '#B4B7A9',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 15
    }
  }
)
