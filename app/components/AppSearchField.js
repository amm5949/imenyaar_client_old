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
import AppTextInput from "./AppTextInput";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppSearchField(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchButton}>
        <MaterialCommunityIcons name="magnify" size={26} color={colors.white} />
      </TouchableOpacity>

      <AppTextInput
        viewStyle={styles.textInput}
        placeholder="جست و جو"
        RightIcon={
          <MaterialCommunityIcons
            style={{ marginLeft: 5 }}
            name="magnify"
            size={26}
            color="#a9adb8"
          />
        }
        containerStyle={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    overflow: "hidden",
    paddingHorizontal: 15,
  },
  searchButton: {
    backgroundColor: colors.yellow,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
  },
  textInput: {
    backgroundColor: colors.inputViewBackground,
    // flex: 1,
    marginLeft: 5,
    height: 40,
    borderRadius: 7,
  },
});

export default AppSearchField;
