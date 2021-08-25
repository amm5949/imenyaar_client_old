import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  CheckBox,
  ImageBackground,
  ScrollView,
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
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره موبایل الزامی است")
    .length(11, "شماره موبایل معتبر نیست")
    .label("Phone Number"),
  password: Yup.string()
    .required("رمز عبور نمیتواند خالی بماند")
    .min(6, "رمز عبور باید حداقل ۶ حرف باشد")
    .max(15, "رمز عبور باید حداکثر ۱۵ حرف باشد")
    .label("Password"),
});

export default function LogInScreen(props) {
  const [passVisible, setPassVisible] = useState(true);
  const [selected, setSelected] = useState(false);

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
          <AppText style={styles.title}>ورود به حساب کاربری</AppText>

          <Formik
            initialValues={{ phoneNumber: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              props.navigation.navigate("ActivateAccountScreen");
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
                  containerStyle={{ width: "100%" }}
                />

                <AppTextInput
                  label="رمز عبور"
                  required
                  LeftIcon={
                    !passVisible ? (
                      <TouchableOpacity onPress={() => setPassVisible(true)}>
                        <WinkedOpenIcon color="#999" size={20} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => setPassVisible(false)}>
                        <WinkedCloseIcon color="#999" size={20} />
                      </TouchableOpacity>
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
                  containerStyle={{ width: "100%" }}
                />

                <AppText
                  onPress={() => {
                    props.navigation.navigate("ForgetPasswordScreen");
                  }}
                  style={styles.forgetPassText}
                >
                  رمز عبور خود را فراموش کرده اید؟
                </AppText>

                <View style={styles.bottomView}>
                  <View style={styles.rememberMeView}>
                    <CheckBox
                      style={styles.checkbox}
                      value={selected}
                      onValueChange={setSelected}
                    />
                    <AppText style={styles.checkboxText}>
                      مرا بخاطر بسپار
                    </AppText>
                  </View>
                  <AppButton
                    viewStyle={styles.button}
                    textStyle={{
                      fontSize: 14 / fontScale,
                      marginTop: -4,
                      color: colors.white,
                    }}
                    color="#f2c94c"
                    title="ورود"
                    RightIcon={
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={colors.white}
                      />
                    }
                    onPress={handleSubmit}
                  />
                </View>

                <AppText style={{ fontSize: 13, marginBottom: 10 }}>
                  حساب ندارید؟ از
                  <AppText
                    style={{
                      color: colors.yellow,
                      textDecorationLine: "underline",
                    }}
                    onPress={() => props.navigation.navigate("SignUpScreen")}
                  >
                    {" "}
                    اینجا{" "}
                  </AppText>
                  بسازید
                </AppText>
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
    width: "52%",
    borderRadius: 15,
    // marginBottom: 30,
    // marginTop: 20,
    // marginLeft: 20,
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
    marginHorizontal: 5,
  },
  checkboxText: {
    fontSize: 10 / fontScale,
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    direction: "rtl",
    marginBottom: 10,
    // backgroundColor: "red",
  },
  imageBackground: {
    width: "100%",
    height: 0.85 * windowHeight,
    // marginBottom: 20,
    alignItems: "center",
  },
  linkText: {
    fontSize: 15 / fontScale,
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
    fontSize: 28 / fontScale,
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
    fontSize: 13 / fontScale,
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
    fontSize: 18 / fontScale,
    color: colors.black,
    paddingTop: 0.01 * windowHeight,
    paddingBottom: 3,
  },
  rememberMeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgetPassText: {
    fontSize: 12 / fontScale,
    alignSelf: "flex-end",
    marginTop: 7,
    marginBottom: 20,
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
    fontSize: 20 / fontScale,
    marginTop: 3,
  },
  welcomeDescText: {
    fontSize: 12 / fontScale,
    width: 0.468 * windowWidth,
    textAlign: "center",
    color: "#ccc",
    fontWeight: "100",
    // marginBottom: 0.15 * windowHeight,
  },
});
