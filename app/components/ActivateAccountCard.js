import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";

const textColors = {
  gold: "#daa520",
  silver: "#acacac",
  bronze: "#cd7f32",
};

const buttonColors = {
  gold: "#f2c94c",
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

function ActivateAccountCard({ navigation, type = "bronze" }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        resizeMode="stretch"
        source={headerImages[type]}
      >
        <AppText style={[styles.headerText, { color: textColors[type] }]}>
          {headerText[type]}
        </AppText>
      </ImageBackground>
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View style={styles.line} />
        <AppText style={[styles.price, { color: textColors[type] }]}>
          {prices[type]}
        </AppText>
        <View style={styles.line} />
      </View>
      <AppButton
        onPress={() => {
          console.log(type);
          navigation.navigate('ConfirmPurchaseScreen');
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
    borderColor: "#d4d8f0",
    borderWidth: 1,
    width: 0.772 * windowWidth,
    backgroundColor: "#232946",
    overflow: "hidden",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 0.165 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    position: "relative",
    top: -10,
  },
  textContainer: {
    paddingHorizontal: 0.055 * windowWidth,
    alignSelf: "flex-end",
    height: 0.28 * windowHeight,
  },
  text: {
    fontSize: 11,
    color: "#fff",
    marginVertical: 7.5,
  },
  line: {
    borderWidth: 0.5,
    borderColor: "#707070",
    flex: 1,
    marginHorizontal: 9.3,
  },
  price: {
    flex: 1,
    fontSize: 13,
    textAlign: "center",
  },
  button: {
    borderColor: "#f2c94c",
    backgroundColor: "#232946",
    borderWidth: 1.5,
    borderRadius: 10,
    width: "90%",
    marginVertical: 15,
    marginBottom: 17,
  },
  buttonText: {
    fontSize: 13,
    color: "#f2c94c",
  },
  circle: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: "#bbebee",
    elevation: 100,
    marginLeft: 9,
    position: "relative",
    top: -2,
  },
});

export default ActivateAccountCard;
