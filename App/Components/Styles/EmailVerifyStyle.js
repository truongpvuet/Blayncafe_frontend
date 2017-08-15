import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'rgb(34, 37, 39)'
    },
    title: {
      height: (height / 13.9),
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(72, 72, 72)'
    },
    titleText: {
      fontSize: (height / 37),
      fontFamily: 'Roboto',
      color: 'rgb(231, 226, 226)'
    },
    verifyIntro: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (height / 16)
    },
    verifyText: {
      color: 'rgb(218, 218, 218)',
      fontSize: 13
    },
    form: {
      marginTop: (height / 24),
      backgroundColor: 'rgb(34, 37, 39)',
      alignItems: 'center'
    },
    emailForm: {
      width: (width / 1.28),
      height: (height / 18.2),
      marginBottom: (height / 32),
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    textInput: {
      fontSize: (height / 45),
      marginLeft: (width / 36),
      paddingBottom: (height / 80),
      backgroundColor: 'rgb(255, 255, 255)'
    },
    forgotPass: {
      alignItems: 'center',
      marginTop: (height / 42)
    },
    forgorBtn: {
      width: (width / 1.8),
      height: (((width / 1.8) * 80) / 400),
      backgroundColor: 'rgb(179, 225, 41)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
    },
    forgotText: {
      color: 'rgb(34, 37, 39)',
      fontWeight: 'bold',
      fontSize: 15
    }
  }
);
