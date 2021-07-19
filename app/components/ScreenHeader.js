import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import NavigationIcon from "../components/icons/NavigationIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ScreenHeader({ profilePicture, headerText }) {
  return (
    <View style={styles.container}>
      <Image
        source={profilePicture}
        resizeMode="contain"
        style={styles.profilePicture}
      />
      <AppText style={styles.headerText}>{headerText}</AppText>
      <NavigationIcon size={30} color={colors.yellow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 0.13 * windowHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerText: {
    fontSize: 15,
    color: "#58508d",
    marginRight: 0.2 * windowWidth,
  },
  profilePicture: {
    width: 35,
    height: 35,
    marginRight: 0.19 * windowWidth,
  },
});

export default ScreenHeader;
