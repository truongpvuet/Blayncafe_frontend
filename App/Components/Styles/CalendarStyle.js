import { StyleSheet } from 'react-native'

export default StyleSheet.create(
  {
    container: {
      width: 49,
      height: 64,
      margin: 0
    },
    subContainer: {
      flexDirection: 'column',
      flexGrow: 1,
      margin: 3,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'transparent'
    },
    highlightedSubContainer: {
      flexDirection: 'column',
      flexGrow: 1,
      margin: 3,
      backgroundColor: '#524E4E',
      borderRadius: 3,
      borderWidth: 1,
      borderColor: '#524E4E'
    },
    dateNum: {
      color: '#B4B7A9',
      backgroundColor: 'transparent',
      fontWeight: '500',
      paddingTop: 3,
      fontSize: 14,
      textAlign: 'center'
    },
    dateNumSun: {
      color: '#C36066',
      backgroundColor: 'transparent',
      fontWeight: '500',
      paddingTop: 3,
      fontSize: 14,
      textAlign: 'center'
    },
    dateNumSat: {
      color: '#91B4F1',
      backgroundColor: 'transparent',
      fontWeight: '500',
      paddingTop: 3,
      fontSize: 14,
      textAlign: 'center'
    },
    dateHeadline: {
      width: '100%',
      height: 1,
      backgroundColor: '#383C3D'
    },
    dateNumRegion: {
      width: '100%',
      flexGrow: 1,
      flex: 1
    },
    dotRegion: {
      width: '100%',
      flexGrow: 1,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    dotLarge: {
      backgroundColor: '#B4B7A9',
      width: 10,
      height: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B4B7A9',
      alignSelf: 'center'
    },
    dotSmall: {
      backgroundColor: '#B4B7A9',
      width: 7,
      height: 7,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#B4B7A9',
      alignSelf: 'center'
    },
    dotNo: {}
  }
)
