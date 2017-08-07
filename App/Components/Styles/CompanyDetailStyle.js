import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1
    },
    main: {
      resizeMode: 'stretch',
      width,
      height: ((width * 548) / 756)
    },
    overview: {
      resizeMode: 'stretch',
      width,
      height: ((width * 702) / 756)
    },
    point: {
      resizeMode: 'stretch',
      width,
      height: ((width * 702) / 756)
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
      flex: 1,
      paddingBottom: (height / 64),
      paddingLeft: (width / 18)
    },
    detailContent: {
      flex: 3,
      paddingBottom: (height / 64),
      paddingRight: (width / 18)
    },
    titleLeftContent: {
      color: 'rgb(90, 85, 85)',
      fontWeight: 'bold',
      fontSize: (width / 30),
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 207, 207)'
    },
    titleRightContent: {
      color: 'rgb(90, 85, 85)',
      fontSize: (width / 30),
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
);
