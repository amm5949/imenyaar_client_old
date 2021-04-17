import React, { useState } from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import ActivateAccountCard from "../../components/ActivateAccountCard";
import AppButton from "../../components/AppButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ActivateAccountScreen(props) {
  const [type, setType] = useState("gold");
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={{
          alignSelf: "flex-end",
          paddingHorizontal: 0.019 * windowWidth,
          marginBottom: 0.035 * windowHeight,
        }}
        name="chevron-right"
        size={25}
        color="white"
      />
      <AppText style={styles.headerText}>فعال سازی حساب</AppText>
      <ActivateAccountCard type={type} navigation={props.navigation} />
      <View
        style={[
          styles.buttonContainer,
          { flexDirection: type === "gold" ? "row-reverse" : "row" },
        ]}
      >
        {(type === "silver" || type === "bronze") && (
          <AppButton
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
            onPress={() => {
              if (type === "silver") setType("gold");
              else setType("silver");
            }}
          />
        )}
        {(type === "gold" || type === "silver") && (
          <AppButton
            viewStyle={{
              borderTopLeftRadius: 15,
            }}
            textStyle={{
              fontSize: 15,
              paddingTop: 4,
            }}
            title=" بعدی"
            RightIcon={
              <MaterialCommunityIcons name="chevron-double-right" size={20} />
            }
            onPress={() => {
              if (type === "gold") setType("silver");
              else setType("bronze");
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1b2036",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 10,
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    color: "#f2c94c",
    marginBottom: 0.072 * windowHeight,
  },
  buttonContainer: {
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default ActivateAccountScreen;
