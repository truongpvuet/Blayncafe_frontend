import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'rgb(34, 37, 39)',
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
    styleCup: {
      marginTop: (height / 32),
      justifyContent: 'center',
      alignItems: 'center'
    },
    img: {
      width: (width / 2.7),
      height: (((width / 2.7) * 248) / 247)
    },
    sumaryMessage: {
      marginTop: (height / 16),
      justifyContent: 'center',
      alignItems: 'center'
    },
    textMessage: {
      fontSize: (width / 30),
      color: 'rgb(218, 218, 218)'
    },
    button: {
      marginTop: (height / 16),
      justifyContent: 'center',
      alignItems: 'center'
    },
    successBtn: {
      width: (width / 1.8),
      height: (((width / 1.8) * 80) / 400),
      borderRadius: 3,
      backgroundColor: 'rgb(179, 225, 41)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    successText: {
      color: 'rgb(34, 37, 39)',
      fontSize: (width / 22.5),
      fontWeight: 'bold'
    },
    copyRight: {
      marginTop: (height / 4.5),
      justifyContent: 'center',
      alignItems: 'center'
    },
    rightText: {
      color: 'rgb(255, 255, 255)'
    }
  }
);
