import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  CheckBox,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import ClockIcon from "../../components/icons/ClockIcon";
import AppTextInput from "../../components/AppTextInput";
import LockIcon from "../../components/icons/LockIcon";
import WinkedCloseIcon from "../../components/icons/WinkedCloseIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const validationSchema = Yup.object({
  password: Yup.string().min(6).max(15).label("Password"),
  repeatPassword: Yup.string().label("Repeat Password"),
});

export default function ChangePasswordScreen(props) {
  const [passVisible, setPassVisible] = useState(true);
  const [repPassVisible, setRepPassVisible] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          top: 0,
          position: "absolute",
        }}
      >
        <MaterialCommunityIcons
          style={{
            alignSelf: "flex-end",
            paddingHorizontal: 0.019 * windowWidth,
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
        <AppText style={styles.title}>تغییر رمز عبور</AppText>

        <AppText style={styles.text}>رمز عبور جدید خود را وارد کنید</AppText>

        <Formik
          initialValues={{ password: "", repeatPassword: "" }}
          onSubmit={(values) =>{console.log(values)
          props.navigation.navigate('LoginScreen')
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                label="رمز عبور"
                required
                RightIcon={<LockIcon color="#999" size={15} />}
                LeftIcon={
                  <WinkedCloseIcon
                    onPress={() => setPassVisible(!passVisible)}
                    color="#999"
                    size={15}
                  />
                }
                textContentType="password"
                secureTextEntry={passVisible}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />

              <AppTextInput
                label="تکرار رمز عبور"
                required
                RightIcon={<LockIcon color="#999" size={15} />}
                LeftIcon={
                  <WinkedCloseIcon
                    onPress={() => setRepPassVisible(!repPassVisible)}
                    color="#999"
                    size={15}
                  />
                }
                textContentType="newPassword"
                secureTextEntry={repPassVisible}
                onBlur={() => setFieldTouched("repeatPassword")}
                onChangeText={handleChange("repeatPassword")}
              />

              <AppButton
                viewStyle={styles.button}
                textStyle={{ fontSize: 18, paddingTop: 4 }}
                color="#f2c94c"
                title=" ثبت رمز جدید"
                RightIcon={
                  <MaterialCommunityIcons
                    name="chevron-double-right"
                    size={20}
                  />
                }
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 20,
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
    width: 0.8 * windowWidth,
    height: 0.45 * windowHeight,
    marginBottom: 20,
  },
  linkText: {
    fontSize: 15,
    color: "#e04860",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 25,
    width: 40,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    paddingHorizontal: 0.008 * windowWidth,
    marginBottom: 10,
  },
  timingText: {
    fontSize: 15,
    color: "#a69d9d",
    marginRight: 8,
    paddingTop: 4,
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
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e5e5e5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
  },
});
