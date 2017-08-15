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
    pointBg: {
      resizeMode: 'stretch',
      width,
      height: ((width * 420) / 750),
      justifyContent: 'center',
      alignItems: 'center'
    },
    textPoint: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'rgb(55, 67, 75)'
    },
    history: {
      flex: 1,
      margin: (width / 24)
    },
    historyTitle: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(80, 85, 86)',
      paddingVertical: (height / 128)
    },
    historyText: {
      color: 'rgb(255, 255, 255)'
    },
    historyContent: {

    },
    listItem: {
      marginLeft: 0,
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(34, 37, 39)',
    },
    item: {

    }
  }
);
