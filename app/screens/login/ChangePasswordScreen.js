import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import WinkedCloseIcon from "../../components/icons/WinkedCloseIcon";
import WinkedOpenIcon from "../../components/icons/WinkedOpenIcon";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const validationSchema = Yup.object({
  password: Yup.string()
    .required("رمز عبور نمیتواند خالی بماند")
    .min(6, "رمز عبور باید حداقل ۶ حرف باشد")
    .max(15, "رمز عبور باید حداکثر ۱۵ حرف باشد")
    .label("Password"),
  repeatPassword: Yup.string()
    .required("تکرار رمز عبور نمیتواند خالی بماند")
    .oneOf([Yup.ref("password"), null], "تکرار رمز عبور درست نیست")
    .label("Repeat Password"),
});

export default function ChangePasswordScreen(props) {
  const [passVisible, setPassVisible] = useState(true);
  const [repPassVisible, setRepPassVisible] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/login-screen/login.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <Image
            source={require("../../assets/login-screen/logo.png")}
            style={styles.logoIcon}
          />
          <AppText style={styles.logoText}>ایمن یار</AppText>
          <AppText style={styles.welcomeText}>خوش آمدید</AppText>
          <AppText style={styles.welcomeDescText}>
            برای داشتن یک ساختمون خوب نیاز به یک برنامه مدیریت خوب داری
          </AppText>
        </ImageBackground>
        <View style={styles.inputView}>
          <AppText style={styles.title}>تغییر رمز عبور</AppText>
          <AppText style={styles.text}>رمز عبور جدید خود را وارد کنید</AppText>

          <Formik
            initialValues={{ password: "", repeatPassword: "" }}
            onSubmit={(values) => {
              console.log(values);
              props.navigation.navigate("LogInScreen");
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
                  LeftIcon={
                    !passVisible ? (
                      <WinkedOpenIcon
                        onPress={() => setPassVisible(true)}
                        size={20}
                      />
                    ) : (
                      <WinkedCloseIcon
                        onPress={() => setPassVisible(false)}
                        size={20}
                      />
                    )
                  }
                  textContentType="password"
                  secureTextEntry={passVisible}
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  viewStyle={{
                    borderColor:
                      touched.password && errors.password ? "red" : "black",
                    borderWidth: touched.password && errors.password ? 2 : 0,
                  }}
                  isWrong={touched.password && errors.password}
                  onWrongText={errors.password}
                />

                <AppTextInput
                  label="تکرار رمز عبور"
                  required
                  LeftIcon={
                    !repPassVisible ? (
                      <WinkedOpenIcon
                        onPress={() => setRepPassVisible(true)}
                        size={20}
                      />
                    ) : (
                      <WinkedCloseIcon
                        onPress={() => setRepPassVisible(false)}
                        size={20}
                      />
                    )
                  }
                  textContentType="newPassword"
                  secureTextEntry={repPassVisible}
                  onBlur={() => setFieldTouched("repeatPassword")}
                  onChangeText={handleChange("repeatPassword")}
                  viewStyle={{
                    borderColor:
                      touched.repeatPassword && errors.repeatPassword
                        ? "red"
                        : "black",
                    borderWidth:
                      touched.repeatPassword && errors.repeatPassword ? 2 : 0,
                  }}
                  isWrong={touched.repeatPassword && errors.repeatPassword}
                  onWrongText={errors.repeatPassword}
                />

                <AppButton
                  viewStyle={styles.button}
                  textStyle={{
                    fontSize: 15,
                    paddingTop: 4,
                    color: colors.white,
                  }}
                  color="#f2c94c"
                  title=" ثبت رمز جدید"
                  RightIcon={
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={colors.white}
                    />
                  }
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 15,
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: colors.yellow,
  },
  container: {
    // flex: 1,
    backgroundColor: "#201a31",
    justifyContent: "space-between",
    height: 1 * windowHeight,
    // position: "relative",
  },
  contentContainer: {
    // flex: 1,
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
  imageBackground: {
    width: "100%",
    height: 0.85 * windowHeight,
    // marginBottom: 20,
    alignItems: "center",
  },
  linkText: {
    fontSize: 15,
    color: "#e04860",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  logoIcon: {
    marginTop: 0.03 * windowHeight,
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 28,
    color: colors.yellow,
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
    marginBottom: 2,
    color: "#333",
  },
  timingText: {
    fontSize: 15,
    color: "#a69d9d",
    marginRight: 8,
    paddingTop: 4,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    paddingTop: 0.01 * windowHeight,
    paddingBottom: 3,
  },
  rememberMeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputView: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.inputViewBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  welcomeText: {
    color: colors.white,
    fontSize: 20,
    marginTop: 3,
  },
  welcomeDescText: {
    fontSize: 13,
    width: 0.468 * windowWidth,
    textAlign: "center",
    color: "#ccc",
    fontWeight: "100",
    // marginBottom: 0.15 * windowHeight,
  },
});
