import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import CoffeeHistoryScreen from '../Containers/CoffeeHistoryScreen'
import AttendEventScreen from '../Containers/AttendEventScreen'
import PersonalInfoScreen from '../Containers/PersonalInfoScreen'
import PrivacyPolicyScreen from '../Containers/PrivacyPolicyScreen'
import TosScreen from '../Containers/TosScreen'
import ProfilePolicyScreen from '../Containers/ProfilePolicyScreen'

// Import Authentication screens stack (containers)
import SignInScreen from '../Containers/SignInScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import SignupProfileScreen from '../Containers/SignupProfileScreen'
import PasswordRecoveryScreen from '../Containers/PasswordRecoveryScreen'
import EmailVerifyScreen from '../Containers/EmailVerifyScreen'
// Import Authentication screens stack (Components)
import SignupSuccess from '../Components/SignupSuccess'
import RecoverySuccess from '../Components/RecoverySuccess'
import VerifyMessage from '../Components/VerifyMessage'

// import styles from './Styles/NavigationStyles';

// Manifest of possible screens
export const StackMain = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CoffeeHistoryScreen: { screen: CoffeeHistoryScreen },
    AttendEventScreen: { screen: AttendEventScreen },
    PersonalInfoScreen: { screen: PersonalInfoScreen },
    PrivacyPolicyScreen: { screen: PrivacyPolicyScreen },
    TosScreen: { screen: TosScreen },
    ProfilePolicyScreen: { screen: ProfilePolicyScreen },

    SignInScreen: { screen: SignInScreen },
    SignUpScreen: { screen: SignUpScreen },
    SignupProfileScreen: { screen: SignupProfileScreen },
    PasswordRecoveryScreen: { screen: PasswordRecoveryScreen },
    EmailVerifyScreen: { screen: EmailVerifyScreen },
    SignupSuccess: { screen: SignupSuccess },
    RecoverySuccess: { screen: RecoverySuccess },
    VerifyMessage: { screen: VerifyMessage }
  },
  {
    // Default config for all screens
    initialRouteName: 'HomeScreen'
  }
)

// StackAuthentication: {
//   screen: StackAuthentication,
//   navigationOptions: {
//     header: null,
//   },
// },
