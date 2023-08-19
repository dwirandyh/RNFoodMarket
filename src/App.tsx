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
import { RootState, store } from './redux/store';
import FlashMessage from 'react-native-flash-message';
import { Loading } from './components';
import { useAppSelector } from './hook';


const MainApp = () => {
  const isLoading = useAppSelector((state: RootState) => state.global.isLoading)

  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position='top' />
      {isLoading && <Loading />}
    </NavigationContainer >
  )
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
