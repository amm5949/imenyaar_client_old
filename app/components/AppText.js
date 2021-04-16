import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function AppText({ children, style, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    IranSans: require("../assets/fonts/iran-sans.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <Text
        style={[styles.text, style, { fontFamily: "IranSans" }]}
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
    direction: "rtl",
  },
});

export default AppText;
