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
    form: {
      marginTop: (height / 24),
      backgroundColor: 'rgb(34, 37, 39)',
      alignItems: 'center'
    },
    passwordForm: {
      width: (width / 1.28),
      height: (height / 18.2),
      marginBottom: (height / 48),
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    repasswordForm: {
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
    restorePass: {
      alignItems: 'center',
      marginTop: (height / 42)
    },
    restoreBtn: {
      width: (width / 1.8),
      height: (((width / 1.8) * 80) / 400),
      backgroundColor: 'rgb(179, 225, 41)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
    },
    restoreText: {
      color: 'rgb(34, 37, 39)',
      fontWeight: 'bold',
      fontSize: 15
    }
  }
);
