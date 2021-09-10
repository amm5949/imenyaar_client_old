import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import { Platform } from "react-native";
import AppText from "./AppText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function LoadingAnimation({ visible = true }) {
  if (!visible) return null;
  return Platform.OS === "web" ? (
    <AppText>لطفا منتظر بمانید...</AppText>
  ) : (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/lf30_editor_gqxwohqa.json")}
      style={{ width: 150 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoadingAnimation;
