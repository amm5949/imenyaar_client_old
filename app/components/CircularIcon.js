import React from "react";
import { View, StyleSheet } from "react-native";

function CircularIcon({ size, Icon }) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      {Icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 50,
    backgroundColor: "#fff",
  },
});

export default CircularIcon;
