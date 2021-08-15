import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Explore from '../screens/Explore';
import CameraNavigator from './CameraNavigator';
import Favorit from '../screens/Favorit';
import Profile from '../screens/Profile';
import AddPost from '../screens/AddPost';

const BottomTab = createBottomTabNavigator()

const navigatorScreenOptions = ({ route }) => {
  return {
    headerShown: false,
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'black',
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
        case 'AddPost':
          iconName = focused ? 'add-circle' : 'add-circle-outline'
          break;
        case 'Favorit':
          iconName = focused ? 'heart' : 'heart-outline'
          break;
        case 'Profile':
          iconName = focused ? 'person' : 'person-outline'
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
      <BottomTab.Screen component={ AddPost } name="AddPost" />
      <BottomTab.Screen component={ Favorit } name="Favorit" />
      <BottomTab.Screen component={ Profile } name="Profile" />
    </BottomTab.Navigator>
  );
}
 
export default MainNavigator;
