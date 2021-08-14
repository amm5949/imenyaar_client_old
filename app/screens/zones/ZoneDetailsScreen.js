import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import CardItem from "../../components/CardItem";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import AppText from "../../components/AppText";
import CircularIcon from "../../components/CircularIcon";
import ImageFileIcon from "../../components/icons/ImageFileIcon";
import ImageList from "../../components/ImageList";
import AudioFileIcon from "../../components/icons/AudioFileIcon";
import QuestionMarkIcon from "../../components/icons/QuestionMarkIcon";
import AudioPlayer from "../../components/AudioPlayer";
import AppCircularProgressBar from "../../components/AppCircularProgressBar";
import ProjectZoneIcon from "../../components/icons/ProjectZoneIcon";
import ProjectActivityIcon from "../../components/icons/ProjectActivityIcon";
import DescriptionIcon from "../../components/icons/DescriptionIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function ZoneDetailsScreen(props) {
  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/list_report_screen/background-2.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.detailsView}>
          <ScrollView style={{ width: "100%" }}>
            <AppText style={styles.headerText}>زون شماره 1</AppText>
            <View style={styles.zoneDetailsView}>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText style={styles.detailsHeaderText}>مشخصات زون :</AppText>
                <DescriptionIcon size={30} />
              </View>
              <AppText style={styles.detailsText}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam.
              </AppText>
            </View>
            <View style={styles.zoneDetailsView}>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.yellow }]}
                >
                  توضیحات زون :
                </AppText>
                <DescriptionIcon size={30} color={colors.yellow} />
              </View>
              <AppText style={styles.detailsText}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam.
              </AppText>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201a31",
    justifyContent: "space-between",
    height: 1 * windowHeight,
  },
  detailsHeaderText: {
    fontSize: 12 / fontScale,
    color: "#58508d",
    marginRight: 10,
    position: "relative",
    top: 3,
  },
  detailsText: {
    color: colors.black,
    fontSize: 10 / fontScale,
  },
  detailsView: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    paddingTop: 10,
    minHeight: 0.63 * windowHeight,
    maxHeight: 0.78 * windowHeight,
  },
  headerText: {
    fontSize: 14 / fontScale,
    color: colors.black,
    marginRight: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  imageBackground: {
    width: "100%",
    height: 0.85 * windowHeight,
    // marginBottom: 20,
    alignItems: "center",
  },
  zoneDetailsHeaderView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  zoneDetailsView: {
    width: "100%",
    marginBottom: 30,
  },
});

export default ZoneDetailsScreen;
