import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";

export default function Splash() {
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
            source={require("../../assets/1.png")}
          />
          <AppText
            style={{ color: "#232946", textAlign: "center", fontSize: 15 }}
          >
            به روز باش ! ساختمونتو خودت مدیریت کن
          </AppText>
          <AppText
            style={{
              color: "#fff",
              textAlign: "center",
              marginHorizontal: 50,
              width: 127 * 1.9,
            }}
          >
            برای داشتن یک ساختمون خوب نیاز به یک برنامه مدیریت خوب داری
          </AppText>
        </View>
      </View>
      <View style={styles.footer}>
        <AppButton
          viewStyle={{
            borderTopRightRadius: 15,
          }}
          textStyle={{
            fontSize: 15,
          }}
          title="قبلی >>"
        />
        <AppButton
          viewStyle={{
            borderTopLeftRadius: 15,
          }}
          textStyle={{
            fontSize: 15,
          }}
          title="<< بعدی"
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
    overflow: "scroll",
    paddingTop: StatusBar.currentHeight,
    position: "relative",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
  },
  headerView: {
    // position: "absolute",
    // top: 20,
    alignItems: "center",
  },
  image: {
    width: 180 * 1.7,
    height: 133 * 1.7,
  },
  text: {
    fontSize: 22,
  },
  view: {
    backgroundColor: "#d4d8f0",
    width: 167 * 2,
    height: 173.5 * 1.7,
    borderRadius: 25,
    marginTop: 60,
    alignItems: "center",
    overflow: "scroll",
  },
  contentView: {
    alignItems: "center",
    top: -60,
    position: "relative",
    overflow: "scroll",
  },
});
