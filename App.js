import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import CameraNavigator from './src/navigators/CameraNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <CameraNavigator />
    </NavigationContainer>
  );
}

export default App;
