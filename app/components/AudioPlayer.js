import React, { useEffect, useRef, useState } from "react";
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
import { getTimeFromSeconds } from "./UtilFunctions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const voices = [
  {
    title: "وویس شماره 1",
    file: require("../assets/list_report_screen/sample-voice-2.m4a"),
    duration: 91000,
  },
  {
    title: "وویس شماره 2",
    file: require("../assets/list_report_screen/sample-voice.mp3"),
    duration: 140000,
  },
];

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(new Audio.Sound());
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const [current, setCurrent] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener(
      "beforeRemove",
      async (e) => {
        await playbackObject.unloadAsync();
        setPlaybackStatus(null);
        // setIsPlaying(false);
        // fadeAnim.setValue(0);
        e.preventDefault(); // Prevent default action
        unsubscribe();
      }
    );
  }, []);

  const handleChange = async (next) => {
    if (next && voices.length > current + 1) {
      await playbackObject.unloadAsync();
      setPlaybackStatus(null);
      setIsPlaying(false);
      fadeAnim.setValue(0);
      setCurrent(current + 1);
    } else if (!next && current - 1 >= 0) {
      await playbackObject.unloadAsync();
      setPlaybackStatus(null);
      setIsPlaying(false);
      fadeAnim.setValue(0);
      setCurrent(current - 1);
    }
  };

  const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      const status = await playbackObject.loadAsync(voices[current].file, {
        shouldPlay: true,
        isLooping: true,
      });
      fadeIn(status.durationMillis);
      console.log(status);
      setIsPlaying(true);
      setPlaybackStatus(status);
      return;
    }
    if (playbackStatus.isPlaying) {
      const status = await playbackObject.pauseAsync();
      fadeAnim.stopAnimation();
      // console.log(status);
      setIsPlaying(false);
      setPlaybackStatus(status);
      return;
    }
    if (!playbackStatus.isPlaying) {
      const status = await playbackObject.playAsync();
      // console.log(status);
      fadeIn(status.durationMillis - status.positionMillis);
      setIsPlaying(true);
      setPlaybackStatus(status);
      return;
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
        console.log(playbackStatus);
        fadeIn(voices[current].duration);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleChange(false)}>
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
            <AppText style={styles.voiceDetailsText}>
              {voices[current].title}
            </AppText>
            <AppText style={styles.voiceDetailsText}>
              {getTimeFromSeconds(Math.ceil(voices[current].duration / 1000))}
            </AppText>
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
      <TouchableOpacity onPress={() => handleChange(true)}>
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
