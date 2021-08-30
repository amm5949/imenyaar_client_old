import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import WebModal from "modal-enhanced-react-native-web";
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import colors from "../config/colors";
import AppButton from "./AppButton";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";
import CircularIcon from "./CircularIcon";
import LocationPinIcon from "./icons/LocationPinIcon";
import SimpleLocationIcon from "./icons/SimpleLocationIcon";

let Modal;
if (Platform.OS === "web") Modal = WebModal;
else Modal = require("react-native").Modal;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppLocationPicker({
  label,
  required,
  viewStyle,
  containerStyle,
  ...otherProps
}) {
  const [location, setLocation] = useState({
    latitude: 36.304505,
    longitude: 59.546288,
  });
  const [prevLocation, setPrevLocation] = useState({
    latitude: 36.304505,
    longitude: 59.546288,
  });
  const [locationText, setLocationText] = useState(null);
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
          <View style={{ flex: 1 }}>
            <MapView
              initialRegion={{
                latitude: prevLocation.latitude,
                longitude: prevLocation.longitude,
                latitudeDelta: 0.5,
                longitudeDelta: 0.0121,
              }}
              style={{ width: windowWidth, height: windowHeight }}
              showsUserLocation={true}
              tintColor="#f90300"
              onPress={(e) => {
                const { coordinate } = e.nativeEvent;
                setLocation(coordinate);
              }}
            >
              <Marker
                coordinate={location}
                draggable
                pinColor="#d45087"
                onDragEnd={(e) => {
                  const { coordinate } = e.nativeEvent;
                  setLocation(coordinate);
                }}
              >
                {/* <LocationPinIcon size={100} /> */}
              </Marker>
            </MapView>
            <View
              style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                backgroundColor: colors.white,
                alignItems: "center",
                paddingTop: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                elevation: 10,
              }}
            >
              <AppTextInput
                label="موقعیت مکانی"
                required
                multiline
                viewStyle={{
                  backgroundColor: colors.inputViewBackground,
                  width: "90%",
                  height: 80,
                  alignItems: "flex-start",
                  marginBottom: 40,
                }}
                textValue={locationText}
                onChangeText={(text) => setLocationText(text)}
              />
              <AppButton
                title="ثبت موقعیت مکانی"
                color={colors.yellow}
                viewStyle={{
                  width: "100%",
                }}
                textStyle={{
                  fontSize: 14 / fontScale,
                  color: colors.white,
                  marginRight: 3,
                }}
                RightIcon={
                  <MaterialCommunityIcons
                    name="map-marker-check"
                    size={25}
                    color={colors.white}
                  />
                }
                onPress={() => {
                  if (locationText == null)
                    setLocationText(
                      location.longitude.toString() +
                        "-" +
                        location.latitude.toString()
                    );
                  setPrevLocation(location);
                  setVisible(false);
                }}
              />
            </View>
            <CircularIcon
              Icon={
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={40}
                  color={colors.white}
                />
              }
              containerStyle={{
                position: "absolute",
                top: 10,
                left: 10,
                elevation: 20,
                backgroundColor: colors.yellow,
                borderRadius: 30,
              }}
              onPress={() => {
                setLocation(prevLocation);
                setVisible(false);
              }}
              size={50}
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
            <SimpleLocationIcon size={20} color="#a9adb8" />
            <TextInput
              editable={false}
              value={locationText}
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
    paddingVertical: 10,
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
  },
});

export default AppLocationPicker;
