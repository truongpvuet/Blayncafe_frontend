
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750
const heightIcon = (height / 4.17);
const widthIcon = heightIcon;

export default StyleSheet.create(
  {
    content: {
      width,
      backgroundColor: 'rgb(34, 37, 39)',
    },
    commonInfo: {
      width,
      height: (height / 2.7),
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    pictureTaking: {
      width,
      height: heightIcon,
      alignItems: 'center',
      marginTop: (height / 100)
    },
    icon: {
      width: widthIcon,
      height: heightIcon
    },
    camera: {
      justifyContent: 'center',
      alignItems: 'center',
      height: (heightIcon / 4),
      width: (widthIcon / 4),
      marginTop: ((heightIcon * 3) / 4),
      marginLeft: ((widthIcon * 3) / 4),
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
      backgroundColor: 'rgb(244, 243, 243)',
      borderRadius: 2,
      marginHorizontal: (width / 31.25)
    },
    detail: {
      height: (height / 3),
      marginVertical: (height / 35),
      marginHorizontal: (width / 25),
    },
    eachField: {
      flexDirection: 'row',
      marginBottom: (height / 64)
    },
    titleField: {
      fontWeight: '800',
      color: 'rgb(68, 68, 68)',
      marginRight: (width / 120)
    },
    coverTitle: {
      width: (width / 5.5),
      marginRight: (width / 120)
    },
    infoField: {
      color: 'rgb(68, 68, 68)'
    },
    coverEmail: {
      justifyContent: 'center',
      padding: (height / 128),
      height: (height / 20.8),
      width: ((height / 20.8) * 485) / 64,
      borderWidth: 2,
      borderColor: 'rgb(209, 209, 209)',
      borderRadius: 1
    },
    coverAddress: {
      justifyContent: 'center',
      padding: (height / 128),
      height: (height / 13),
      width: ((height / 13) * 485) / 102,
      borderWidth: 2,
      borderColor: 'rgb(209, 209, 209)',
      borderRadius: 1
    },
    card: {
      height: (height / 3.3),
      alignItems: 'center'
    },
    aboveCover: {
      resizeMode: 'stretch',
      marginHorizontal: (width / 25),
      height: (height / 27.8),
      width: ((height / 27.8) * 606) / 46
    },
    studentCard: {
      resizeMode: 'stretch',
      marginVertical: (height / 66.8),
      marginHorizontal: (width / 25),
      height: (height / 3.7),
      width: ((height / 3.7) * 565) / 358
    },
    bottomCover: {
      resizeMode: 'stretch',
      marginHorizontal: (width / 30) * (-1),
      marginTop: (height / 4),
      height: (height / 27.8),
      width: ((height / 27.8) * 606) / 46
    },
    storage: {
      height: (height / 7.8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStorage: {
      backgroundColor: 'rgb(179, 225, 41)',
      width: (width / 1.25),
      height: (height / 16.675),
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleStorage: {
      fontWeight: '700',
      fontSize: (width / 26),
    }
  }
);
// marginBottom: (height / 14),
// marginLeft: (width / 16),
