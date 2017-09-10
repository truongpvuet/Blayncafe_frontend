import { StackNavigator } from 'react-navigation'
import CompanyScreen from '../Containers/CompanyScreen'
import CompanyDetailScreen from '../Containers/CompanyDetailScreen'

// import styles from './Styles/NavigationStyles';

// Manifest of possible screens
export const StackCompany = StackNavigator(
  {
    CompanyScreen: { screen: CompanyScreen },
    CompanyDetailScreen: { screen: CompanyDetailScreen }
  },
  {
    // Default config for all screens
    initialRouteName: 'CompanyScreen'
  }
)

// StackAuthentication: {
//   screen: StackAuthentication,
//   navigationOptions: {
//     header: null,
//   },
// },
