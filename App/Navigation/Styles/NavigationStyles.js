import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: (height / 9.46),
    backgroundColor: 'rgb(20, 18, 18)'
  },
  drawerIconStyle: {
    width: (height / 13.34),
    height: (height / 13.34)
  },
  title: {
    justifyContent: 'center'
  },
  titleImage: {
    resizeMode: 'stretch',
    height: (height / 26.68),
    width: (((height / 26.68) * 188) / 41)
  },
  tabIcon: {
    width: 25,
    height: 25
  }
})
