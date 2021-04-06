import React from "react";
import { Image, StatusBar, StyleSheet, View, CheckBox } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../../components/AppTextInput";
import TelephoneIcon from "../../components/icons/TelephoneIcon";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const validationSchema = Yup.object({
  phoneNumber: Yup.string().required().length(11).label("Phone Number"),
});

export default function ForgetPasswordScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height"
    >
      <View style={{ width: "100%", alignItems: "center" }}>
        <MaterialCommunityIcons
          style={{
            alignSelf: "flex-end",
            paddingHorizontal: 0.019 * windowWidth,
            position: 'absolute',
            top: 10,
            right: 7
          }}
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
        <AppText style={styles.title}>فراموشی رمز عبور</AppText>

        <AppText style={styles.text}>
          شماره موبایل حساب را دوباره وارد کنید و سپس کد امنیتی ارسال شده را
          ثبت کنید
        </AppText>

        <Formik
          initialValues={{ phoneNumber: "" }}
          onSubmit={(values) => console.log(values)}
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
                RightIcon={<TelephoneIcon color="#999" size={15} />}
                onBlur={() => setFieldTouched("phoneNumber")}
                onChangeText={handleChange("phoneNumber")}
                keyboardType="numeric"
                style={{ width: 0.7 * windowWidth }}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <AppText>error</AppText>
              )}

              <AppButton
                viewStyle={styles.button}
                textStyle={{ paddingTop: 4 }}
                color="#f2c94c"
                title=" ارسال کد"
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
    </KeyboardAvoidingView>
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
    width: windowWidth,
    height: 0.37 * windowHeight,
    marginBottom: 20,
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    paddingHorizontal: 0.08 * windowWidth,
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
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e5e5e5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
