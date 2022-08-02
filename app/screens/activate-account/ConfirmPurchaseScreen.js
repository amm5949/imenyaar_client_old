import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import { styles } from "./ConfirmPurchaseScreen.style";

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
          style={styles.topContainer}
        >
          <MaterialCommunityIcons
            style={styles.topRightContainer}
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

export default ConfirmPurchaseScreen;
