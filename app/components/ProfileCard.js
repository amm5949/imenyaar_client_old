import React from "react";
import { Platform } from "react-native";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppCircularProgressBar from "./AppCircularProgressBar";
import AppText from "./AppText";
import { convertToPersianNumber } from "./UtilFunctions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

let accountName = "طلائی";
let accountColor = "#daa520";

function ProfileCard({
  picture = require("../assets/list_report_screen/sample-profile.jpg"),
  account = "gold",
  progress = 0.65,
  daysLeft = 29,
}) {
  if (account === "silver") {
    accountName = "نقره ای";
    accountColor = "#acacac";
  } else if (account === "bronze") {
    accountName = "برنزی";
    accountColor = "#cd7f32";
  }
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <AppText style={styles.profileHeaderText}>
          نوع حساب شما :{" "}
          <AppText style={[styles.profileHeaderText, { color: accountColor }]}>
            {accountName}
          </AppText>
        </AppText>
        <AppText style={styles.profileDetailsText}>
          {convertToPersianNumber(daysLeft.toString())} روز باقی مانده
        </AppText>
      </View>
      <AppCircularProgressBar
        radius={0.055 * windowHeight}
        percent={progress}
        strokeWidth={15}
      />
      <AppButton
        title="تمدید حساب"
        textStyle={styles.buttonText}
        viewStyle={styles.buttonView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 12 / fontScale,
    color: colors.white,
  },
  buttonView: {
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
    width: "auto",
    height: "auto",
    paddingVertical: 7,
    paddingHorizontal: 25,
  },
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 0.352 * windowHeight,
    width: 0.352 * windowHeight,
    borderRadius: 20,
    elevation: 10,
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  profileHeaderText: {
    fontSize: 13 / fontScale,
    color: colors.darkBlue,
  },
  profileDetailsText: {
    fontSize: 12 / fontScale,
    color: "#aaa",
    marginTop: Platform.OS === "web" ? 5 : 0,
  },
});

export default ProfileCard;
