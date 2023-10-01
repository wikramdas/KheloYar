import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from '@src/navigations';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const Stack = createNativeStackNavigator();
export const App = () => {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
