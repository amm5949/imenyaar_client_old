import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import * as Yup from "yup";
import AppButton from "../../components/AppButton";
import AppErrorMessage from "../../components/AppErrorMessage";
import AppText from "../../components/AppText";
import ClockIcon from "../../components/icons/ClockIcon";
import {
  convertToPersianNumber,
  getTimeFromSeconds,
} from "../../components/UtilFunctions";
import colors from "../../config/colors";
import { styles } from "./ForgetPasswordSecurityCodeScreen.style";


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
            onPress={() => props.navigation.navigate("ForgetPasswordScreen")}
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
                console.log("hiiiii");
                setCodeIsTrue(true);
                props.navigation.navigate("ChangePasswordScreen");
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
                  style={styles.codePlaceContainer}
                >
                  <TextInput
                    onBlur={() => setFieldTouched("digit1")}
                    onChangeText={handleChange("digit1")}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[
                      styles.textInput,
                      {
                        
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
                  style={styles.timingContainer}
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
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
}

