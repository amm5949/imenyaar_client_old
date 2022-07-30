import React, { useState, useEffect } from "react";
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
  placeholder,
  data,
  title,
  required,
  setFunction,
  containerStyle,
  mode,
}) {
  let [fontsLoaded] = useFonts({
    IranSans: require("../assets/fonts/iran-sans.ttf"),
  });
  const itemArray = [];
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(data ?? []);
  const [value, setValue] = useState(null);


  const handleCLick = () => {
    setValue(null)
  }
  useEffect(() => {
    data && data.map(p => itemArray.push({ value: p.name, label: p.name }))
    setItems(itemArray)
  }, [data])


  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={[styles.container, containerStyle]}>
        <AppText style={styles.title}>
          {title + " "}
          {required && (
            <Text style={{ color: colors.yellow, fontSize: 15, cursor: 'pointer' }} onClick={handleCLick}>
              {!value ? <>*</> : <>حذف فیلتر</>}
            </Text>
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
            console.log("=>>>", props);
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
