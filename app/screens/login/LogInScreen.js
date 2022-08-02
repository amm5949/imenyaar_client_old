import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { CheckBox } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import WinkedCloseIcon from "../../components/icons/WinkedCloseIcon";
import WinkedOpenIcon from "../../components/icons/WinkedOpenIcon";
import colors from "../../config/colors";
import { TouchableOpacity } from "react-native";
import AppWarningModal from "../../components/AppWarningModal";
import { login } from "../../api/auth";
import { USER_DATA } from "../../redux/constants";
import { styles } from "./LoginScreen.style";

// import { storeData, getData } from "../../helper/AsyncStorage";


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
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    login(values)
      .then((response) => {
        dispatch({ type: USER_DATA, payload: response?.data });
        // storeData("userData", JSON.stringify(response?.data));
        console.log("login response: ", response);
        props.navigation.navigate("ActivateAccountScreen", {
          phoneNumber: values.phoneNumber,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message.fa);
        setModalText(error.response.data.message.fa);
        setVisible(true);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.contentContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ backgroundColor: colors.inputViewBackground }}>
        <AppWarningModal visible={visible}
          detailText={modalText}
          onPress={() => setVisible(false)} />
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
              onSubmit={handleSubmit}
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
                        fontSize: 15,
                        paddingTop: 4,
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

                  <AppText style={styles.dontHaveAcountContainer}>
                    حساب ندارید؟ از
                    <AppText style={styles.fromHereButton}
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
    </KeyboardAvoidingView>
  );
}


