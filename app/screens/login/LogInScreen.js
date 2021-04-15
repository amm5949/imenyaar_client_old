import React from "react";
import { Image, StatusBar, StyleSheet, View, CheckBox } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "../../components/AppTextInput";
import TelephoneIcon from "../../components/icons/TelephoneIcon";
import AppText from "../../components/AppText";
import LockIcon from "../../components/icons/LockIcon";
import { Dimensions } from "react-native";
import WinkedCloseIcon from "../../components/icons/WinkedCloseIcon";
import { useState } from "react";
import AppButton from "../../components/AppButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LogInScreen() {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons
          style={{
            alignSelf: "flex-end",
            paddingHorizontal: 0,
            position: "absolute",
            top: 10,
            right: 7,
          }}
          name="chevron-right"
          size={25}
          color="white"
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/login-screen/login.png")}
        />
      </View>
      <View style={styles.view}>
        <AppText style={styles.title}>ورود به حساب کاربری</AppText>
        <AppTextInput
          style={{ width: 0.7 * windowWidth }}
          label="شماره تلفن"
          required
          RightIcon={<TelephoneIcon color="#999" size={15} />}
        />
        <AppTextInput
          label="رمز عبور"
          style={{ width: 0.7 * windowWidth - 15 }}
          required
          RightIcon={<LockIcon color="#999" size={15} />}
          LeftIcon={<WinkedCloseIcon color="#999" size={15} />}
        />
        <View style={styles.forgetPassView}>
          <View style={styles.rememberMeView}>
            <CheckBox
              style={styles.checkbox}
              value={selected}
              onValueChange={setSelected}
            />
            <AppText style={styles.checkboxText}> من را به‌خاطر بسپار </AppText>
          </View>
        </View>
        <AppText style={{ fontSize: 12, paddingBottom: 10 }}>
          رمز عبور خود را فراموش کرده اید؟
        </AppText>
        <AppButton
          viewStyle={styles.button}
          color="#f2c94c"
          title="ورود"
          RightIcon={
            <MaterialCommunityIcons name="chevron-double-right" size={20} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 15,
    marginBottom: 20,
  },
  container: {
    overflow: "scroll",
    flex: 1,
    backgroundColor: "#201a31",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 10,
    direction: "rtl",
    justifyContent: "space-between",
  },
  checkbox: {
    borderRadius: 20,
  },
  checkboxText: {
    fontSize: 12,
  },
  forgetPassView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    direction: "rtl",
    marginBottom: 30,
  },
  image: {
    width: windowWidth,
    height: 0.37 * windowHeight,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "#201a31",
    paddingTop: 25,
    paddingBottom: 14,
  },
  rememberMeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  view: {
    overflow: "scroll",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e5e5e5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
