import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CircularIcon from "./CircularIcon";
import colors from "../config/colors";
import AppText from "./AppText";
import RepeatIcon from "./icons/RepeatIcon";
import ShuffleIcon from "./icons/ShuffleIcon";
import VolumeIcon from "./icons/VolumeIcon";
import { Audio } from "expo-av";
import { Easing } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(new Audio.Sound());
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(
        require("../assets/list_report_screen/sample-voice-2.m4a"),
        { shouldPlay: true, isLooping: true }
      );
      fadeIn(status.durationMillis);
      console.log(status);
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }
    if (playbackStatus.isPlaying) {
      const status = await playbackObject.pauseAsync();
      fadeAnim.stopAnimation();
      console.log(status);
      setIsPlaying(false);
      return setPlaybackStatus(status);
    }

    if (!playbackStatus.isPlaying) {
      const status = await playbackObject.playAsync();
      console.log(status);
      console.log("hiiiiiiiiiiiii        ", fadeAnim);
      fadeIn(status.durationMillis - status.positionMillis);
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }
  };
  const fadeIn = (duration) => {
    Animated.timing(fadeAnim, {
      toValue: 0.494 * windowWidth,
      duration: duration,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start((o) => {
      if (o.finished) {
        fadeAnim.setValue(0);
        fadeIn(playbackStatus.durationMillis);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="chevron-left" size={20} />
      </TouchableOpacity>
      <View style={styles.playerView}>
        <CircularIcon
          Icon={
            isPlaying ? (
              <MaterialCommunityIcons
                name="pause"
                size={20}
                color={colors.errorRed}
              />
            ) : (
              <MaterialCommunityIcons
                name="play"
                size={20}
                color={colors.errorRed}
              />
            )
          }
          size={30}
          color={colors.yellow + "44"}
          onPress={async () => await handleAudioPlayPause()}
        />
        <View>
          <View style={styles.voiceDetailsView}>
            <AppText style={styles.voiceDetailsText}>مدیریت ایستگاه</AppText>
            <AppText style={styles.voiceDetailsText}>1:05</AppText>
          </View>
          <View
            style={{
              overflow: "hidden",
              height: 3,
              width: 0.494 * windowWidth,
              backgroundColor: "#d5d7e1",
              borderRadius: 10,
            }}
          >
            <Animated.View
              style={{
                height: 3,
                backgroundColor: colors.errorRed,
                width: fadeAnim,
              }}
            ></Animated.View>
          </View>
        </View>
        <VolumeIcon size={10} />
        <RepeatIcon size={10} />
        <ShuffleIcon size={12} />
      </View>
      <TouchableOpacity onPress={fadeIn}>
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
