import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Splash from "./app/screens/splash/Splash";
<<<<<<< HEAD
import LogInScreen from "./app/screens/LogIn Screen/LogInScreen";
import ForgetPasswordScreen from "./app/screens/LogIn Screen/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/LogIn Screen/ForgetPasswordSecurityCodeScreen";
import SecurityCodeScreen from "./app/screens/LogIn Screen/SecurityCodeScreen";
import ChangePasswordScreen from "./app/screens/LogIn Screen/ChangePasswordScreen";

export default function App() {
  return <ChangePasswordScreen />;
=======
import LogInScreen from "./app/screens/login/LogInScreen";
import ForgetPasswordScreen from "./app/screens/login/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/login/ForgetPasswordSecurityCodeScreen";

export default function App() {
  return <LogInScreen />;
>>>>>>> be063bb6390d193daa328778a8fc95ca4d5bbf46
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
