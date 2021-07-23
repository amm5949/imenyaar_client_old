import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CircularIcon from "./CircularIcon";
import colors from "../config/colors";
import { ProgressBar } from "react-native-paper";
import AppText from "./AppText";
import RepeatIcon from "./icons/RepeatIcon";
import ShuffleIcon from "./icons/ShuffleIcon";
import VolumeIcon from "./icons/VolumeIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AudioPlayer(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="chevron-left" size={20} />
      </TouchableOpacity>
      <View style={styles.playerView}>
        <CircularIcon
          Icon={
            <MaterialCommunityIcons
              name="play"
              size={20}
              color={colors.errorRed}
            />
          }
          size={30}
          color={colors.yellow + "66"}
        />
        <View>
          <View style={styles.voiceDetailsView}>
            <AppText style={styles.voiceDetailsText}>مدیریت ایستگاه</AppText>
            <AppText style={styles.voiceDetailsText}>1:05</AppText>
          </View>
          <ProgressBar
            progress={0.5}
            color={colors.errorRed}
            style={{
              width: 0.494 * windowWidth,
              backgroundColor: "#d5d7e1",
              borderRadius: 10,
            }}
          />
        </View>
        <VolumeIcon size={10} />
        <RepeatIcon size={10} />
        <ShuffleIcon size={12} />
      </View>
      <TouchableOpacity>
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
    width: "100%",
  },
  playerView: {
    flexDirection: "row",
    backgroundColor: colors.inputViewBackground,
    paddingHorizontal: 7,
    borderRadius: 7,
    paddingVertical: 10,
    alignItems: "center",
    width: 0.79 * windowWidth,
    justifyContent: "space-evenly",
  },
  voiceDetailsText: {
    fontSize: 7.5 / fontScale,
    color: "#4d4f5c",
  },
  voiceDetailsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default AudioPlayer;
