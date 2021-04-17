import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SplashFirstScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <AppText style={[styles.text, { color: "#fff" }]}>آسان</AppText>
        <AppText style={[styles.text, { color: "#f2c94c" }]}>ایمن یار</AppText>
      </View>
      <View style={styles.view}>
        <View style={styles.contentView}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require("../../assets/splash_screen/splash-1.png")}
          />
          <AppText style={styles.contentHeader}>
            به روز باش ! ساختمونتو خودت مدیریت کن
          </AppText>
          <AppText style={styles.contentText}>
            برای داشتن یک ساختمون خوب نیاز به یک برنامه مدیریت خوب داری
          </AppText>
        </View>
      </View>
      <View style={styles.sliderView}>
        <View style={[styles.slider, { backgroundColor: "#bbebee" }]} />
        <View style={styles.slider} />
        <View style={styles.slider} />
      </View>
      <View style={styles.footer}>
        {/* <AppButton
          viewStyle={{
            borderTopRightRadius: 15,
          }}
          textStyle={{
            fontSize: 15,
            paddingTop: 4,
          }}
          title="قبلی "
          LeftIcon={
            <MaterialCommunityIcons name="chevron-double-left" size={20} />
          }
        /> */}
        <AppButton
          onPress={() => {
            props.navigation.navigate('SplashSecondScreen')
          }}
          viewStyle={{
            borderTopLeftRadius: 15,
          }}
          textStyle={{
            fontSize: 15,
            paddingTop: 4,
          }}
          RightIcon={
            <MaterialCommunityIcons name="chevron-double-right" size={20} />
          }
          title=" بعدی"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b2036",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 0.024 * windowHeight,
    position: "relative",
  },
  footer: {
    width: "100%",
    flexDirection: "row-reverse",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
  },
  headerView: {
    alignItems: "center",
    marginBottom: 0.136 * windowHeight,
    position: "relative",
    left: "5%",
  },
  image: {
    width: "100%",
    height: 0.431 * windowHeight,
  },
  text: {
    fontSize: 22,
  },
  view: {
    backgroundColor: "#d4d8f0",
    width: 0.92 * windowWidth,
    height: 0.56 * windowHeight,
    borderRadius: 50,
    alignItems: "center",
    overflow: "scroll",
  },
  contentView: {
    alignItems: "center",
    top: "-20%",
    position: "relative",
    width: "100%",
  },
  contentHeader: {
    color: "#232946",
    textAlign: "center",
    fontSize: 15,
    marginTop: 0.037 * windowHeight,
    marginBottom: 0.03 * windowHeight,
  },
  contentText: {
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 0.11 * windowWidth,
    width: 0.705 * windowWidth,
  },
  slider: {
    height: 10,
    width: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginHorizontal: 0.033 * windowWidth,
  },
  sliderView: {
    marginTop: 0.043 * windowHeight,
    flexDirection: "row",
    alignItems: "center",
  },
});
