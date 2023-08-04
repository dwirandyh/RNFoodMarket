/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
      <FlashMessage position='top' />
    </NavigationContainer>
  );
}

export default App;
