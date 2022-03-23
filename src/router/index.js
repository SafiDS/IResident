import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';
import SplashScreen from '../screens/auth/splash';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={Routes.Splash} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;