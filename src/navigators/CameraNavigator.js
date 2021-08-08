import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Camera from '../screens/Camera';
import MainNavigator from './MainNavigator';

const MaterialTopTab = createMaterialTopTabNavigator()

const CameraNavigator = () => {
  return (
    <MaterialTopTab.Navigator
      screenOptions={ ({ route }) => {
        console.log(route);
        return {
          swipeEnabled: route.name == 'Home'
        }
      }}
      initialRouteName="MainNavigator"
      tabBar={() => null}>
      <MaterialTopTab.Screen component={ Camera } name="Camera" />
      <MaterialTopTab.Screen component={ MainNavigator } name="MainNavigator" />
    </MaterialTopTab.Navigator>
  );
}
 
export default CameraNavigator;
