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
      width,
      height: 400,
      backgroundColor: 'rgb(34, 37, 39)'
    }
  }
);
