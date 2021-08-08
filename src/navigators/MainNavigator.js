import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Explore from '../screens/Explore';
import CameraNavigator from './CameraNavigator';

const BottomTab = createBottomTabNavigator()

const navigatorScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      switch (route.name) {
        case 'CameraNavigator':
          iconName = focused ? 'home' : 'home-outline'
          break;
        case 'Explore':
          iconName = focused ? 'search' : 'search-outline'
          break;
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  }
}

const MainNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={ navigatorScreenOptions }>
      <BottomTab.Screen component={ CameraNavigator } name="CameraNavigator" />
      <BottomTab.Screen component={ Explore } name="Explore" />
    </BottomTab.Navigator>
  );
}
 
export default MainNavigator;
