import React, { useState, useEffect } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import ClockIcon from "../../components/icons/ClockIcon";
import {
  convertToPersianNumber,
  getTimeFromSeconds,
} from "../../components/UtilFunctions";
import AppErrorMessage from "../../components/AppErrorMessage";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const validationSchema = Yup.object({
  digit1: Yup.number().required().min(0).max(9).label("digit 1"),
  digit2: Yup.number().required().min(0).max(9).label("digit 2"),
  digit3: Yup.number().required().min(0).max(9).label("digit 3"),
  digit4: Yup.number().required().min(0).max(9).label("digit 4"),
});

export default function ForgetPasswordSecurityCodeScreen(props) {
  const [timerCount, setTimer] = useState(105);
  const [timeFinished, setTimeFinished] = useState(false);
  const [codeIsTrue, setCodeIsTrue] = useState(true);
  const [codeFromServer, setCodeFromServer] = useState("1234");

  let secondTextInput = null;
  let thirdTextInput = null;
  let fourthTextInput = null;

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount == 1) {
          setTimeFinished(true);
          // clearInterval(interval);
          return 0;
        } else return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView>
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
          <AppText style={styles.title}>کد فعال سازی</AppText>
          <AppText style={styles.text}>
            کد فعال سازی که به شماره {convertToPersianNumber("09151580739")}{" "}
            ارسال شده را وارد کنید
          </AppText>
          <AppText
            style={[
              styles.text,
              { color: colors.errorRed, textDecorationLine: "underline" },
            ]}
            onPress={() => props.navigation.navigate("SignUpScreen")}
          >
            شماره تلفن اشتباه است؟
          </AppText>

          <Formik
            initialValues={{ digit1: "", digit2: "", digit3: "", digit4: "" }}
            onSubmit={(values) => {
              let codeFromUser =
                values.digit1 + values.digit2 + values.digit3 + values.digit4;
              console.log(codeFromUser);
              console.log(codeFromServer);
              if (codeFromUser !== codeFromServer) setCodeIsTrue(false);
              else {
                setCodeIsTrue(true);
                props.navigation.navigate("LogInScreen");
              }
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
                    style={[
                      styles.textInput,
                      {
                        borderColor: "red",
                        borderWidth:
                          !codeIsTrue ||
                          (touched.digit1 && errors.digit1) ||
                          (touched.digit2 && errors.digit2) ||
                          (touched.digit3 && errors.digit3) ||
                          (touched.digit4 && errors.digit4)
                            ? 2
                            : 0,
                      },
                    ]}
                    onChange={(event) => {
                      setCodeIsTrue(true);
                      const { text } = event.nativeEvent;
                      if (text.length == 1) secondTextInput.focus();
                    }}
                  />

                  <TextInput
                    onBlur={() => setFieldTouched("digit2")}
                    onChangeText={handleChange("digit2")}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[
                      styles.textInput,
                      {
                        borderColor: "red",
                        borderWidth:
                          !codeIsTrue ||
                          (touched.digit1 && errors.digit1) ||
                          (touched.digit2 && errors.digit2) ||
                          (touched.digit3 && errors.digit3) ||
                          (touched.digit4 && errors.digit4)
                            ? 2
                            : 0,
                      },
                    ]}
                    ref={(input) => {
                      secondTextInput = input;
                    }}
                    onChange={(event) => {
                      setCodeIsTrue(true);
                      const { text } = event.nativeEvent;
                      if (text.length == 1) thirdTextInput.focus();
                    }}
                  />

                  <TextInput
                    onBlur={() => setFieldTouched("digit3")}
                    onChangeText={handleChange("digit3")}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[
                      styles.textInput,
                      {
                        borderColor: "red",
                        borderWidth:
                          !codeIsTrue ||
                          (touched.digit1 && errors.digit1) ||
                          (touched.digit2 && errors.digit2) ||
                          (touched.digit3 && errors.digit3) ||
                          (touched.digit4 && errors.digit4)
                            ? 2
                            : 0,
                      },
                    ]}
                    ref={(input) => {
                      thirdTextInput = input;
                    }}
                    onChange={(event) => {
                      setCodeIsTrue(true);
                      const { text } = event.nativeEvent;
                      if (text.length == 1) fourthTextInput.focus();
                    }}
                  />

                  <TextInput
                    onBlur={() => setFieldTouched("digit4")}
                    onChangeText={handleChange("digit4")}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[
                      styles.textInput,
                      {
                        borderColor: "red",
                        borderWidth:
                          !codeIsTrue ||
                          (touched.digit1 && errors.digit1) ||
                          (touched.digit2 && errors.digit2) ||
                          (touched.digit3 && errors.digit3) ||
                          (touched.digit4 && errors.digit4)
                            ? 2
                            : 0,
                      },
                    ]}
                    ref={(input) => {
                      fourthTextInput = input;
                    }}
                    onChange={() => {
                      setCodeIsTrue(true);
                    }}
                  />
                </View>
                {((touched.digit1 && errors.digit1) ||
                  (touched.digit2 && errors.digit2) ||
                  (touched.digit3 && errors.digit3) ||
                  (touched.digit4 && errors.digit4)) && (
                  <AppErrorMessage message="کد وارد شده کامل نیست" />
                )}
                {!codeIsTrue &&
                  !(
                    (touched.digit1 && errors.digit1) ||
                    (touched.digit2 && errors.digit2) ||
                    (touched.digit3 && errors.digit3) ||
                    (touched.digit4 && errors.digit4)
                  ) && <AppErrorMessage message="کد وارد شده درست نیست" />}

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  {timeFinished ? (
                    <AppText
                      style={[
                        styles.timingText,
                        {
                          color: colors.darkBlue,
                          textDecorationLine: "underline",
                        },
                      ]}
                      onPress={() => {
                        setCodeFromServer("4321");
                        setCodeIsTrue(true);
                        setTimeFinished(false);
                        setTimer(105);
                      }}
                    >
                      برای ارسال مجدد کد کلیک کنید
                    </AppText>
                  ) : (
                    <AppText style={styles.timingText}>
                      ارسال مجدد کد تا {getTimeFromSeconds(timerCount)}
                    </AppText>
                  )}
                  {!timeFinished && <ClockIcon size={15} color="#a69d9d" />}
                </View>

                <AppButton
                  viewStyle={styles.button}
                  textStyle={{
                    fontSize: 15,
                    paddingTop: 4,
                    color: colors.white,
                  }}
                  color="#f2c94c"
                  title=" تغییر رمز عبور"
                  RightIcon={
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={colors.white}
                    />
                  }
                  onPress={handleSubmit}
                />

                <AppText style={{ fontSize: 13, marginBottom: 10 }}>
                  حساب دارید؟ از
                  <AppText
                    style={{
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
    fontSize: 12,
    color: "#a69d9d",
    marginRight: 8,
    paddingTop: 3,
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
