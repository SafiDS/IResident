import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';
import SplashScreen from '../screens/auth/splash';
import IntroScreen from '../screens/auth/intro';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={Routes.Splash} component={SplashScreen} />
        <Stack.Screen name={Routes.Intro} component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;