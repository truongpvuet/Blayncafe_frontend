import React from 'react';
import { Dimensions } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import { StackMain } from './StackMain';
import EventListScreen from '../Containers/EventListScreen';
import { StackCompany } from './StackCompany';
import AboutUsScreen from '../Containers/AboutUsScreen';
import MenuScreen from '../Containers/MenuScreen';

// import styles from './Styles/NavigationStyles';
const { height, width } = Dimensions.get('window');

// Manifest of possible screens
const TabHome = TabNavigator(
  {
    StackMain: { screen: StackMain },
    EventListScreen: { screen: EventListScreen },
    StackCompany: { screen: StackCompany },
    AboutUsScreen: { screen: AboutUsScreen }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      tabStyle: {
        height: height / 14,
        borderTopWidth: 2,
        borderTopColor: 'rgb(172, 172, 172)'
      },
      style: {
        backgroundColor: 'rgb(245,245,245)'
      },
      indicatorStyle: {
        backgroundColor: 'rgb(245,245,245)'
      }
    }
  }
);

const PrimaryNav = DrawerNavigator(
  {
    Home: {
      screen: TabHome
    }
  },
  {
    drawerWidth: width,
    drawerPosition: 'right',
    contentComponent: props => <MenuScreen {...props} />
  }
);

export default PrimaryNav;
