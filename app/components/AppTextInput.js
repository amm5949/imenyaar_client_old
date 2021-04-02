import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";

import Svg from "react-native-svg";
import UserIcon from "./icons/UserIcon";

function AppTextInput({ label, required, LeftIcon, RightIcon, ...otherProps }) {
  return (
    <View>
      <AppText style={styles.label}>{label + (required ? " *" : "")}</AppText>
      <View style={styles.container}>
        {LeftIcon}
        <TextInput style={styles.textInput} {...otherProps} />
        {RightIcon}
      </View>
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
    marginBottom: 20,
  },
  textInput: {
    marginLeft: 10,
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
