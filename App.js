import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import AppCircularProgressBar from "./app/components/AppCircularProgressBar";
import AppDatePicker from "./app/components/AppDatePicker";
import ActivateAccountScreen from "./app/screens/activate-account/ActivateAccountScreen";
import ConfirmPurchaseScreen from "./app/screens/activate-account/ConfirmPurchaseScreen";
import ChangePasswordScreen from "./app/screens/login/ChangePasswordScreen";
import ForgetPasswordScreen from "./app/screens/login/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/login/ForgetPasswordSecurityCodeScreen";
import LogInScreen from "./app/screens/login/LogInScreen";
import SecurityCodeScreen from "./app/screens/login/SecurityCodeScreen";
import SignUpScreen from "./app/screens/login/SignUpScreen";
import NavigationDrawer from "./app/screens/navigation-drawer/NavigationDrawer";
import ProfileScreen from "./app/screens/profile/ProfileScreen";
import CheckListScreen from "./app/screens/projects/CheckListScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    // <ProfileScreen />
    // <CheckListScreen />
    <AppDatePicker />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

    //     <Stack.Screen name="LogInScreen" component={LogInScreen} />
    //     <Stack.Screen
    //       name="ActivateAccountScreen"
    //       component={ActivateAccountScreen}
    //     />
    //     <Stack.Screen
    //       name="ConfirmPurchaseScreen"
    //       component={ConfirmPurchaseScreen}
    //     />
    //     <Stack.Screen
    //       name="ForgetPasswordScreen"
    //       component={ForgetPasswordScreen}
    //     />
    //     <Stack.Screen
    //       name="ForgetPasswordSecurityCodeScreen"
    //       component={ForgetPasswordSecurityCodeScreen}
    //     />
    //     <Stack.Screen
    //       name="SecurityCodeScreen"
    //       component={SecurityCodeScreen}
    //     />
    //     <Stack.Screen
    //       name="ChangePasswordScreen"
    //       component={ChangePasswordScreen}
    //     />
    //     <Stack.Screen name="NavigationScreens" component={NavigationDrawer} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
