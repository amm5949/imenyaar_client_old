import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import AppText from "./AppText";

import Svg from "react-native-svg";
import UserIcon from "./icons/UserIcon";
import AppErrorMessage from "./AppErrorMessage";
import colors from "../config/colors";

function AppTextInput({
  label,
  required,
  LeftIcon,
  RightIcon,
  viewStyle,
  isWrong,
  onWrongText,
  ...otherProps
}) {
  return (
    <View style={{ marginBottom: 7 }}>
      <AppText style={[styles.label, { color: "#2f4b7c" }]}>
        {label + " "}
        {required && (
          <Text style={{ color: colors.yellow, fontSize: 15 }}>*</Text>
        )}
      </AppText>
      <View style={[styles.container, viewStyle]}>
        {LeftIcon}
        <TextInput style={styles.textInput} {...otherProps} />
        {RightIcon}
      </View>
      {isWrong && (
        <AppErrorMessage style={styles.label} message={onWrongText} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
  },
  textInput: {
    marginHorizontal: 10,
    flex: 1,
    direction: "rtl",
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 10,
    paddingHorizontal: 10,
  },
});

export default AppTextInput;
