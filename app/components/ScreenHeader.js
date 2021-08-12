import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import NavigationIcon from "../components/icons/NavigationIcon";
import AppSearchField from "./AppSearchField";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ScreenHeader({
  profilePicture = require("../assets/list_report_screen/sample-profile.jpg"),
  headerText = "لیست گزارشات",
  onPressNavigation,
  hasSearchField = false,
}) {
  return (
    <View
      style={[
        styles.container,
        { height: hasSearchField ? 0.192 * windowHeight : 0.13 * windowHeight },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          // position: "relative",
          // top: 10,
          marginTop: 20,
          marginBottom: hasSearchField ? 15 : 0,
        }}
      >
        <Image
          source={profilePicture}
          resizeMode="contain"
          style={styles.profilePicture}
        />
        <AppText style={styles.headerText}>{headerText}</AppText>
        <TouchableOpacity onPress={onPressNavigation}>
          <NavigationIcon size={30} color={colors.yellow} />
        </TouchableOpacity>
      </View>
      {hasSearchField && <AppSearchField />}
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
    // flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 15 / fontScale,
    color: "#58508d",
    marginRight: 0.2 * windowWidth,
  },
  profilePicture: {
    width: 35,
    height: 35,
    marginRight: 0.19 * windowWidth,
    borderRadius: 100,
  },
});

export default ScreenHeader;
