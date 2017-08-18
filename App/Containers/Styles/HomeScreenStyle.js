import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// 640, 360
// 1334, 750
const heighImage = 44;
const widthImage = 51;

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'rgb(34, 37, 39)'
    },
    icon: {
      width: (widthImage / 2),
      height: (heighImage / 2)
    },
    titleContent: {
      height: (height / 13.9),
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'rgb(72, 72, 72)'
    },
    titleText: {
      fontSize: 17,
      fontFamily: 'Roboto',
      color: 'rgb(231, 226, 226)'
    },
    graphImage: {
      resizeMode: 'stretch',
      height: (height / 2.36),
      width: (((height / 2.36) * 564) / 565)
    }
  }
);
