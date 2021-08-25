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
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const validationSchema = Yup.object({
  firstname: Yup.string().required("نام خود را وارد کنید"),
  lastname: Yup.string().required("نام خانوادگی خود را وارد کنید"),
  phoneNumber: Yup.string()
    .required("شماره موبایل الزامی است")
    .length(11, "شماره موبایل معتبر نیست")
    .label("Phone Number"),
  organizationName: Yup.string(),
  password: Yup.string()
    .required("رمز عبور نمیتواند خالی بماند")
    .min(6, "رمز عبور باید حداقل ۶ حرف باشد")
    .max(15, "رمز عبور باید حداکثر ۱۵ حرف باشد")
    .label("Password"),
});

export default function SignUpScreen(props) {
  const [passVisible, setPassVisible] = useState(true);

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
          <AppText style={styles.title}>ساخت حساب کاربری</AppText>

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              phoneNumber: "",
              organizationName: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              props.navigation.navigate("SecurityCodeScreen", {
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
                <View style={styles.rowTextInput}>
                  <AppTextInput
                    label="نام"
                    required
                    onBlur={() => setFieldTouched("firstname")}
                    onChangeText={handleChange("firstname")}
                    viewStyle={{
                      // width: 0.43 * windowWidth,
                      borderColor:
                        touched.firstname && errors.firstname ? "red" : "black",
                      borderWidth:
                        touched.firstname && errors.firstname ? 2 : 0,
                    }}
                    isWrong={touched.firstname && errors.firstname}
                    onWrongText={errors.firstname}
                    placeholder="مثال : علی "
                    containerStyle={{ flex: 1, marginLeft: 20 }}
                  />
                  <AppTextInput
                    label="نام خانوادگی"
                    required
                    onBlur={() => setFieldTouched("lastname")}
                    onChangeText={handleChange("lastname")}
                    viewStyle={{
                      // width: 0.43 * windowWidth,
                      borderColor:
                        touched.lastname && errors.lastname ? "red" : "black",
                      borderWidth: touched.lastname && errors.lastname ? 2 : 0,
                    }}
                    isWrong={touched.lastname && errors.lastname}
                    onWrongText={errors.lastname}
                    placeholder="مثال : اکبر آبادی "
                    containerStyle={{ flex: 1 }}
                  />
                </View>
                <AppTextInput
                  label="شماره موبایل"
                  required
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
                  placeholder="مثال : 09153698888 "
                  containerStyle={{ width: "100%" }}
                />
                <AppTextInput
                  label="نام شرکت یا سازمان"
                  onBlur={() => setFieldTouched("organizationName")}
                  onChangeText={handleChange("organizationName")}
                  placeholder="مثال : شرکت عمرانی و ساختمانی مهر نو "
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

                <AppButton
                  viewStyle={styles.button}
                  textStyle={{
                    fontSize: 15,
                    paddingTop: 4,
                    color: colors.white,
                  }}
                  color="#f2c94c"
                  title=" دریافت کد فعال سازی"
                  RightIcon={
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={colors.white}
                    />
                  }
                  onPress={handleSubmit}
                />

                <AppText
                  style={{ fontSize: 13, color: "#201a31", marginBottom: 10 }}
                >
                  حساب دارید؟ از
                  <AppText
                    style={{
                      fontSize: 15,
                      color: colors.yellow,
                      textDecorationLine: "underline",
                    }}
                    onPress={() => props.navigation.navigate("LogInScreen")}
                  >
                    {" "}
                    اینجا{" "}
                  </AppText>
                  وارد شوید
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
    width: "100%",
    borderRadius: 15,
    marginBottom: 10,
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
    fontSize: 11,
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
  rowTextInput: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  forgetPassText: {
    fontSize: 13,
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
