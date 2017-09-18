import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const widthImg = (height > width) ? (width / 3.4) : (height / 8);
const heightImg = widthImg;
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
      flex: 1,
      flexDirection: 'row'
    },
    gridLine1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderRightColor: 'rgb(246, 243, 243)',
      borderBottomColor: 'rgb(246, 243, 243)'
    },
    gridLine2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderRightColor: 'rgb(246, 243, 243)',
      borderBottomColor: 'rgb(246, 243, 243)'
    },
    gridLine3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderRightColor: 'rgb(246, 243, 243)',
      borderBottomColor: 'rgb(246, 243, 243)'
    },
    imageLine: {
      width: widthImg,
      height: heightImg,
      resizeMode: 'stretch',
    },
  }
);
