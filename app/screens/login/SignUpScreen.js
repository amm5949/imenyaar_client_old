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
import WinkedOpenIcon from "../../components/icons/WinkedOpenIcon";
import UserIcon from "../../components/icons/UserIcon";
import TelephoneIcon from "../../components/icons/TelephoneIcon";
import OrganizationIcon from "../../components/icons/OrganizationIcon";

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
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          top: StatusBar.currentHeight,
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
            console.log(values)
            props.navigation.navigate('LogInScreen')
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
                  RightIcon={
                    <UserIcon
                      color={
                        touched.firstname && errors.firstname ? "red" : "#999"
                      }
                      size={15}
                    />
                  }
                  onBlur={() => setFieldTouched("firstname")}
                  onChangeText={handleChange("firstname")}
                  viewStyle={{
                    width: 0.43 * windowWidth,
                    borderColor:
                      touched.firstname && errors.firstname ? "red" : "black",
                    borderWidth: touched.firstname && errors.firstname ? 2 : 0,
                  }}
                  isWrong={touched.firstname && errors.firstname}
                  onWrongText={errors.firstname}
                />
                <AppTextInput
                  label="نام خانوادگی"
                  required
                  RightIcon={
                    <UserIcon
                      color={
                        touched.lastname && errors.lastname ? "red" : "#999"
                      }
                      size={15}
                    />
                  }
                  onBlur={() => setFieldTouched("lastname")}
                  onChangeText={handleChange("lastname")}
                  viewStyle={{
                    width: 0.43 * windowWidth,
                    borderColor:
                      touched.lastname && errors.lastname ? "red" : "black",
                    borderWidth: touched.lastname && errors.lastname ? 2 : 0,
                  }}
                  isWrong={touched.lastname && errors.lastname}
                  onWrongText={errors.lastname}
                />
              </View>
              <AppTextInput
                label="شماره موبایل"
                required
                RightIcon={
                  <TelephoneIcon
                    color={
                      touched.phoneNumber && errors.phoneNumber ? "red" : "#999"
                    }
                    size={15}
                  />
                }
                onBlur={() => setFieldTouched("phoneNumber")}
                onChangeText={handleChange("phoneNumber")}
                keyboardType="numeric"
                viewStyle={{
                  borderColor:
                    touched.phoneNumber && errors.phoneNumber ? "red" : "black",
                  borderWidth:
                    touched.phoneNumber && errors.phoneNumber ? 2 : 0,
                }}
                isWrong={touched.phoneNumber && errors.phoneNumber}
                onWrongText={errors.phoneNumber}
              />
              <AppTextInput
                label="نام شرکت یا سازمان"
                required
                RightIcon={<OrganizationIcon color="#999" size={15} />}
                onBlur={() => setFieldTouched("organizationName")}
                onChangeText={handleChange("organizationName")}
              />
              <AppTextInput
                label="رمز عبور"
                required
                RightIcon={
                  <LockIcon
                    color={touched.password && errors.password ? "red" : "#999"}
                    size={15}
                  />
                }
                LeftIcon={
                  !passVisible ? (
                    <WinkedOpenIcon
                      onPress={() => setPassVisible(true)}
                      color="#999"
                      size={20}
                    />
                  ) : (
                    <WinkedCloseIcon
                      onPress={() => setPassVisible(false)}
                      color="#999"
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

              <AppButton
                viewStyle={styles.button}
                textStyle={{ fontSize: 18, paddingTop: 4 }}
                color="#f2c94c"
                title=" بعدی"
                RightIcon={
                  <MaterialCommunityIcons
                    name="chevron-double-right"
                    size={20}
                  />
                }
                onPress={handleSubmit}
              />

              <AppText
                style={{ fontSize: 15, color: "#201a31", marginBottom: 10 }}
              >
                حساب دارید؟ از
                <AppText
                  style={{
                    fontSize: 15,
                    color: "#f2c94c",
                    textDecorationLine: "underline",
                  }}
                >
                  اینجا
                </AppText>
                واردشوید
              </AppText>
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
    marginBottom: 15,
    marginTop: 12,
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
    paddingTop: 0.029 * windowHeight,
    paddingBottom: 10,
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
  rowTextInput: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
