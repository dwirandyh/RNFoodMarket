/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
}

export default App;
