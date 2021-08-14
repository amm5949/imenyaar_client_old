import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

function AppErrorMessage({ message, style }) {
  return <AppText style={[styles.message, style]}>{message}</AppText>;
}

const styles = StyleSheet.create({
  message: {
    fontSize: 10,
    marginTop: 3,
    color: "red",
  },
});

export default AppErrorMessage;
