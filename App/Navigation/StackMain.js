import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';
import AuthenticationScreen from '../Containers/AuthenticationScreen';
import CoffeeShopScreen from '../Containers/CoffeeShopScreen';
import EventListScreen from '../Containers/EventListScreen';
import PersonalInfoScreen from '../Containers/PersonalInfoScreen';
import PrivacyPolicyScreen from '../Containers/PrivacyPolicyScreen';
import TosScreen from '../Containers/TosScreen';

// import styles from './Styles/NavigationStyles';

// Manifest of possible screens
export const StackMain = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    AuthenticationScreen: { screen: AuthenticationScreen },
    CoffeeShopScreen: { screen: CoffeeShopScreen },
    EventListScreen: { screen: EventListScreen },
    PersonalInfoScreen: { screen: PersonalInfoScreen, headerMode: 'none' },
    PrivacyPolicyScreen: { screen: PrivacyPolicyScreen },
    TosScreen: { screen: TosScreen },
  },
  {
    // Default config for all screens
    initialRouteName: 'HomeScreen',
  }
);
