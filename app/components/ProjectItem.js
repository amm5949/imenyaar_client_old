import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import AppCircularProgressBar from "./AppCircularProgressBar";
import AppText from "./AppText";
import { convertToPersianNumber } from "./UtilFunctions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ProjectItem({
  progress = 0.8,
  title = "پروژه برج مروارید",
  daysLeft = 1,
  image = null,
}) {
  let color = null;
  if (progress <= 0.25) color = colors.errorRed;
  else if (progress <= 0.5) color = colors.yellow;
  else if (progress <= 0.75) color = "#5D3FD3";
  else color = colors.green;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerView}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppCircularProgressBar
            radius={20}
            strokeWidth={4}
            textStyle={styles.chartText}
            percent={progress}
            color={color}
          />
          <AppText style={{ fontSize: 9 / fontScale, color: color }}>
            پیشرفت زمانی
          </AppText>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <AppText style={styles.headerText}>{title}</AppText>
            <AppText style={styles.detailsText}>
              {convertToPersianNumber(daysLeft.toString())} روز تا اتمام پروژه
            </AppText>
          </View>
          {image ? (
            <Image style={styles.image} source={image} resizeMode="cover" />
          ) : (
            <View style={styles.projectDefaultView}>
              <View style={styles.projectDefaultInnerView}>
                <MaterialCommunityIcons name="domain" size={30} color="#aaa" />
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
    height: 0.123 * windowHeight,
    width: 0.846 * windowWidth,
    backgroundColor: colors.white,
    borderRadius: 7,
    padding: 5,
    marginBottom: 15,
    // marginTop: 10,
  },
  chartText: {
    fontSize: 10 / fontScale,
    top: 17,
  },
  detailsText: {
    fontSize: 10 / fontScale,
    color: "#777",
  },
  headerText: {
    fontSize: 13 / fontScale,
    color: colors.yellow,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 7,
    marginLeft: 10,
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
  },
  projectDefaultView: {
    width: 60,
    height: 60,
    borderRadius: 7,
    marginLeft: 10,
    backgroundColor: colors.inputViewBackground,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  projectDefaultInnerView: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: colors.inputViewBackground,
    width: "100%",
    height: "100%",
  },
});

export default ProjectItem;
