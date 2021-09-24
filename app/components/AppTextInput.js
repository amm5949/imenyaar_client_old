import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../config/colors";
import AppErrorMessage from "./AppErrorMessage";
import AppText from "./AppText";
import { useFonts } from "expo-font";
import { Dimensions } from "react-native";
import { Platform } from "react-native";

const fontScale = Dimensions.get("window").fontScale;

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
  textValue,
  ...otherProps
}) {
  let [fontsLoaded] = useFonts({
    "iran-sans-regular": require("../assets/fonts/iran-sans-regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
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
            value={textValue}
            style={[styles.textInput, { fontFamily: "iran-sans-regular" }]}
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
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Platform.OS === "web" ? 12 : 6,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 11 / fontScale,
    flex: 1,
    height: Platform.OS === "web" ? "100%" : "auto",
    width: "100%",
    color: colors.black,
    textAlign: "right",
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 9 / fontScale,
    paddingHorizontal: 10,
  },
});

export default AppTextInput;
