import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;
console.log(windowWidth);
console.log(windowHeight);
console.log(fontScale);

function ConfirmPurchaseScreen(props) {
  return (
    <ScrollView>
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
            حساب کاربری
            <AppText style={[styles.text, { color: "#acacac" }]}>
              {" "}
              نقره ای{" "}
            </AppText>
            برای شما فعال شده است
          </AppText>
          <AppText style={styles.text}>
            جزئیات این حساب در پروفایل شما قابل بررسی است
          </AppText>
          <AppText style={styles.text}>
            این حساب تا سه آینده برای شما اعتبار دارد
          </AppText>
        </View>
        <AppButton
          onPress={() => {
            props.navigation.navigate("NavigationScreens");
          }}
          viewStyle={styles.button}
          textStyle={styles.buttonText}
          title="متوجه شدم"
          color="#f2c94c"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
    flex: 1,
    backgroundColor: colors.inputViewBackground,
    alignItems: "center",
    // paddingTop: StatusBar.currentHeight,
    // direction: "rtl",
    overflow: "scroll",
    height: windowHeight,
  },
  image: {
    marginTop: 20,
    width: 0.87 * windowWidth,
    height: 0.43 * windowHeight,
    marginBottom: 0.064 * windowHeight,
  },
  text: {
    fontSize: 15,
    color: colors.darkBlue,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    height: 0.06 * windowHeight,
    width: 0.76 * windowWidth,
    marginTop: 0.07 * windowHeight,
    borderRadius: 10,
    backgroundColor: colors.yellow,
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default ConfirmPurchaseScreen;
