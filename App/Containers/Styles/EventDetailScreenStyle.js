import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1
    },
    mainImage: {
      width: '100%',
      height: 160
    },
    redNewTextContainer: {
      backgroundColor: 'red',
      alignSelf: 'flex-start',
      marginLeft: 0
    },
    redNewText: {
      color: '#ffffff',
      alignSelf: 'flex-start',
      fontSize: 12
    },
    redNewImage: {
      resizeMode: 'stretch',
      width: (((height / 35.6) * 58) / 32),
      height: (height / 35.6),
    },
    blockView1: {
      marginLeft: 20,
      marginRight: 40,
      marginTop: 8,
      flexDirection: 'row',
      height: 90
    },
    shortDescriptionText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 20
    },
    shortDescriptionContactText: {
      fontSize: 11,
      marginTop: 13,
      color: '#ffffff'
    },
    registerButtonContainer: {
      backgroundColor: 'transparent',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 8,
      marginBottom: 8
    },
    registerButton: {
      backgroundColor: '#B3E129',
      height: 40,
      borderColor: '#B3E129',
      borderRadius: 3
    },
    cancelButton: {
      backgroundColor: '#D20F2A',
      height: 40,
      borderColor: '#D20F2A',
      borderRadius: 3
    },
    registerButtonText: {
      fontSize: 15,
      color: 'black',
      fontWeight: 'bold'
    },
    cancelButtonText: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold'
    },
    timeBlockView: {
      height: 75,
      width: '100%',
      backgroundColor: '#333738',
      marginTop: 8,
      paddingLeft: 16,
      paddingTop: 4
    },
    timeBlockViewTextLine: {
      flexDirection: 'row',
      color: 'white',
      fontSize: 15,
      marginTop: 8
    },
    person_clock_icon: {
      resizeMode: 'stretch',
      width: (width / 30),
      height: (width / 30),
      marginRight: (width / 30),
      marginTop: (height / 80)
    },
    moreDetailBlock: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 16
    },
    moreDetailBlockText: {
      color: 'white',
      fontSize: 12,
      lineHeight: 18
    },
    showMoreButtonContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    showMoreButton: {
      width: 160,
      height: 41,
      backgroundColor: 'transparent',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 0,
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginBottom: 16
    },
    showMoreButtonText: {
      fontSize: 12
    },
    notifyMessageCancel: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#D20F2A',
      width: '100%',
      height: 40,
      opacity: 0.5
    },
    notifyMessageTextContainerCancel: {
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 0,
      left: 0,
      width: '100%',
      height: 40,
      justifyContent: 'center'
    },
    notifyMessageTextCancel: {
      textAlign: 'center',
      fontWeight: '900',
      fontSize: 16,
      color: 'white'
    },
    notifyMessageRegistered: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#B3E129',
      width: '100%',
      height: 40,
      opacity: 0.8
    },
    notifyMessageTextContainerRegistered: {
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 0,
      left: 0,
      width: '100%',
      height: 40,
      justifyContent: 'center'
    },
    notifyMessageTextRegistered: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 15,
      color: 'black'
    },
    bottomDecoin: {
      height: 80
    },
    titleContainer: {
      marginBottom: 10
    }
  }
)
