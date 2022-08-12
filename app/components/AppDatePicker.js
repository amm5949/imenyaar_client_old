import React from "react";
import { View, Text, StatusBar, Dimensions, StyleSheet } from "react-native";
import DatePicker from "../components/date";
import AppText from "../components/AppText";
import { useFonts } from "expo-font";
import colors from "../config/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppDatePicker({ onSelect, selected = "1400/5/5" }) {
  let [fontsLoaded] = useFonts({
    "iran-sans-regular": require("../assets/fonts/iran-sans-regular.ttf"),
    "iran-sans-medium": require("../assets/fonts/iran-sans-medium.ttf"),
    "iran-sans-bold": require("../assets/fonts/iran-sans-bold.ttf"),
    "iran-sans-light": require("../assets/fonts/iran-sans-light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <DatePicker
        style={{
          width: 0.75 * windowWidth,
          height: 0.3 * windowHeight,
          alignSelf: "center",
          backgroundColor: colors.white,
          // borderWidth: 1,
          // borderColor: "#4bcffa",
          borderRadius: 10,
          elevation: 4,
        }}
        selected={selected}
        dateSeparator="/"
        minDate="1400/5/25"
        maxDate="1420/1/1"
        onDateChange={(date) => onSelect(date)}
        yearMonthBoxStyle={{
          width: "30%",
          height: "75%",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2,
          borderColor: colors.white,
          borderRadius: 10,
          backgroundColor: colors.inputViewBackground,
          elevation: 7,
          shadowRadius: 15,
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 1,
            height: 1,
          },
        }}
        headerContainerStyle={{
          height: "15%",
        }}
        yearMonthTextStyle={{
          fontFamily: "iran-sans-bold",
          fontSize: 16 / fontScale,
          color: colors.darkBlue,
        }}
        iconContainerStyle={{ width: `${100 / 7}%` }}
        backIconStyle={{
          width: 20,
          height: 20,
          tintColor: colors.yellow,
        }}

        nextIconStyle={{
          width: 20,
          height: 20,
          tintColor: colors.yellow,
        }}

        eachYearStyle={{
          width: "21%",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.yellow,
          marginVertical: 5,
          marginHorizontal: "2%",
          borderColor: colors.white,
          borderWidth: 1.5,
          borderRadius: 10,
          elevation: 5,
          shadowRadius: 10,
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 1,
            height: 1,
          },
        }}

        eachYearTextStyle={{
          fontFamily: "iran-sans-medium",
          fontSize: 13 / fontScale,
          color: "white",
        }}

        eachMonthStyle={{
          width: "30%",
          height: "22%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.yellow,
          marginBottom: "2%",
          borderColor: colors.white,
          borderWidth: 1.5,
          borderRadius: 10,
          elevation: 5,
          shadowRadius: 10,
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 1,
            height: 1,
          },
        }}

        eachMonthTextStyle={{
          fontFamily: "iran-sans-medium",
          fontSize: 15 / fontScale,
          color: "white",
        }}

        weekdaysContainerStyle={{
          marginTop: 3,
          height: "9%",
          backgroundColor: colors.yellow + "dd",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          elevation: 2,
          shadowRadius: 5,
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 1,
            height: 1,
          },
        }}

        weekdayStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "white",
          borderBottomWidth: 1,
          borderEndWidth: 1,
          borderEndColor: "#ffffff55",
        }}

        weekdayTextStyle={{
          fontFamily: "iran-sans-bold",
          fontSize: 13 / fontScale,
          color: colors.darkBlue,
          marginBottom: 5,
        }}

        dayStyle={{
          backgroundColor: colors.yellow + "22",
          borderColor: "#ffffff",
          borderWidth: 0.5,
          width: `${100 / 7}%`,
          justifyContent: "center",
          alignItems: "center",
        }}

        selectedDayStyle={{
          width: "70%",
          aspectRatio: 1 / 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}

        selectedDayColor={colors.yellow}
        dayTextStyle={{
          fontFamily: "iran-sans-medium",
          fontSize: 14 / fontScale,
          padding: 4,
        }}

        selectedDayTextColor={colors.white}
        dayTextColor={colors.black}
        disabledTextColor="#ccc"
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default AppDatePicker;
