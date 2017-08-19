import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
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
      width: (width / 4.36),
      height: (height / 30.32)
    }
  }
);
