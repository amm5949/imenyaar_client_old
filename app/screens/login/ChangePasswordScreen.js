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
import { styles } from "./ChangePasswordScreen.style";


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

                <AppTextInput
                  label="تکرار رمز عبور"
                  required
                  LeftIcon={
                    !repPassVisible ? (
                      <TouchableOpacity onPress={() => setRepPassVisible(true)}>
                        <WinkedOpenIcon color="#999" size={20} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => setRepPassVisible(false)}
                      >
                        <WinkedCloseIcon color="#999" size={20} />
                      </TouchableOpacity>
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

