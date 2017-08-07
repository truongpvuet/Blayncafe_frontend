import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      height: (height - (height / 15.3)),
      width,
      backgroundColor: 'rgb(34, 37, 39)'
    },
    titleContent: {
      height: (height / 13.9),
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(72, 72, 72)'
    },
    titleText: {
      fontSize: 17,
      fontFamily: 'Roboto',
      color: 'rgb(231, 226, 226)'
    },
    graph: {
      marginTop: (height / 16.27),
      alignItems: 'center',
      backgroundColor: 'rgb(34, 37, 39)'
    },
    graphImage: {
      resizeMode: 'stretch',
      height: (height / 2.36),
      width: (((height / 2.36) * 564) / 565)
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: (height / 8.5),
      backgroundColor: 'rgb(34, 37, 39)'
    },
    barcode: {
      alignItems: 'center'
    },
    barcodeImage: {
      marginTop: (height / 22.5),
      width: (width / 1.1),
      height: (height / 5)
    },
    signup: {
      backgroundColor: 'rgb(255, 255, 255)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      width: (width / 2.2),
      height: (height / 16.6)
    },
    signupText: {
      fontSize: 17,
      fontFamily: 'Roboto',
      color: 'rgb(34, 37, 39)'
    },
    signin: {
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'rgb(249, 249, 249)',
      borderRadius: 5,
      borderWidth: 1,
      width: (width / 2.2),
      height: (height / 16.6)
    },
    signinText: {
      fontSize: 17,
      fontFamily: 'Roboto',
      color: 'rgb(249, 249, 249)'
    }
  }
);
