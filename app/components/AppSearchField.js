import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import { useFonts } from "expo-font";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppSearchField(props) {
  let [fontsLoaded] = useFonts({
    "iran-sans-regular": require("../assets/fonts/iran-sans-regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialCommunityIcons
            name="magnify"
            size={26}
            color={colors.white}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.inputViewBackground,
            borderRadius: 7,
            marginHorizontal: 5,
          }}
        >
          <TextInput
            style={[styles.TextInput, { fontFamily: "iran-sans-regular" }]}
            placeholder="جست و جو"
            placeholderTextColor="#a9adb8"
          ></TextInput>
          <MaterialCommunityIcons name="magnify" size={26} color="#a9adb8" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    // backgroundColor: "red",
    alignSelf: "center",
    overflow: "hidden",
  },
  searchButton: {
    backgroundColor: colors.yellow,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  TextInput: {
    backgroundColor: colors.inputViewBackground,
    flex: 1,
    // width: "80%",
    marginHorizontal: 5,
    height: "100%",
    borderRadius: 7,
    fontSize: 14 / fontScale,
    textAlign: "right",
  },
});

export default AppSearchField;
