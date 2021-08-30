import React, { useState } from "react";
import { View, Switch, StyleSheet, Dimensions, Text } from "react-native";
import ToggleSwitch from "../components/ToggleSwitch";
import AppText from "./AppText";
import colors from "../config/colors";
import { useFonts } from "expo-font";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppSwitchInput({
  label = "",
  required,
  viewStyle,
  containerStyle,
  ...otherProps
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={[{ marginBottom: 3 }, containerStyle]}>
      {label && (
        <AppText style={[styles.label, { color: "#2f4b7c" }]}>
          {label + " "}
          {required && (
            <Text style={{ color: colors.yellow, fontSize: 15 / fontScale }}>
              *
            </Text>
          )}
        </AppText>
      )}
      <View style={[styles.container, viewStyle]}>
        <AppText style={styles.text}>آیا پروژه زون بندی دارد؟</AppText>
        <ToggleSwitch
          isOn={isEnabled}
          onColor="#ff7c43"
          offColor={colors.inputViewBackground}
          size="medium"
          onToggle={(isOn) => setIsEnabled(isOn)}
        />
      </View>
    </View>
  );
}

export default AppSwitchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 10 / fontScale,
    marginHorizontal: 10,
    flex: 1,
    direction: "rtl",
    color: colors.black,
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 9 / fontScale,
    paddingHorizontal: 10,
    direction: "rtl",
  },
});
