import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./routes";
import SplashScreen from "../screens/auth/splash";
import IntroScreen from "../screens/auth/intro";
import LoginRegisterScreen from "../screens/auth/loginregister";
import OtpVerifyScreen from "../screens/auth/otpverify";
import DashboardScreen from "../screens/dashboard";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Splash} component={SplashScreen} />
        <Stack.Screen name={Routes.Intro} component={IntroScreen} />
        <Stack.Screen
          name={Routes.LoginRegister}
          component={LoginRegisterScreen}
        />
        <Stack.Screen name={Routes.OtpVerify} component={OtpVerifyScreen} />
        <Stack.Screen name={Routes.Dashboard} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
