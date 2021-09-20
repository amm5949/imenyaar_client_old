import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import WebModal from "modal-enhanced-react-native-web";
import { Platform } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import AppButton from "./AppButton";

let Modal;
if (Platform.OS === "web") Modal = WebModal;
else Modal = require("react-native").Modal;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppWarningModal({
  visible = false,
  text = "خطا",
  detailText = "جزئیات خطا",
  buttonText = "باشه",
  onPress,
}) {
  return (
    <Modal
      style={{ margin: 0 }}
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#00000099",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: -50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.iconView}>
              <MaterialCommunityIcons
                name="alert-outline"
                color={colors.errorRed}
                size={40}
              />
            </View>
          </View>
          <AppText w="b" style={styles.text}>
            {text}
          </AppText>
          <AppText w="m" style={styles.detailText}>
            {detailText}
          </AppText>
          <AppButton
            viewStyle={styles.button}
            textStyle={styles.buttonText}
            title={buttonText}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "auto",
    height: "auto",
    backgroundColor: colors.errorRed,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15 / fontScale,
    color: colors.white,
  },
  container: {
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: 15,
    borderTopWidth: 15,
    borderColor: colors.errorRed,
    paddingTop: 30,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  iconView: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 60,
    elevation: 10,
    shadowRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20 / fontScale,
    color: colors.darkBlue,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14 / fontScale,
    color: "#999",
    marginBottom: 15,
  },
});

export default AppWarningModal;
