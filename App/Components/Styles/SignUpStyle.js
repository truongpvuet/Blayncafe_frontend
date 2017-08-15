import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750
const heightIcon = (height / 3.76);
const widthIcon = heightIcon;

export default StyleSheet.create(
  {
    container: {
      height: (height - (height / 15.3)),
      width,
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
    pictureTaking: {
      width,
      height: heightIcon,
      alignItems: 'center',
      marginTop: (height / 32)
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
    mainForm: {

    },
    nameInfo: {
      flexDirection: 'row',
      marginTop: (height / 32),
      justifyContent: 'center',
      alignItems: 'center'
    },
    firtname: {
      width: (width / 2.6),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      marginRight: (width / 36),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    lastname: {
      width: (width / 2.6),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    textInputName: {
      fontSize: (height / 45),
      marginLeft: (width / 36),
      paddingBottom: (height / 80),
      backgroundColor: 'rgb(255, 255, 255)'
    },
    radio: {
      flexDirection: 'row',
      marginTop: (height / 22),
      marginBottom: (height / 28),
      marginHorizontal: (width / 6)
    },
    radioMale: {
      flexDirection: 'row',
      marginRight: (width / 8)
    },
    radioFemale: {
      flexDirection: 'row',
    },
    radioText: {
      color: 'rgb(255, 255, 255)',
      marginLeft: (width / 72),
      fontSize: (width / 30)
    },
    radioFilledOutside: {
      width: (width / 24),
      height: (width / 24),
      borderRadius: (width / 48),
      borderWidth: (width / 96),
      borderColor: 'rgb(178, 224, 40)'
    },
    radioFilledInside: {
      width: (width / 48),
      height: (width / 48),
      borderRadius: (width / 96),
      backgroundColor: 'rgb(255, 255, 255)'
    },
    radioEmptyCover: {
      width: (width / 24),
      height: (width / 24),
      borderRadius: (width / 48),
      borderWidth: (width / 192),
      borderColor: 'rgb(92, 93, 94)'
    },
    studentCard: {
      alignItems: 'center',
    },
    studentCardInside: {
      width: (width / 1.3) + (width / 36),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      marginTop: (height / 42),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    textInputCard: {
      fontSize: (height / 45),
      marginLeft: (width / 36),
      paddingBottom: (height / 80),
      backgroundColor: 'rgb(255, 255, 255)'
    },
    university: {
      alignItems: 'center',
    },
    universityInside: {
      width: (width / 1.3) + (width / 36),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      marginTop: (height / 42),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    textBirthDay: {
      marginLeft: ((width - (width / 1.3) - (width / 36)) / 2),
      color: 'rgb(255, 255, 255)',
      fontSize: (height / 42)
    },
    dateInfo: {
      flexDirection: 'row',
      marginTop: (height / 72),
      justifyContent: 'center'
    },
    year: {
      width: (((width / 1.3) - (width / 36)) / 3),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      marginRight: (width / 36),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    month: {
      width: (((width / 1.3) - (width / 36)) / 3),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      marginRight: (width / 36),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    day: {
      width: (((width / 1.3) - (width / 36)) / 3),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    textInputDate: {
      fontSize: (height / 45),
      marginLeft: (width / 36),
      paddingBottom: (height / 80),
      backgroundColor: 'rgb(255, 255, 255)'
    },
    admissionYear: {
      alignItems: 'center',
    },
    admissionYearInside: {
      width: (width / 1.3) + (width / 36),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      marginTop: (height / 42),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    email: {
      alignItems: 'center',
    },
    emailInside: {
      width: (width / 1.3) + (width / 36),
      height: (height / 18.2),
      borderRadius: 3,
      borderWidth: 1,
      marginTop: (height / 42),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    address: {
      alignItems: 'center',
    },
    addressInside: {
      width: (width / 1.3) + (width / 36),
      height: (height / 5),
      borderRadius: 3,
      borderWidth: 1,
      marginTop: (height / 42),
      borderColor: 'rgb(209, 209, 209)',
      backgroundColor: 'rgb(255, 255, 255)'
    },
    textInputAddress: {
      fontSize: (height / 45),
      marginLeft: (width / 36),
      paddingTop: (height / 128),
      backgroundColor: 'rgb(255, 255, 255)'
    },
    cardUploading: {
      width: (width / 1.28),
      height: (height / 3.4),
      marginHorizontal: ((width - (width / 1.28)) / 2),
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
    sumary: {
      height: (height / 16),
      marginTop: (height / 16),
      alignItems: 'center'
    },
    sumaryText: {
      fontSize: 12,
      color: 'rgb(255, 255, 255)',
    },
    button: {
      width,
      height: (height / 5),
      marginTop: (height / 16),
      alignItems: 'center'
    },
    registrationBtn: {
      width: ((width * 2) / 3),
      height: ((((width * 2) / 3) * 80) / 480),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 3,
      borderColor: 'rgb(209, 209, 209)'
    },
    registrationText: {
      color: 'rgb(255, 255, 255)',
      fontWeight: '700',
      fontSize: ((height * 3) / 128)
    }
  }
);
