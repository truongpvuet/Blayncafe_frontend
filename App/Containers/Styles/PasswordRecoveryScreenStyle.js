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
    title: {
      height: (height / 13.9),
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(72, 72, 72)'
    },
    titleText: {
      fontSize: (height / 37),
      fontFamily: 'Roboto',
      color: 'rgb(231, 226, 226)'
    },
    verifyIntro: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (height / 16)
    },
    verifyText: {
      color: 'rgb(218, 218, 218)',
      fontSize: 13
    }
  }
);
