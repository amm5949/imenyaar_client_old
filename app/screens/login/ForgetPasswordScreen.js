import React from "react";
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

import AppTextInput from "../../components/AppTextInput";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره موبایل الزامی است")
    .length(11, "شماره موبایل معتبر نیست")
    .label("Phone Number"),
});

export default function ForgetPasswordScreen(props) {
  return (
    <ScrollView style={{ backgroundColor: colors.inputViewBackground }}>
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
          <AppText style={styles.title}>فراموشی رمز عبور</AppText>

          <AppText style={styles.text}>
            شماره موبایل حساب را دوباره وارد کنید و سپس کد امنیتی ارسال شده را
            ثبت کنید
          </AppText>

          <Formik
            initialValues={{ phoneNumber: "" }}
            onSubmit={(values) => {
              console.log(values);
              props.navigation.navigate("ForgetPasswordSecurityCodeScreen", {
                phoneNumber: values.phoneNumber,
              });
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
                  label="شماره موبایل"
                  required
                  placeholder="مثال : 09153698888 "
                  onBlur={() => setFieldTouched("phoneNumber")}
                  onChangeText={handleChange("phoneNumber")}
                  keyboardType="numeric"
                  viewStyle={{
                    borderColor:
                      touched.phoneNumber && errors.phoneNumber
                        ? "red"
                        : "black",
                    borderWidth:
                      touched.phoneNumber && errors.phoneNumber ? 2 : 0,
                  }}
                  isWrong={touched.phoneNumber && errors.phoneNumber}
                  onWrongText={errors.phoneNumber}
                  containerStyle={{ width: "100%", marginTop: 10 }}
                />

                <AppButton
                  viewStyle={styles.button}
                  textStyle={{
                    fontSize: 15,
                    paddingTop: 4,
                    color: colors.white,
                  }}
                  color="#f2c94c"
                  title="ارسال کد"
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
