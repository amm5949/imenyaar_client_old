import React from "react";
import { Dimensions, StyleSheet, TouchableHighlight, View } from "react-native";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppDrawerItem({ label, Icon, onPress, focused }) {
  return (
    <TouchableHighlight
      underlayColor="#555"
      onPress={onPress}
      style={{ borderRadius: 10, marginHorizontal: 10, marginVertical: 15 }}
    >
      <View style={styles.container}>
        <AppText
          style={[styles.label, { color: focused ? colors.yellow : "#d4d8f0" }]}
        >
          {label}
        </AppText>
        {Icon}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  label: {
    fontSize: 11 / fontScale,
    color: colors.white,
    marginHorizontal: 10,
  },
});

export default AppDrawerItem;
