import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
// 640, 360
// 1334, 750
// const heighImage = ((height / 13.34) - 12);
// const widthImage = ((heighImage * 112) / 72);

export default StyleSheet.create(
  {
    container: {
      height: (height / 9),
      flexDirection: 'row',
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      flexDirection: 'row',
      height: (height / 18),
      width: (width / 1) - 30,
      backgroundColor: 'rgb(82, 77, 77)',
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'rgb(82, 77, 77)'
    },
    willAttend: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(34, 37, 39)'
    },
    didAttend: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(82, 77, 77)'
    },
    textAttend: {
      color: 'rgb(231, 226, 226)',
      fontSize: 12
    }
  }
)

// willAttend: {
//   height: (height / 16.5),
//   width: (width / 2.2),
//   backgroundColor: 'yellow',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderRadius: 3,
//   borderWidth: 2,
//   borderColor: 'rgb(82, 77, 77)'
// },
// didAttend: {
//   height: (height / 16.5),
//   width: (width / 2.2),
//   backgroundColor: 'green',
//   justifyContent: 'center',
//   alignItems: 'center',
//   borderRadius: 3,
//   borderWidth: 2,
//   borderColor: 'rgb(82, 77, 77)'
// }
