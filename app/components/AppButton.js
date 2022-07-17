import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function AppButton({
  title,
  onPress,
  viewStyle,
  textStyle,
  LeftIcon,
  RightIcon,
  color = "white",
}) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }, viewStyle]}
      onPress={onPress}
    >
      {LeftIcon}
      <AppText style={textStyle}>{title}</AppText>
      {RightIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 92,
    height: 49,
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppButton;
