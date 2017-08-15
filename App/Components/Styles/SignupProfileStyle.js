
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750
const heightIcon = (height / 4);
const widthIcon = heightIcon;

export default StyleSheet.create(
  {
    content: {
      width,
      backgroundColor: 'rgb(34, 37, 39)',
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
    commonInfo: {
      width,
      height: (height / 3.2),
      justifyContent: 'center',
      alignItems: 'center',
    },
    pictureTaking: {
      width,
      height: heightIcon,
      alignItems: 'center',
    },
    icon: {
      width: widthIcon,
      height: heightIcon
    },
    nameAndID: {
      width,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: (height / 15),
      marginBottom: (height / 100)
    },
    nameField: {
      color: 'rgb(231, 226, 226)'
    },
    idFrame: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    IDCover: {
      justifyContent: 'center',
      alignItems: 'center',
      width: (width / 15.625),
      height: (width / 31.25)
    },
    square: {
      width: ((width / 45) * 18) / 16,
      height: (height / 80)
    },
    idField: {
      color: 'rgb(231, 226, 226)',
      fontSize: (width / 27)
    },
    detailInfo: {
      backgroundColor: 'rgb(34, 37, 39)',
      borderRadius: 2,
      marginHorizontal: (width / 31.25)
    },
    detail: {
      height: (height / 3),
      marginTop: (height / 35),
      marginHorizontal: (width / 10)
    },
    eachField: {
      flexDirection: 'row',
      marginBottom: (height / 64)
    },
    titleField: {
      fontWeight: '800',
      color: 'rgb(110, 110, 110)',
      marginRight: (width / 120)
    },
    coverTitle: {
      width: (width / 5.5),
      marginRight: (width / 120)
    },
    infoField: {
      color: 'rgb(255, 255, 255)'
    },
    card: {
      height: (height / 3.3),
      marginTop: (height / 32),
      alignItems: 'center'
    },
    aboveCover: {
      resizeMode: 'stretch',
      height: (height / 27.8),
      width: ((height / 27.8) * 606) / 46,
      alignItems: 'center'
    },
    studentCard: {
      resizeMode: 'stretch',
      marginVertical: (height / 66.8),
      marginHorizontal: (width / 22),
      height: (height / 3.7),
      width: ((height / 3.7) * 565) / 358,
      alignItems: 'center'
    },
    bottomCover: {
      resizeMode: 'stretch',
      marginTop: (height / 4),
      height: (height / 27.8),
      width: ((height / 27.8) * 606) / 46
    },
    storage: {
      height: (height / 8.4),
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonStorage: {
      backgroundColor: 'rgb(179, 225, 41)',
      width: ((width * 2) / 3),
      height: ((((width * 2) / 3) * 80) / 480),
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleStorage: {
      fontWeight: '900',
      fontSize: (width / 25),
    },
    fix: {
      height: (height / 7.6),
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonFix: {
      backgroundColor: 'rgb(34, 37, 39)',
      width: (width / 2.2),
      height: (height / 16.675),
      borderWidth: 1,
      borderColor: 'rgb(249, 249, 249)',
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleFix: {
      fontWeight: '500',
      color: 'rgb(249, 249, 249)',
      fontSize: (width / 27),
    },
  }
);
// marginBottom: (height / 14),
// marginLeft: (width / 16),
