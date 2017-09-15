import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: (height / 9.46),
    backgroundColor: 'rgb(20, 18, 18)',
    width: '100%'
  },
  drawerIconStyle: {
    width: (height / 13.34),
    height: (height / 13.34)
  },
  title: {
    justifyContent: 'center'
  },
  titleImage: {
    resizeMode: 'center'
  },
  tabIcon: {
    width: 25,
    height: 25
  },
  subsceneTitle: {
    height: (height / 32),
    width: ((height / 32) * 36) / 37,
    marginLeft: (width / 13),
    marginRight: (width / 40)
  },
  subsceneTitleText: {
    color: 'white'
  },
  profileName: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  tabBar: {
    height: 45
  }
})
