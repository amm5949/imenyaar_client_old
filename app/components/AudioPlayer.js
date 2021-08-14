import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CircularIcon from "./CircularIcon";
import colors from "../config/colors";
import { ProgressBar } from "react-native-paper";
import AppText from "./AppText";
import RepeatIcon from "./icons/RepeatIcon";
import ShuffleIcon from "./icons/ShuffleIcon";
import VolumeIcon from "./icons/VolumeIcon";
import { Audio } from "expo-av";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AudioPlayer(props) {
  const [voiceLength, setVoiceLength] = useState(10);
  const [progress, setProgress] = React.useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  useEffect(() => {
    if (playbackObject === null) {
      const sound = new Audio.Sound();
      setPlaybackObject(sound);
    }
    // let interval = setInterval(() => {
    //   setProgress((lastTimerCount) => {
    //     if (lastTimerCount === voiceLength - 1) {
    //       return voiceLength;
    //     } else return lastTimerCount + 1;
    //   });
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);

  const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(
        require("../assets/list_report_screen/sample-voice.mp3"),
        { shouldPlay: true, isLooping: true }
      );
      setVoiceLength(status.durationMillis / 1000);
      console.log(status);
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }
    if (playbackStatus.isPlaying) {
      const status = await playbackObject.pauseAsync();
      setIsPlaying(false);
      return setPlaybackStatus(status);
    }

    if (!playbackStatus.isPlaying) {
      const status = await playbackObject.playAsync();
      setIsPlaying(true);
      return setPlaybackStatus(status);
    }
  };

  // async function playSound() {
  // const { sound } = await Audio.Sound.createAsync(
  //   require("../assets/list_report_screen/sample-voice.m4a")
  // );
  //   setSound(sound);
  //   await sound.playAsync();
  // }

  // React.useEffect(() => {
  //   setProgress(progress + 0.01);
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

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
          onPress={handleAudioPlayPause}
        />
        <View>
          <View style={styles.voiceDetailsView}>
            <AppText style={styles.voiceDetailsText}>مدیریت ایستگاه</AppText>
            <AppText style={styles.voiceDetailsText}>1:05</AppText>
          </View>
          <ProgressBar
            progress={progress / voiceLength}
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
