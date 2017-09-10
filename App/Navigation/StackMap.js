import { StackNavigator } from 'react-navigation'
import AboutUsScreen from '../Containers/AboutUsScreen'
import MapBlayncafe from '../Containers/MapBlayncafe'

export const StackMap = StackNavigator(
  {
    AboutUsScreen: { screen: AboutUsScreen },
    MapBlayncafe: { screen: MapBlayncafe }
  },
  {
    // Default config for all screens
    initialRouteName: 'AboutUsScreen'
  }
)

// StackAuthentication: {
//   screen: StackAuthentication,
//   navigationOptions: {
//     header: null,
//   },
// },
