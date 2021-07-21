import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function CardItem({
  width = 0.45 * windowWidth,
  text,
  Icon,
  textStyle,
  viewStyle,
  ...otherProps
}) {
  return (
    <View
      style={[styles.container, { width: width }, viewStyle]}
      {...otherProps}
    >
      <AppText style={[styles.text, textStyle]}>{text}</AppText>
      {Icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#eee",
    borderColor: "#eef",
    borderWidth: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingVertical: 17,
    paddingRight: 8,
    borderRadius: 10,
    elevation: 3,
    overflow: "hidden",
    // margin: 7,
  },
  text: {
    fontSize: 10.5,
    color: "#7a7c83",
    marginRight: 5,
    width: "85%",
  },
});

export default CardItem;
