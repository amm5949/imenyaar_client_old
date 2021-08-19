import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function ListItemActions({ dragx, progress, onPressDelete, onPressEdit }) {
  const scale = dragx.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <Animated.View style={{ flexDirection: "row", transform: [{ scale }] }}>
      <TouchableOpacity onPress={onPressEdit} style={{ alignSelf: "center" }}>
        <Animated.View style={[styles.editButton, { transform: [{ scale }] }]}>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={15}
            color="white"
          />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete} style={{ alignSelf: "center" }}>
        <Animated.View
          style={[styles.deleteButton, { transform: [{ scale }] }]}
        >
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={15}
            color="white"
          />
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: colors.errorRed,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  editButton: {
    backgroundColor: "#1689fc",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 15,
  },
});

export default ListItemActions;