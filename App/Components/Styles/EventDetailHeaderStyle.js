import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// 640, 360
// 1334, 750
const widthImage = 100;
const heightImage = 100;

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
    backIcon: {
      width: (widthImage / 2),
      height: (heightImage / 2)
    },
    title: {
      justifyContent: 'center'
    },
    titleImage: {
      resizeMode: 'stretch',
      height: (height / 35),
      width: (((height / 35) * 136) / 33)
    }
  }
);
