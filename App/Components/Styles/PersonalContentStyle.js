
import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')
// 640, 360
// 1334, 750
const heightIcon = (height / 4.17)
const widthIcon = heightIcon

export default StyleSheet.create(
  {
    content: {
      width,
      backgroundColor: 'rgb(34, 37, 39)',
      paddingBottom: (width / 31.25)
    },
    commonInfo: {
      width,
      height: (height / 2.5),
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    pictureTaking: {
      width,
      height: heightIcon,
      alignItems: 'center',
      marginTop: (height / 32)
    },
    icon: {
      width: widthIcon,
      height: heightIcon,
      borderRadius: widthIcon / 2,
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
      height: (height / 10),
      marginVertical: (height / 100),
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
      marginTop: (height / 35),
      marginHorizontal: (width / 25)
    },
    eachField: {
      flexDirection: 'row',
      marginBottom: (height / 64)
    },
    titleField: {
      fontWeight: '800',
      fontSize: (width / 27),
      color: 'rgb(68, 68, 68)'
    },
    coverTitle: {
      width: (width / 5.5),
      marginRight: (width / 120),
      alignItems: 'flex-start'
    },
    infoField: {
      color: 'rgb(68, 68, 68)',
      fontSize: (width / 27),
      marginBottom: -(height / 106),
    },
    coverEmail: {
      justifyContent: 'center',
      paddingHorizontal: (width / 72),
      width: ((height / 20.8) * 485) / 64,
      height: (height / 18.28),
      borderWidth: 2,
      borderColor: 'rgb(209, 209, 209)',
      borderRadius: 1
    },
    coverAddress: {
      justifyContent: 'center',
      paddingVertical: (height / 128),
      paddingHorizontal: (width / 72),
      width: ((height / 13) * 485) / 102,
      borderWidth: 2,
      borderColor: 'rgb(209, 209, 209)',
      borderRadius: 1
    },
    card: {
      marginTop: (height / 32),
      alignItems: 'center'
    },
    aboveCover: {
      resizeMode: 'stretch',
      height: (height / 27.8),
      width: ((height / 27.8) * 606) / 48
    },
    studentCardStyle: {
      resizeMode: 'stretch',
      marginTop: ((height / 53) * (-1)),
      height: (height / 3.7),
      width: ((height / 3.7) * 565) / 358
    },
    bottomCover: {
      resizeMode: 'stretch',
      marginTop: ((height / 53) * (-1)),
      height: (height / 27.8),
      width: ((height / 27.8) * 606) / 48
    },
    storage: {
      height: (height / 7.1),
      alignItems: 'center'
    },
    buttonStorage: {
      backgroundColor: 'rgb(179, 225, 41)',
      width: (width / 1.25),
      height: (height / 16.675),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: (height / 32)
    },
    titleStorage: {
      fontWeight: '700',
      fontSize: (width / 26)
    },
    cardUploading: {
      width: (width / 1.28),
      height: (height / 3.4),
      marginHorizontal: ((width - (width / 1.18)) / 2),
      alignItems: 'center',
      marginTop: (height / 16)
    },
    cardTakingPhoto: {
      width: (width / 1.28),
      height: (((width / 1.28) * 401) / 606),
      alignItems: 'center',
      justifyContent: 'center'
    },
    takePicture: {
      height: (heightIcon / 4),
      width: (widthIcon / 4),
      marginBottom: (height / 32)
    },
    pictureGuide: {
      height: (height / 20),
      width: (((height / 20) * 331) / 60)
    },
  }
)
// marginBottom: (height / 14),
// marginLeft: (width / 16),
