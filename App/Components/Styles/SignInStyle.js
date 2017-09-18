import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      width,
      height,
      position: 'absolute',
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
    formCover: {
      flex: 1
    },
    mainForm: {
      flex: 4
    },
    form: {
      flex: 2,
      backgroundColor: 'rgb(34, 37, 39)',
      alignItems: 'center'
    },
    emailForm: {
      width: ((width * 3) / 4),
      height: (height / 18.2),
      marginBottom: (height / 32),
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    passwordForm: {
      width: ((width * 3) / 4),
      height: (height / 18.2),
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
    loginBtnView: {
      flex: 2,
      marginTop: (height / 64),
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginBtn: {
      width: (width / 1.8),
      height: (height / 16),
      borderRadius: 3,
      backgroundColor: 'rgb(179, 225, 41)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginText: {
      fontSize: (width / 20),
      fontWeight: '500',
      color: 'rgb(34, 37, 39)'
    },
    copyrightForm: {
      flex: 5,
    },
    forgotPass: {
      alignItems: 'center'
    },
    forgotText: {
      color: 'rgb(110, 110, 110)',
      fontSize: (height / 45.7)
    },
    copyRight: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (height / 32),
    },
    rightText: {
      marginTop: (height / 3.76),
      color: 'rgb(255, 255, 255)',
      fontSize: (height / 49.2)
    }
  }
)
