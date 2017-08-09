import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1
    },
    main: {
      resizeMode: 'stretch',
      width,
      height: ((width * 548) / 750)
    },
    pointCover: {
      backgroundColor: 'rgb(34, 37, 39)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: (height / 16)
    },
    point: {
      resizeMode: 'stretch',
      width: ((width * 5) / 6),
      height: ((((width * 5) / 6) * 843) / 627)
    },
    menu: {
      resizeMode: 'stretch',
      width,
      height: ((width * 1362) / 756)
    },
    access: {
      paddingBottom: (height / 26),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(80, 85, 86)'
    },
    imgSwiper: {
      resizeMode: 'stretch',
      width,
      height: ((width * 336) / 686)
    },
    accessContent: {
      paddingTop: (height / 32),
      paddingBottom: (height / 32),
      paddingLeft: (width / 20)
    },
    accessText: {
      fontSize: 14,
      marginBottom: (height / 64)
    },
    accessTextBold: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: (height / 64)
    },
    link: {
      fontSize: 14,
      color: 'rgb(141, 95, 95)',
      marginBottom: (height / 64)
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonAccess: {
      resizeMode: 'stretch',
      width: (width / 2.4),
      height: ((width / 2.4) / 4)
    },

    // Copy from CompanyDetailStyle.js
    outline: {
      width,
      backgroundColor: 'rgb(255, 255, 255)',
      paddingTop: (height / 21)
    },
    title: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (width / 14),
      paddingBottom: (width / 28)
    },
    textTitle: {
      paddingBottom: (height / 128),
      color: 'rgb(90, 85, 85)',
      fontWeight: 'bold'
    },
    lineTitle: {
      height: 1,
      width: (width / 9),
      backgroundColor: 'rgb(224, 213, 213)'
    },
    content: {
      width,
      flexDirection: 'row'
    },
    titleContent: {
      flex: 1,
      paddingBottom: (height / 64),
      paddingLeft: (width / 18)
    },
    detailContent: {
      flex: 3,
      paddingBottom: (height / 64),
      paddingRight: (width / 18)
    },
    titleLeftContent: {
      color: 'rgb(90, 85, 85)',
      fontWeight: 'bold',
      fontSize: (width / 30),
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 207, 207)'
    },
    titleRightContent: {
      color: 'rgb(90, 85, 85)',
      fontSize: (width / 30),
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 207, 207)',
      textAlignVertical: 'center'
    },
    titleRightBrow: {
      color: 'rgb(141, 95, 95)',
      fontSize: (width / 30),
      paddingVertical: (height / 64),
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 207, 207)'
    }
  }
);
