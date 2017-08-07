import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: (height / 13.34),
      backgroundColor: 'rgb(20, 18, 18)'
    },
    icon: {
      width: 50,
      height: 50
    },
    title: {
      justifyContent: 'center'
    },
    titleImage: {
      resizeMode: 'stretch',
      height: (height / 38),
      width: (((height / 38) * 194) / 32)
    }
  }
);
