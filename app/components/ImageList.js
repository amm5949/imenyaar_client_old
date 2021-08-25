import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import WebModal from "modal-enhanced-react-native-web";
import { Platform } from "react-native";

let Modal;
if (Platform.OS === "web") Modal = WebModal;
else Modal = require("react-native").Modal;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

// const pictures = [
//   require("../assets/list_report_screen/building(1).jpg"),
//   require("../assets/list_report_screen/building(2).jpg"),
//   require("../assets/list_report_screen/building(3).jpg"),
//   require("../assets/list_report_screen/building(4).jpg"),
//   require("../assets/list_report_screen/building(5).jpg"),
//   require("../assets/list_report_screen/building(6).jpg"),
// ];

function ImageList({ pictures }) {
  const [rangeStart, setRangeStart] = useState(0);
  const [modalNumber, setModalNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const setRange = (next) => {
    if (next && rangeStart + 3 < pictures.length) {
      setRangeStart(rangeStart + 3);
    } else if (!next && rangeStart - 3 >= 0) {
      setRangeStart(rangeStart - 3);
    }
  };
  const setModal = (next) => {
    if (next && modalNumber + 1 < pictures.length) {
      setModalNumber(modalNumber + 1);
    } else if (!next && modalNumber - 1 >= 0) {
      setModalNumber(modalNumber - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#00000099",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={{ position: "relative", right: 10, alignSelf: "flex-end" }}
          >
            <MaterialCommunityIcons
              name="close-circle"
              size={30}
              color={colors.yellow}
            />
          </TouchableOpacity>
          <Image
            source={pictures[modalNumber]}
            style={{
              width: 0.9 * windowWidth,
              height: 0.55 * windowHeight,
              alignItems: "flex-end",
            }}
            resizeMode="contain"
          />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setModal(false)}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModal(true)}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={50}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setRange(false)}>
        <MaterialCommunityIcons name="chevron-left" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalNumber(rangeStart);
          setShowModal(true);
        }}
      >
        <Image
          source={pictures[rangeStart]}
          style={styles.picture}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalNumber(rangeStart + 1);
          rangeStart + 1 < pictures.length && setShowModal(true);
        }}
      >
        <Image
          source={pictures[rangeStart + 1]}
          style={styles.picture}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModalNumber(rangeStart + 2);
          rangeStart + 2 < pictures.length && setShowModal(true);
        }}
      >
        <Image
          source={pictures[rangeStart + 2]}
          style={styles.picture}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setRange(true)}>
        <MaterialCommunityIcons name="chevron-right" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  picture: {
    width: 0.25 * windowWidth,
    height: 0.087 * windowHeight,
    borderRadius: 10,
  },
});

export default ImageList;
