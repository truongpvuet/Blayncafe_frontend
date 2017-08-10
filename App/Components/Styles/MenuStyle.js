import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750
const widthImage = 100;
const heightImage = 100;

const heightfeaturedInfo = ((height / 3.2) * 13) / 40;
const heightpolicy = (height - (height / 13.34) - (height / 3.2) - (height / 3.1));

export default StyleSheet.create(
  {
    container: {
      flex: 1
    },
    header: {
      height: (height / 13.34),
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'rgb(20, 18, 18)'
    },
    backIcon: {
      width: (widthImage / 2),
      height: (heightImage / 2)
    },
    title: {
      justifyContent: 'center'
    },
    titleIcon: {
      width: (width / 8.9),
      height: (height / 44.5)
    },
    undefinedBlank: {
      width: (widthImage / 2),
      height: (heightImage / 2)
    },
    menu: {
      backgroundColor: 'rgb(34, 37, 39)'
    },
    menuNavigation: {
      height: (height / 3.2),
    },
    featuredInfo: {
      height: heightfeaturedInfo,
      flexDirection: 'row',
      backgroundColor: 'rgb(47, 51, 52)',
      borderBottomWidth: 2,
      borderBottomColor: 'rgb(34, 37, 39)',
      borderTopWidth: 1,
      borderTopColor: 'rgb(34, 37, 39)'
    },
    featuredImage: {
      height: heightfeaturedInfo - (width / 26),
      width: heightfeaturedInfo - (width / 26),
      marginHorizontal: (width / 28),
    },
    nameAndID: {
      marginVertical: (height / 64)
    },
    nameField: {
      color: 'rgb(231, 226, 226)'
    },
    idFrame: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: (width / 72),
      marginTop: (width / 70)
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
      fontSize: 12
    },
    profile: {
      height: ((height / 3.2) * 9) / 40,
      backgroundColor: 'rgb(47, 51, 52)',
      borderBottomWidth: 2,
      borderBottomColor: 'rgb(34, 37, 39)',
      flexDirection: 'row',
      alignItems: 'center'
    },
    userIcon: {
      height: (height / 32),
      width: ((height / 32) * 36) / 37,
      marginLeft: (width / 13),
      marginRight: (width / 40)
    },
    textProfile: {
      color: 'rgb(231, 226, 226)',
    },
    eventList: {
      height: ((height / 3.2) * 9) / 40,
      backgroundColor: 'rgb(47, 51, 52)',
      borderBottomWidth: 2,
      borderBottomColor: 'rgb(34, 37, 39)',
      flexDirection: 'row',
      alignItems: 'center'
    },
    eventIcon: {
      height: (height / 32),
      width: ((height / 32) * 36) / 35,
      marginLeft: (width / 13),
      marginRight: (width / 40)
    },
    textEvent: {
      color: 'rgb(231, 226, 226)',
    },
    numberIcon: {
      height: (height / 35),
      width: (height / 35),
      marginLeft: (width / 40),
      justifyContent: 'center',
      alignItems: 'center'
    },
    coffeeShop: {
      height: ((height / 3.2) * 9) / 40,
      backgroundColor: 'rgb(47, 51, 52)',
      borderBottomWidth: 2,
      borderBottomColor: 'rgb(34, 37, 39)',
      flexDirection: 'row',
      alignItems: 'center'
    },
    shopIcon: {
      height: (height / 32),
      width: (height / 32),
      marginLeft: (width / 13),
      marginRight: (width / 40)
    },
    textShop: {
      color: 'rgb(231, 226, 226)',
    },
    betweenBlank: {
      height: (height / 3.1),
      backgroundColor: 'rgb(34, 37, 39)'
    },
    policy: {
      height: heightpolicy
    },
    useTerm: {
      height: (height * 44) / 640,
      backgroundColor: 'rgb(34, 37, 39)',
      borderTopWidth: 1,
      borderTopColor: 'rgb(60, 64, 65)',
      padding: (width / 36)
    },
    privacyPolicy: {
      height: (height * 44) / 640,
      backgroundColor: 'rgb(34, 37, 39)',
      borderTopWidth: 1,
      borderTopColor: 'rgb(60, 64, 65)',
      padding: (width / 36)
    },
    blackBlank: {
      height: (height * 30) / 640,
      backgroundColor: 'rgb(34, 37, 39)',
      borderTopWidth: 1,
      borderTopColor: 'rgb(60, 64, 65)'
    },
    logOut: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(34, 37, 39)',
      height: (height * 44) / 640,
      borderTopWidth: 1,
      borderTopColor: 'rgb(60, 64, 65)'
    },
    policyText: {
      color: 'rgb(231, 226, 226)'
    }
  }
);
