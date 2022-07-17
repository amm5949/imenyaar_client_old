import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import colors from "../config/colors";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function CardBox({
  width,
  title,
  text,
  buttonTitle,
  icon,
  style,
  textStyle,
  viewStyle,
  onPress,
  ...otherProps
}) {
  return (
    <View
      style={[styles.container, { width: width }, viewStyle]}
      {...otherProps}
    >
      <View style={styles.titleHolder}>
        <AppText style={[styles.title, style]}>{title}</AppText>
      </View>
      <Card containerStyle={styles.card}>
        <View style={styles.textHolder}>
          <AppText style={styles.text}>{text}</AppText>
        </View>

        <AppButton
          LeftIcon={icon}
          onPress={onPress}
          viewStyle={styles.button}
          title={buttonTitle}
          color="#1E6738"
          textStyle={styles.buttonTitle}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    overflow: "hidden",
    marginTop: 30,
  },
  card: {
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    width: "100%",
    flex: 3,
    flexDirection: "column",
    margin: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "white",
  },
  titleHolder: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 14 / fontScale,
    color: "#58508d",
    paddingVertical: 10,
  },
  textHolder: {
    flex: 3,
    justifyContent: "center",
    display: "flex",
  },
  text: {
    fontSize: 12 / fontScale,
    color: "#333333",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttonHolder: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.yellow,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 30,
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    position: "relative",
    fontSize: 11 / fontScale,
    color: "#ffffff",
  },
});

export default CardBox;
