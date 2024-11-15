import React from "react";
import { Platform } from "react-native";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  handleDelete,
  handleRemove,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ListItem({
  header,
  detailsFirst,
  detailsSecond,
  date,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable
      containerStyle={{
        width: "90%",
        overflow: "visible",
        marginTop: 15,
        marginBottom: 15,
      }}
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        onPress={onPress}
        underlayColor={"#777"}
        style={{ borderRadius: 5 }}
      >
        <View>
          <View style={[styles.whiteView]}>
            <View style={styles.logoView}>{IconComponent}</View>
            {date && (
              <View style={styles.dateView}>
                <Text style={styles.dateText}>{date}</Text>
              </View>
            )}
            <View style={styles.textView}>
              <AppText
                style={[
                  styles.headerText,
                  !detailsSecond && { marginBottom: 10 },
                ]}
                w={"b"}
                numberOfLines={1}
              >
                {header}
              </AppText>
              <AppText style={styles.detailText} numberOfLines={1}>
                {detailsFirst}
              </AppText>
              {detailsSecond && (
                <AppText style={styles.detailText} numberOfLines={1}>
                  {detailsSecond}
                </AppText>
              )}
            </View>
          </View>
          <View style={styles.bottomView}></View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: colors.yellow,
    width: 40,
    height: 40,
    borderRadius: 5,
    bottom: -4,
    left: -4,
    position: "absolute",
    zIndex: -10,
    elevation: -10,
  },
  container: {
    width: "100%",
    position: "relative",
    height: 0.09 * windowHeight,
  },
  dateText: {
    fontSize: 10.5 / fontScale,
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
    width: "68%",
    textAlign: "right",
    marginBottom: Platform.OS === "web" ? 3 : 0,
  },
  logoView: {
    backgroundColor: "#d4d8f0",
    width: 50,
    height: 50,
    borderRadius: 5,
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
    alignItems: "flex-end",
    // height: "100%",
  },
  touchableView: {
    width: "90%",
    // height: 10,
    borderRadius: 5,
  },
  detailText: {
    fontSize: 10 / fontScale,
    color: "#aaa",
    width: "79%",
    textAlign: "right",
    marginBottom: Platform.OS === "web" ? 3 : 0,
  },
  whiteView: {
    justifyContent: "center",
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 5,
    // height: 0.09 * windowHeight,
    paddingVertical: 10,
    zIndex: 5,
    elevation: 6,
    shadowRadius: 20,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});

export default ListItem;
