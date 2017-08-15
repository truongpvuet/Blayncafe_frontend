import { StyleSheet } from 'react-native';

export default StyleSheet.create(
  {
    container: {
      flex: 1,
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
    blockView1: {
      marginLeft: 20,
      marginRight: 40,
      marginTop: 8,
      flexDirection: 'row',
      height: 85
    },
    shortDescriptionText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 20
    },
    shortDescriptionContactText: {
      fontSize: 11,
      marginTop: 8,
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
      backgroundColor: '#C0E042',
      height: 40,
      borderColor: '#C0E042',
      borderRadius: 3
    },
    registerButtonText: {
      fontSize: 15,
      color: 'black',
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
      color: 'white',
      fontSize: 15,
      marginTop: 8
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
    }
  }
);
