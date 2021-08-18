import React from "react";
import {
  Dimensions,
  Modal,
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
import AppDatePicker from "./AppDatePicker";
import { color } from "react-native-elements/dist/helpers";
const fontScale = Dimensions.get("window").fontScale;

function DatePickerInputField({
  label,
  required,
  requiredColor = colors.yellow,
  viewStyle,
  containerStyle,
  ...otherProps
}) {
  const [date, setDate] = useState();
  const [visible, setVisible] = useState(false);
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
            <AppDatePicker
              selected={date}
              onSelect={(date) => {
                setDate(date);
                setVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      {label && (
        <AppText style={[styles.label, { color: "#2f4b7c" }]}>
          {label + " "}
          {required && (
            <Text style={{ color: requiredColor, fontSize: 15 }}>*</Text>
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
    fontSize: 14 / fontScale,
    marginHorizontal: 10,
    flex: 1,
    direction: "rtl",
    color: colors.black,
  },
  label: {
    alignSelf: "flex-end",
    fontSize: 9 / fontScale,
    paddingHorizontal: 10,
  },
});

export default DatePickerInputField;