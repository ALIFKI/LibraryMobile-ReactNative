/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/routes';
import { API_URL } from '@env'


const App: () => React$Node = () => {
  return (
    <>
    <Routes/>
    </>
  );
};

export default App;
