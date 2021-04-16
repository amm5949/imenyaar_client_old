import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Splash from "./app/screens/splash/Splash";
import LogInScreen from "./app/screens/login/LogInScreen";
import ForgetPasswordScreen from "./app/screens/login/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/login/ForgetPasswordSecurityCodeScreen";
import SecurityCodeScreen from "./app/screens/login/SecurityCodeScreen";
import ChangePasswordScreen from "./app/screens/login/ChangePasswordScreen";
import ConfirmPurchaseScreen from "./app/screens/activate-account/ConfirmPurchaseScreen";
import ActivateAccountCard from "./app/components/ActivateAccountCard";
import ActivateAccountScreen from "./app/screens/activate-account/ActivateAccountScreen";

export default function App() {
  return <ActivateAccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
