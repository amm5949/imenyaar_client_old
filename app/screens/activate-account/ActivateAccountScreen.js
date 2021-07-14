import React, { useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import ActivateAccountCard from "../../components/ActivateAccountCard";
import AppButton from "../../components/AppButton";
import CircularIcon from "../../components/CircularIcon";
import colors from "../../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ActivateAccountScreen(props) {
  const [type, setType] = useState("gold");
  return (
    <View style={styles.container}>
      <AppText style={styles.headerText}>فعال سازی حساب</AppText>
      <AppText style={styles.text}>
        یکی از حساب های موجود را انتخاب نمایید
      </AppText>
      <ActivateAccountCard type={type} navigation={props.navigation} />
      <View style={styles.buttonContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AppText
            style={{
              color: colors.yellow,
              paddingRight: 10,
              position: "relative",
              top: 3,
              opacity: type === "gold" ? 0.25 : 1,
            }}
          >
            قبلی
          </AppText>
          <CircularIcon
            Icon={
              <MaterialCommunityIcons
                name="arrow-left-bold"
                size={35}
                color="white"
              />
            }
            size={45}
            onPress={() => {
              if (type === "gold") return;
              if (type === "silver") setType("gold");
              else setType("silver");
            }}
            color={colors.yellow}
            style={{ opacity: type === "gold" ? 0.25 : 1 }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CircularIcon
            Icon={
              <MaterialCommunityIcons
                name="arrow-right-bold"
                size={35}
                color="white"
              />
            }
            size={45}
            onPress={() => {
              if (type === "bronze") return;
              if (type === "gold") setType("silver");
              else setType("bronze");
            }}
            color={colors.yellow}
            style={{ opacity: type === "bronze" ? 0.25 : 1 }}
          />
          <AppText
            style={{
              color: colors.yellow,
              paddingLeft: 10,
              position: "relative",
              top: 3,
              opacity: type === "bronze" ? 0.25 : 1,
            }}
          >
            بعدی
          </AppText>
        </View>
      </View>
      <AppButton
        title="۷ روز استفاده رایگان"
        viewStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputViewBackground,
    alignItems: "center",
    // paddingTop: StatusBar.currentHeight + 10,
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    color: colors.darkBlue,
    marginTop: 0.067 * windowHeight,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  text: {
    color: "#58508d",
    fontSize: 13,
    marginBottom: 0.061 * windowHeight,
  },
  button: {
    width: "70%",
    backgroundColor: "#b8c1ec",
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
  },
});

export default ActivateAccountScreen;
