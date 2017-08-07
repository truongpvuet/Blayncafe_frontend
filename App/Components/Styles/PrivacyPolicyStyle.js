import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      width,
      backgroundColor: 'rgb(34, 37, 39)'
    },
    privacyContent: {
      resizeMode: 'stretch',
      width,
      height: ((width * 6685) / 760),
      marginTop: (height / 40),
    }
  }
);
