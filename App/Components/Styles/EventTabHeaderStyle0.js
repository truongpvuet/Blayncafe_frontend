import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
// 640, 360
// 1334, 750
const heighImage = ((height / 13.34) - 12);
const widthImage = ((heighImage * 112) / 72);

export default StyleSheet.create(
  {
    container: {
      height: (height / 13.34),
      backgroundColor: 'rgb(47, 51, 52)'
    },
    tab: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    tabButtonLeft: {
      marginVertical: 6,
      marginRight: 8
    },
    tabButtonRight: {
      marginVertical: 6,
      marginLeft: 8
    },
    tabImageLeft: {
      resizeMode: 'stretch',
      height: heighImage,
      width: widthImage
    },
    tabImageRight: {
      resizeMode: 'stretch',
      height: heighImage,
      width: widthImage
    }
  }
);
