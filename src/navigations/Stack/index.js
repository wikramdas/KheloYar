import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '@src/constants';
import {Home, Splash} from '@src/screens';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      name={ROUTES.SPLASHSCREEN}
      initialRouteName={ROUTES.SPLASHSCREEN}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <AuthStack.Screen name={ROUTES.SPLASHSCREEN} component={Splash} />
      <AuthStack.Screen name={ROUTES.HOME} component={Home} />
    </AuthStack.Navigator>
  );
};
