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
    termContent: {
      resizeMode: 'stretch',
      width,
      height: ((width * 6685) / 760),
      marginTop: (height / 40),
    }
  }
);

// titleContent: {
//   height: (height / 13.9),
//   backgroundColor: 'rgb(34, 37, 39)',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderBottomWidth: 1,
//   borderBottomColor: 'rgb(72, 72, 72)'
// },
// titleText: {
//   fontSize: 17,
//   fontFamily: 'Roboto',
//   color: 'rgb(200, 200, 201)'
// },
// contentIntro: {
//   justifyContent: 'center',
//   alignItems: 'center'
// },
// introduce: {
//   resizeMode: 'stretch',
//   height: (height / 7),
//   width: (((height / 7) * 672) / 184),
//   marginTop: (width / 40)
// },
// section1Intro: {
//   marginHorizontal: (width / 30),
//   borderBottomWidth: 1,
//   borderBottomColor: 'rgb(60, 64, 65)'
// },
// section1: {
//   resizeMode: 'stretch',
//   height: (height / 55),
//   width: (((height / 55) * 193) / 24),
//   marginTop: (height / 18),
//   marginBottom: (height / 95),
// },
// section1Content: {
//   resizeMode: 'stretch',
//   height: (height / 3.1),
//   width: (((height / 3.1) * 676) / 416),
//   marginHorizontal: (width / 30),
//   marginTop: (width / 30)
// }
