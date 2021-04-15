import React from "react";
import { View, Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;
console.log(windowWidth);
console.log(windowHeight);
console.log(fontScale);

function ConfirmPurchaseScreen(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          style={{
            alignSelf: "flex-end",
            paddingHorizontal: 0.019 * windowWidth,
            paddingBottom: 0.056 * windowHeight,
          }}
          name="chevron-right"
          size={25}
          color="white"
        />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/activate_account-screen/confirm-account.png")}
        />
      </View>
      <View>
        <AppText style={styles.text}>
          حساب کاربری نقره ای برای شما فعال شده است
        </AppText>
        <AppText style={styles.text}>
          جزئیات این حساب در پروفایل شما قابل بررسی است
        </AppText>
        <AppText style={styles.text}>
          این حساب تا سه آینده برای شما اعتبار دارد
        </AppText>
      </View>
      <AppButton
        viewStyle={styles.button}
        textStyle={styles.buttonText}
        title="متوجه شدم"
        color="#f2c94c"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
    flex: 1,
    backgroundColor: "#201a31",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    direction: "rtl",
  },
  image: {
    width: 0.87 * windowWidth,
    height: 0.43 * windowHeight,
    marginBottom: 0.064 * windowHeight,
  },
  text: {
    fontSize: 2 * 7,
    color: "#fff",
    textAlign: "center",
    marginBottom: 0.027 * windowHeight,
  },
  button: {
    height: 0.06 * windowHeight,
    width: 0.76 * windowWidth,
    marginTop: 0.07 * windowHeight,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 2 * 7.5,
  },
});

export default ConfirmPurchaseScreen;
