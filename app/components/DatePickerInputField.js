import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import WebModal from "modal-enhanced-react-native-web";
import { Platform } from "react-native";

let Modal;
if (Platform.OS === "web") Modal = WebModal;
else Modal = require("react-native").Modal;
// import AppDatePicker from "./AppDatePicker";
// import { convertToPersianNumber } from "../components/UtilFunctions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function DatePickerInputField({
  label,
  required,
  viewStyle,
  containerStyle,
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
        <Modal animationType="slide" transparent={true} visible={visible}>
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
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 40,
                backgroundColor: colors.inputViewBackground,
                borderRadius: 10,
              }}
            >
              {/* <AppDatePicker
              selected={date}
              onSelect={(date) => {
                setDate(date);
                setVisible(false);
              }}
            /> */}
            </View>
          </View>
        </Modal>
        {label && (
          <AppText style={[styles.label, { color: "#2f4b7c" }]}>
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
              style={styles.textInput}
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
    padding: 10,
    paddingHorizontal: 6,
  },
  textInput: {
    fontSize: 12 / fontScale,
    paddingHorizontal: 10,
    flex: 1,
    width: "100%",
    direction: "rtl",
    color: colors.black,
    fontFamily: "iran-sans-regular",
    textAlign: "right",
    // backgroundColor: "red",
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 9 / fontScale,
    paddingHorizontal: 5,
  },
});

export default DatePickerInputField;
