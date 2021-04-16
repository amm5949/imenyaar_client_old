import React from "react";
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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const validationSchema = Yup.object({
  digit1: Yup.number().required().min(0).max(9).label("digit 1"),
  digit2: Yup.number().required().min(0).max(9).label("digit 2"),
  digit3: Yup.number().required().min(0).max(9).label("digit 3"),
  digit4: Yup.number().required().min(0).max(9).label("digit 4"),
});

export default function SecurityCodeScreen(props) {
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
        <AppText style={styles.title}>کد فعال سازی</AppText>

        <AppText style={styles.text}>
          کد فعال سازی به شماره 09151580739 ارسال شده را وارد کنید
        </AppText>

        <AppText style={styles.linkText}>شماره تلفن اشتباه است ؟</AppText>

        <Formik
          initialValues={{ digit1: "", digit2: "", digit3: "", digit4: "" }}
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
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "80%",
                }}
              >
                <TextInput
                  onBlur={() => setFieldTouched("digit1")}
                  onChangeText={handleChange("digit1")}
                  keyboardType="numeric"
                  maxLength={1}
                  style={styles.textInput}
                />

                <TextInput
                  onBlur={() => setFieldTouched("digit2")}
                  onChangeText={handleChange("digit2")}
                  keyboardType="numeric"
                  maxLength={1}
                  style={styles.textInput}
                />

                <TextInput
                  onBlur={() => setFieldTouched("digit3")}
                  onChangeText={handleChange("digit3")}
                  keyboardType="numeric"
                  maxLength={1}
                  style={styles.textInput}
                />

                <TextInput
                  onBlur={() => setFieldTouched("digit4")}
                  onChangeText={handleChange("digit4")}
                  keyboardType="numeric"
                  maxLength={1}
                  style={styles.textInput}
                />
              </View>

              {touched.digit4 && errors.digit4 && <AppText>errors</AppText>}

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <AppText style={styles.timingText}>
                  ارسال مجدد کد تا 1:45
                </AppText>
                <ClockIcon size={15} color="#a69d9d" />
              </View>

              <AppButton
                viewStyle={styles.button}
                textStyle={{ fontSize: 18 }}
                color="#f2c94c"
                title=" ورود"
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
