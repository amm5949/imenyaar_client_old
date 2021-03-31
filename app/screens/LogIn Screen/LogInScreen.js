import React from "react";
import { Image, StatusBar, StyleSheet, View, CheckBox } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "../../components/AppTextInput";
import TelephoneIcon from "../../components/icons/TelephoneIcon";
import AppText from "../../components/AppText";
import LockIcon from "../../components/icons/LockIcon";
import WinkedCloseIcon from "../../components/icons/WinkedCloseIcon";
import { useState } from "react";
import AppButton from "../../components/AppButton";

export default function LogInScreen() {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons
          style={{ alignSelf: "flex-end", paddingHorizontal: 0 }}
          name="chevron-right"
          size={25}
          color="white"
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/2.png")}
        />
      </View>
      <View style={styles.view}>
        <AppText style={styles.title}>ورود به حساب کاربری</AppText>
        <AppTextInput
          label="شماره تلفن"
          required
          RightIcon={<TelephoneIcon color="#999" size={15} />}
        />
        <AppTextInput
          label="رمز عبور"
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
            <AppText style={styles.checkboxText}>مرابخاطر بسپار</AppText>
          </View>
          <AppText style={{ fontSize: 12 }}>
            رمز عبور خود را فراموش کرده اید ؟
          </AppText>
        </View>
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
    width: 180 * 2,
    height: 146 * 2,
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
