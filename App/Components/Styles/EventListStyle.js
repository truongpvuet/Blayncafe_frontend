import { StyleSheet } from 'react-native';

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'row'
    },
    image: {
      width: 107,
      height: 107,
      marginRight: 15
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
      width: 200,
      marginBottom: 10
    },
    divider: {
      height: 1,
      width: 200,
      backgroundColor: '#333536',
      marginTop: 8,
      marginBottom: 8
    },
    description: {
      color: '#CAD1D4',
      fontWeight: 'bold'
    },
    notes: {
      fontSize: 11,
      color: '#595556'
    }
  }
);
