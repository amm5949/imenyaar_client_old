import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
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
import moment from 'moment-jalaali'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ProjectItem({
  progress,
  title,
  scheduled_end,
  image,
  onPress,
}) {
  let color = null;
  if (progress <= 0.25) color = colors.errorRed;
  else if (progress <= 0.5) color = colors.yellow;
  else if (progress <= 0.75) color = "#5D3FD3";
  else color = colors.green;
  const [daysleft, setDaysleft] = useState(null)
  useEffect(() => {
    const date_end = new Date(moment(scheduled_end.toString(), 'jYYYY/jM/jD HH:mm').format('YYYY-M-D'))
    const days_left = parseInt((date_end.getTime() - Date.now()) / (24 * 3600 * 1000))
    days_left > 0 && setDaysleft(days_left)
  }, [])
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
            <AppText style={styles.detailsText}>{daysleft ?
              <>
                {convertToPersianNumber(daysleft.toString())}
                روز تا اتمام پروژه
              </> : <>
                تمام شده
              </>
            }
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
    shadowRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 1,
      height: 2,
    },
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
    // top: 17,
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
