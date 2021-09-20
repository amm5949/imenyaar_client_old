import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useFonts } from "expo-font";
// import SelectDropdown from "react-native-select-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import DropDownPicker from "react-native-dropdown-picker";
import { Platform, TouchableHighlight } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppPicker({
  choices = ["hi", "hi"],
  placeholder,
  title,
  required,
  setFunction,
  containerStyle,
  mode,
}) {
  let [fontsLoaded] = useFonts({
    IranSans: require("../assets/fonts/iran-sans.ttf"),
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "گزینه 1", value: "گزینه 1" },
    { label: "گزینه 2", value: "گزینه 2" },
    { label: "گزینه 3", value: "گزینه 3" },
    { label: "گزینه 4", value: "گزینه 4" },
    { label: "گزینه 5", value: "گزینه 5" },
  ]);
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={[styles.container, containerStyle]}>
        <AppText style={styles.title}>
          {title + " "}
          {required && (
            <Text style={{ color: colors.yellow, fontSize: 15 }}>*</Text>
          )}
        </AppText>
        <DropDownPicker
          dropDownDirection={Platform.OS === "web" ? "TOP" : mode}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={placeholder}
          placeholderStyle={{
            fontFamily: "IranSans",
            fontSize: 10 / fontScale,
            color: "#aaa",
          }}
          style={{
            borderWidth: 0,
            backgroundColor: colors.white,
            alignItems: "center",
            flexDirection: "row-reverse",
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 7,
          }}
          maxHeight={100}
          textStyle={{ fontFamily: "IranSans", fontSize: 11 / fontScale }}
          dropDownContainerStyle={{
            backgroundColor: colors.white,
            elevation: 10,
            zIndex: 1000,
            shadowRadius: 10,
            shadowOpacity: 0.3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            justifyContent: "space-evenly",
            borderWidth: 0,
          }}
          renderListItem={(props) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  marginVertical: 6,
                }}
                onPress={() => {
                  setValue(props.value);
                  setOpen(false);
                }}
              >
                {props.isSelected ? (
                  <MaterialCommunityIcons
                    name="checkbox-marked"
                    size={20}
                    color={colors.yellow}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={20}
                    color={colors.yellow}
                  />
                )}
                <AppText w="r" style={{ fontSize: 10 / fontScale }}>
                  {props.value}
                </AppText>
              </TouchableOpacity>
            );
          }}
          listItemContainerStyle={{}}
          TickIconComponent={() => (
            <MaterialCommunityIcons
              name="checkbox-marked"
              size={20}
              color={colors.yellow}
            />
          )}
        />
        {/* <SelectDropdown
          data={choices}
          defaultButtonText={placeholder}
          onSelect={(selectedItem, index) => {
            setIsSelected(true);
            setSelectedIndex(index);
            setFunction && setFunction(selectedItem);
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
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
        /> */}
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
    fontSize: 10.5,
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