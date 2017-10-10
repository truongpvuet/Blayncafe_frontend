import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
const widthImg = (height > width) ? (width / 3.4) : (height / 8)
const heightImg = widthImg
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 255)'
    },
    line: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(246, 243, 243)'
    },
    titleLine: {
      color: 'rgb(68, 68, 68)',
      fontSize: (height / 40)
    },
    gridLine: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      width: width / 3,
      height: width / 3,
      borderRightColor: 'rgb(246, 243, 243)',
      borderBottomColor: 'rgb(246, 243, 243)'
    },
    imageLine: {
      width: widthImg,
      height: heightImg,
      resizeMode: 'stretch'
    }
  }
)
