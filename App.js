import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Splash from "./app/screens/splash/Splash";
import LogInScreen from "./app/screens/LogIn Screen/LogInScreen";
import ForgetPasswordScreen from "./app/screens/LogIn Screen/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/LogIn Screen/ForgetPasswordSecurityCodeScreen";

export default function App() {
  return <Splash />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
