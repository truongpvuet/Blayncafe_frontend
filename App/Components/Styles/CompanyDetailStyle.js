import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'rgb(244, 243, 243)'
    },
    main: {
      resizeMode: 'cover',
      width,
      height: ((width * 5) / 8)
    },
    description: {
      padding: (width / 36),
      justifyContent: 'center',
      alignItems: 'center'
    },
    textDescription: {
      fontSize: (width / 32),
      color: 'rgb(152,151,151)'
    },
    outline: {
      width,
      backgroundColor: 'rgb(255, 255, 255)'
    },
    title: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (width / 14),
      paddingBottom: (width / 28)
    },
    textTitle: {
      paddingBottom: (height / 128),
      color: 'rgb(90, 85, 85)',
      fontWeight: 'bold'
    },
    lineTitle: {
      height: 1,
      width: (width / 9),
      backgroundColor: 'rgb(224, 213, 213)'
    },
    content: {
      width,
      flexDirection: 'row'
    },
    titleContent: {
      flex: 2,
      paddingBottom: (height / 64),
      paddingLeft: (width / 36)
    },
    detailContent: {
      flex: 7,
      paddingBottom: (height / 64),
      paddingRight: (width / 36)
    },
    titleLeftContent: {
      color: 'rgb(90, 85, 85)',
      fontWeight: 'bold',
      fontSize: (width / 32),
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 207, 207)'
    },
    titleRightContent: {
      color: 'rgb(90, 85, 85)',
      fontSize: (width / 32),
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 207, 207)'
    },
    titleRightBrow: {
      color: 'rgb(141, 95, 95)',
      fontSize: (width / 30),
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 207, 207)'
    }
  }
)
