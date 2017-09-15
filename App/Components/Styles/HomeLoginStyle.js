import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
// 640, 360
// 1334, 750
// rgb(34, 37, 39)

export default StyleSheet.create(
  {
    container: {
      flex: 5,
      alignItems: 'center'
    },
    button: {
      flexDirection: 'row',
      marginTop: (height / 20)
    },
    barcode: {
      alignItems: 'center'
    },
    barcodeImage: {
      marginTop: (height / 20),
      marginLeft: 12,
      marginRight: 12
    },
    signup: {
      backgroundColor: 'rgb(255, 255, 255)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      width: (width / 2.2),
      height: (height / 16.6),
      marginRight: (width / 36)
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
)
