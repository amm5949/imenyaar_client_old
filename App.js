import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Splash from "./app/screens/splash/SplashFirstScreen";
import LogInScreen from "./app/screens/login/LogInScreen";
import SignUpScreen from "./app/screens/login/SignUpScreen";
import ForgetPasswordScreen from "./app/screens/login/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/login/ForgetPasswordSecurityCodeScreen";
import SecurityCodeScreen from "./app/screens/login/SecurityCodeScreen";
import ChangePasswordScreen from "./app/screens/login/ChangePasswordScreen";

import ConfirmPurchaseScreen from "./app/screens/activate-account/ConfirmPurchaseScreen";
import ActivateAccountScreen from "./app/screens/activate-account/ActivateAccountScreen";
import SplashFirstScreen from "./app/screens/splash/SplashFirstScreen";
import SplashSecondScreen from "./app/screens/splash/SplashSecondScreen";
import SplashThirdScreen from "./app/screens/splash/SplashThirdScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashFirstScreen" component={SplashFirstScreen} />
        <Stack.Screen
          name="SplashSecondScreen"
          component={SplashSecondScreen}
        />
        <Stack.Screen name="SplashThirdScreen" component={SplashThirdScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen
          name="ActivateAccountScreen"
          component={ActivateAccountScreen}
        />
        <Stack.Screen
          name="ConfirmPurchaseScreen"
          component={ConfirmPurchaseScreen}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen
          name="ForgetPasswordSecurityCodeScreen"
          component={ForgetPasswordSecurityCodeScreen}
        />
        <Stack.Screen
          name="SecurityCodeScreen"
          component={SecurityCodeScreen}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
