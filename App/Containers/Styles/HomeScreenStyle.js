import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'rgb(34, 37, 39)'
    },
    titleContent: {
      height: (height / 13.9),
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
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
