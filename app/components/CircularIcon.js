import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

function CircularIcon({ size, Icon, onPress, color, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
          },
          style,
        ]}
      >
        {Icon}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // elevation: 50,
    backgroundColor: "#fff",
  },
});

export default CircularIcon;
