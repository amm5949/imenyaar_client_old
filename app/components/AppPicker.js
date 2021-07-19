import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppPicker(props) {
  let [fontsLoaded] = useFonts({
    IranSans: require("../assets/fonts/iran-sans.ttf"),
  });
  const [selected, setIsSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const countries = [
    " پروژه برج مروارید",
    "پروژه ساخت هوشمند",
    "kkfkf",
    "ldfdfkldf",
  ];
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <AppText style={styles.title}>نام پروژه</AppText>
        <SelectDropdown
          data={countries}
          defaultButtonText="مثال : زون شماره اول"
          onSelect={(selectedItem, index) => {
            setIsSelected(true);
            setSelectedIndex(index);
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonTextStyle={[
            styles.pickerText,
            { fontFamily: "IranSans", color: selected ? "#333" : "#aaa" },
          ]}
          buttonStyle={styles.pickerStyle}
          dropdownStyle={styles.dropdownView}
          rowStyle={styles.rowView}
          rowTextStyle={[styles.rowText, { fontFamily: "IranSans" }]}
          dropdownIconPosition="left"
          renderDropdownIcon={() => (
            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color="#97a7c3"
            />
          )}
          renderCustomizedRowChild={(item, index) => {
            if (index === selectedIndex)
              return (
                <View style={styles.rowView}>
                  <AppText style={styles.rowText}>{item}</AppText>
                  <MaterialCommunityIcons
                    name="checkbox-marked"
                    size={20}
                    color={colors.yellow}
                  />
                </View>
              );

            return (
              <View style={styles.rowView}>
                <AppText style={styles.rowText}>{item}</AppText>
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={20}
                  color={colors.yellow}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 12,
  },
  pickerStyle: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 7,
    height: 45,
  },
  pickerText: {
    right: 10,
    fontSize: 11,
    position: "absolute",
  },
  dropdownView: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  rowText: {
    color: "#333",
    right: 10,
    fontSize: 12,
    position: "absolute",
  },
  rowView: {
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 10,
    color: colors.darkBlue,
    paddingRight: 5,
    paddingBottom: 3,
  },
});

export default AppPicker;
