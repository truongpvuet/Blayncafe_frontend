import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';
import CoffeeShopScreen from '../Containers/CoffeeShopScreen';
import AttendEventScreen from '../Containers/AttendEventScreen';
import PersonalInfoScreen from '../Containers/PersonalInfoScreen';
import PrivacyPolicyScreen from '../Containers/PrivacyPolicyScreen';
import TosScreen from '../Containers/TosScreen';

// Import Authentication screens stack
import SignInScreen from '../Containers/SignInScreen';
import SignUpScreen from '../Containers/SignUpScreen';
import SignupProfileScreen from '../Containers/SignupProfileScreen';
import PasswordRecoveryScreen from '../Containers/PasswordRecoveryScreen';
import EmailVerifyScreen from '../Containers/EmailVerifyScreen';
import LogOut from '../Components/LogOut';

// import styles from './Styles/NavigationStyles';

// Manifest of possible screens
export const StackMain = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CoffeeShopScreen: { screen: CoffeeShopScreen },
    AttendEventScreen: { screen: AttendEventScreen },
    PersonalInfoScreen: { screen: PersonalInfoScreen },
    PrivacyPolicyScreen: { screen: PrivacyPolicyScreen },
    TosScreen: { screen: TosScreen },

    SignInScreen: { screen: SignInScreen },
    SignUpScreen: { screen: SignUpScreen },
    SignupProfileScreen: { screen: SignupProfileScreen },
    PasswordRecoveryScreen: { screen: PasswordRecoveryScreen },
    EmailVerifyScreen: { screen: EmailVerifyScreen },
    LogOut: { screen: LogOut },
  },
  {
    // Default config for all screens
    initialRouteName: 'HomeScreen',
  }
);

// StackAuthentication: {
//   screen: StackAuthentication,
//   navigationOptions: {
//     header: null,
//   },
// },
