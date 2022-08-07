import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import WebModal from "modal-enhanced-react-native-web";
import { Platform } from "react-native";
import { useFonts } from "expo-font";
import { Dimensions } from "react-native";

const fontScale = Dimensions.get("window").fontScale;

let Modal;
if (Platform.OS === "web") Modal = WebModal;
else Modal = require("react-native").Modal;
import AppDatePicker from "./AppDatePicker";
import { convertToPersianNumber } from "../components/UtilFunctions";

function DatePickerInputField({
  label,
  required,
  viewStyle,
  containerStyle,
  formikRef,
  dateType,
  ...otherProps
}) {
  const [date, setDate] = useState();
  const [visible, setVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    "iran-sans-regular": require("../assets/fonts/iran-sans-regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={[{ marginBottom: 3 }, containerStyle]}>
        <Modal
          style={{ margin: 0 }}
          animationType="slide"
          transparent={true}
          visible={visible}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#00000099",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={{ position: "relative", right: 10, alignSelf: "flex-end" }}
            >
              <MaterialCommunityIcons
                name="close-circle"
                size={30}
                color={colors.yellow}
              />
            </TouchableOpacity>

            <AppDatePicker
              selected={date}
              onSelect={(date) => {
                setDate(date);
                dateType === "startDate"
                  ? formikRef?.current.setFieldValue("startDate", date)
                  : formikRef?.current.setFieldValue("endDate", date);
                setVisible(false);
              }}
            />
          </View>
        </Modal>
        {label && (
          <AppText
            style={[styles.label, { color: "#2f4b7c" }]}
            numberOfLines={1}
          >
            {label + " "}
            {required && (
              <Text style={{ color: colors.yellow, fontSize: 15 }}>*</Text>
            )}
          </AppText>
        )}
        <TouchableWithoutFeedback onPress={() => setVisible(true)}>
          <View style={[styles.container, viewStyle]}>
            <MaterialCommunityIcons
              name="calendar-blank"
              size={20}
              color="#a9adb8"
            />
            <TextInput
              editable={false}
              value={date}
              style={[styles.textInput, { fontFamily: "iran-sans-regular" }]}
              {...otherProps}
              placeholderTextColor="#bbb"
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Platform.OS === "web" ? 10 : 6,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 11 / fontScale,
    flex: 1,
    width: "100%",
    color: colors.black,
    textAlign: "right",
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 9 / fontScale,
    paddingHorizontal: 10,
    marginBottom: 3,
  },
});

export default DatePickerInputField;
