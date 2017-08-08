import { StackNavigator } from 'react-navigation';
import EventScreen from '../Containers/EventScreen';
import EventDetailScreen from '../Containers/EventDetailScreen';

export const StackEventDetail = StackNavigator(
  {
    EventScreen: { screen: EventScreen },
    EventDetailScreen: { screen: EventDetailScreen }
  },
  {
    initialRouteName: 'EventScreen',
  }
);
