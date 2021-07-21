import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react/cjs/react.development";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const pictures = [
  require("../assets/list_report_screen/post(1).png"),
  require("../assets/list_report_screen/post(2).png"),
  require("../assets/list_report_screen/post(3).png"),
  require("../assets/list_report_screen/post(4).png"),
  require("../assets/list_report_screen/post(5).png"),
  require("../assets/list_report_screen/post(5).png"),
  require("../assets/list_report_screen/post(5).png"),
  require("../assets/list_report_screen/post(5).png"),
];

function ImageList(props) {
  const [rangeStart, setRangeStart] = useState(0);
  const setRange = (next) => {
    if (next && rangeStart + 3 < pictures.length) {
      setRangeStart(rangeStart + 3);
    } else if (!next && rangeStart - 3 >= 0) {
      setRangeStart(rangeStart - 3);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setRange(false)}>
        <MaterialCommunityIcons name="chevron-left" size={20} />
      </TouchableOpacity>
      <Image
        source={pictures[rangeStart]}
        style={styles.picture}
        resizeMode="cover"
      />
      <Image
        source={pictures[rangeStart + 1]}
        style={styles.picture}
        resizeMode="cover"
      />
      <Image
        source={pictures[rangeStart + 2]}
        style={styles.picture}
        resizeMode="cover"
      />
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
    width: 0.247 * windowWidth,
    height: 0.096 * windowHeight,
    borderRadius: 10,
  },
});

export default ImageList;
