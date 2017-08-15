import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: (height / 13.34),
      backgroundColor: 'rgb(20, 18, 18)'
    },
    icon: {
      width: 50,
      height: 50
    },
    title: {
      justifyContent: 'center'
    },
    profileName: {
      flexDirection: 'row',
    },
    userIcon: {
      height: (height / 32),
      width: ((height / 32) * 36) / 37,
      marginLeft: (width / 13),
      marginRight: (width / 40)
    },
    textProfile: {
      color: 'white'
    }
  }
);
