import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'row'
    },
    timeDetail: {
      color: 'rgb(255, 255, 255)',
      marginRight: (width / 36)
    }
  }
)
