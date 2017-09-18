import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');
// 640, 360
// 1334, 750

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    image: {
      width: (width / 3.24),
      height: (width / 3.24),
      marginRight: (width / 24)
    },
    content: {
      flexGrow: 1,
      flex: 1,
      flexDirection: 'column'
    },
    datetime: {
      backgroundColor: '#524D4D',
      color: '#B0B0B0',
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#524D4D',
      overflow: 'hidden',
      width: (width / 1.8),
      height: (height / 32),
      marginBottom: (height / 64),
      paddingLeft: (width / 72)
    },
    divider: {
      height: 1,
      width: (width / 1.8),
      backgroundColor: '#333536',
      marginVertical: (height / 80)
    },
    redNewImage: {
      resizeMode: 'stretch',
      width: (((height / 35.6) * 58) / 32),
      height: (height / 35.6),
    },
    description: {
      color: '#CAD1D4',
      fontWeight: 'bold'
    },
    notes: {
      fontSize: (height / 53.3),
      color: '#595556'
    }
  }
)
