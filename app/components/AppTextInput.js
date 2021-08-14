import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../config/colors";
import AppErrorMessage from "./AppErrorMessage";
import AppText from "./AppText";

function AppTextInput({
  label,
  required,
  LeftIcon,
  RightIcon,
  viewStyle,
  containerStyle,
  isWrong,
  onWrongText,
  editable = true,
  value = "",
  ...otherProps
}) {
  return (
    <View style={[{ marginBottom: 3 }, containerStyle]}>
      {label && (
        <AppText style={[styles.label, { color: "#2f4b7c" }]}>
          {label + " "}
          {required && (
            <Text style={{ color: colors.yellow, fontSize: 15 }}>*</Text>
          )}
        </AppText>
      )}
      <View style={[styles.container, viewStyle]}>
        {LeftIcon}
        <TextInput
          editable={editable}
          defaultValue={!editable ? value : ""}
          style={styles.textInput}
          {...otherProps}
          placeholderTextColor="#bbb"
        />
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
    paddingHorizontal: 6,
  },
  textInput: {
    fontSize: 14,
    marginHorizontal: 10,
    flex: 1,
    direction: "rtl",
    color: colors.black,
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 10,
    paddingHorizontal: 10,
  },
});

export default AppTextInput;
