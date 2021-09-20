import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function AppText({ children, style, w = "m", ...otherProps }) {
  let [fontsLoaded] = useFonts({
    "iran-sans-regular": require("../assets/fonts/iran-sans-regular.ttf"),
    "iran-sans-medium": require("../assets/fonts/iran-sans-medium.ttf"),
    "iran-sans-bold": require("../assets/fonts/iran-sans-bold.ttf"),
    "iran-sans-light": require("../assets/fonts/iran-sans-light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    let fontFamily = "iran-sans-medium";
    switch (w) {
      case "r":
        fontFamily = "iran-sans-regular";
        break;
      case "b":
        fontFamily = "iran-sans-bold";
        break;
      case "l":
        fontFamily = "iran-sans-light";
        break;
    }
    return (
      <Text
        style={[styles.text, style, { fontFamily: fontFamily }]}
        {...otherProps}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#201a31",
    fontSize: 17,
    // direction: "rtl",
  },
});

export default AppText;
