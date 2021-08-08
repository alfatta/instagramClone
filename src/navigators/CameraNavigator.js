import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Home from '../screens/Home';
import Camera from '../screens/Camera';

const MaterialTopTab = createMaterialTopTabNavigator()

const CameraNavigator = () => {
  return (
    <MaterialTopTab.Navigator initialRouteName="Home" tabBar={() => null}>
      <MaterialTopTab.Screen component={ Camera } name="Camera" />
      <MaterialTopTab.Screen component={ Home } name="Home" />
    </MaterialTopTab.Navigator>
  );
}
 
export default CameraNavigator;
