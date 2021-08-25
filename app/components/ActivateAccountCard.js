import React from "react";
import { Platform } from "react-native";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";

const textColors = {
  gold: "#daa520",
  silver: "#acacac",
  bronze: "#cd7f32",
};

const buttonColors = {
  gold: "#daa520",
  silver: "#acacac",
  bronze: "#cd7f32",
};

const headerImages = {
  gold: require("../assets/activate_account-screen/gold-header.png"),
  silver: require("../assets/activate_account-screen/silver-header.png"),
  bronze: require("../assets/activate_account-screen/bronze-header.png"),
};

const headerText = {
  gold: "حساب طلائی",
  silver: "حساب نقره ای",
  bronze: "حساب برنزی",
};

const options = {
  gold: [
    "بیش از ۱ پروژه",
    "اعضای پروژه‌ی نامحدود",
    "اعتبار حساب",
    "امکان ثبت حوادث",
    "امکان لینک شدن با برنامه زمان بندی",
  ],
  silver: ["۱ پروژه", "۱۰ نفر اعضای پروژه", "۳ اعتبار حساب", "امکان ثبت حوادث"],
  bronze: ["۱ پروژه", "۱ نفر اعضای پروژه", "۱ اعتبار حساب"],
};

const prices = {
  gold: "۱۸۸,۰۰۰ تومان",
  silver: "۱۸۸,۰۰۰ تومان",
  bronze: "۱۸۸,۰۰۰ تومان",
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ActivateAccountCard({ navigation, type = "gold" }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        resizeMode="stretch"
        source={headerImages[type]}
      >
        <AppText style={styles.headerText}>{headerText[type]}</AppText>
      </ImageBackground>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        persistentScrollbar={true}
        style={{
          width: "100%",
          minHeight: 0.25 * windowHeight,
          overflow: "scroll",
          marginBottom: 3,
        }}
      >
        <View style={styles.textContainer}>
          {options[type].map((item, index) => (
            <View
              key={index}
              style={{ flexDirection: "row-reverse", alignItems: "center" }}
            >
              <View style={styles.circle} />
              <AppText style={styles.text}>{item}</AppText>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.line}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0.13 * windowHeight,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppText style={[styles.price, { color: textColors[type] }]}>
            {prices[type]}
          </AppText>
        </View>
      </View>
      <AppButton
        onPress={() => {
          console.log(type);
          navigation.navigate("ConfirmPurchaseScreen");
        }}
        textStyle={[styles.buttonText, { color: buttonColors[type] }]}
        viewStyle={[styles.button, { borderColor: buttonColors[type] }]}
        title="خرید این حساب"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // borderColor: "#d4d8f0",
    // borderWidth: 1,
    width: 0.772 * windowWidth,
    backgroundColor: colors.white,
    overflow: "hidden",
    alignItems: "center",
    overflow: "visible",
    height: 0.523 * windowHeight,
    elevation: 10,
    shadowRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: "#999",
  },
  header: {
    width: "100%",
    height: 0.126 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  headerText: {
    fontSize: 15 / fontScale,
    position: "relative",
    top: -10,
    color: colors.white,
  },
  textContainer: {
    paddingHorizontal: 0.055 * windowWidth,
    paddingLeft: 40,
    alignSelf: "flex-end",
    minHeight: 0.25 * windowHeight,
  },
  text: {
    fontSize: 10 / fontScale,
    color: colors.darkBlue,
    marginVertical: 7,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#707070",
    width: "90%",
    height: 0,
  },
  price: {
    fontSize: 12 / fontScale,
    textAlign: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  button: {
    borderColor: colors.yellow,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderRadius: 10,
    width: "90%",
    height: 40,
    marginVertical: 15,
    marginBottom: 17,
  },
  buttonText: {
    fontSize: 12 / fontScale,
    color: colors.yellow,
  },
  circle: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: colors.yellow,
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.4,
    marginLeft: 9,
    position: "relative",
    top: -2,
  },
});

export default ActivateAccountCard;
