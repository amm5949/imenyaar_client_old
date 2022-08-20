import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../../components/AppTextInput";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import { styles } from "./ForgetPasswordScreen.style";

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره موبایل الزامی است")
    .length(11, "شماره موبایل معتبر نیست")
    .label("Phone Number"),
});

export default function ForgetPasswordScreen(props) {
  return (
    <ScrollView style={styles.scrollViewStyle}>
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