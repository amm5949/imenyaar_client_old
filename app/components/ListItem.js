import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Animated from "react-native-reanimated";
import Swipeable from "react-native-gesture-handler/Swipeable";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ListItem({ key }) {
  return (
    // <Swipeable>
    <TouchableHighlight
      onPress={() => console.log("hi")}
      underlayColor="#aaa"
      style={styles.touchableView}
      key={key}
    >
      <View style={styles.container}>
        <View style={styles.logoView}>
          <MaterialCommunityIcons
            name="chart-line"
            size={30}
            color={colors.black}
          />
        </View>
        <View style={styles.whiteView}>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>00/02/14</Text>
          </View>
          <View style={styles.textView}>
            <AppText style={styles.headerText}>
              گزارش ثبت شده از حسن علی آبادی
            </AppText>
            <AppText style={styles.detailText}>
              فعالیت : سیم کشی ساختمان
            </AppText>
            <AppText style={styles.detailText}>زون : زون شماره 1</AppText>
          </View>
        </View>
        <View style={styles.bottomView}></View>
      </View>
    </TouchableHighlight>
    // </Swipeable>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: colors.yellow,
    width: 40,
    height: 40,
    borderRadius: 10,
    bottom: -4,
    left: -4,
    position: "absolute",
    zIndex: 1,
    elevation: 5,
  },
  container: {
    width: "100%",
    position: "relative",
    height: 0.09 * windowHeight,
  },
  dateText: {
    fontSize: 11 / fontScale,
    fontWeight: "700",
    color: "#003f5c",
    padding: 5,
  },
  dateView: {
    backgroundColor: "#f2f8f1",
    position: "absolute",
    left: 10,
    top: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 11 / fontScale,
    color: colors.black,
  },
  logoView: {
    backgroundColor: "#d4d8f0",
    width: 50,
    height: 50,
    borderRadius: 10,
    top: -15,
    right: -10,
    position: "absolute",
    zIndex: 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textView: {
    marginRight: 50,
    marginTop: 5,
  },
  touchableView: {
    width: "90%",
    // height: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 10 / fontScale,
    color: "#aaa",
  },
  whiteView: {
    backgroundColor: colors.white,
    width: "100%",
    position: "absolute",
    borderRadius: 10,
    height: 0.09 * windowHeight,
    overflow: "hidden",
    elevation: 5,
    zIndex: 3,
  },
});

export default ListItem;
