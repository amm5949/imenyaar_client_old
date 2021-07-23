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
      <AppText style={[styles.text, textStyle]} numberOfLines={1}>
        {text}
      </AppText>
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
    borderColor: "#fff",
    borderWidth: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingVertical: 14,
    paddingRight: 8,
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
    // marginLeft: 7,
  },
  text: {
    fontSize: 9 / fontScale,
    color: "#7a7c83",
    marginRight: 2,
    width: "85%",
    position: "relative",
    top: 2,
  },
});

export default CardItem;
