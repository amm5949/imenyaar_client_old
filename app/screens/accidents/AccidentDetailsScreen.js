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
import CasualtyIcon from "../../components/icons/CasualtyIcon";
import DebtIcon from "../../components/icons/DebtIcon";
import ProjectAccidentIcon from "../../components/icons/ProjectAccidentIcon";
import ClockIcon from "../../components/icons/ClockIcon";
import DescriptionIcon from "../../components/icons/DescriptionIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const pictures = [
  require("../../assets/list_report_screen/burn-house-1.jpg"),
  require("../../assets/list_report_screen/burn-house-2.jpg"),
  require("../../assets/list_report_screen/burn-house-3.jpg"),
  require("../../assets/list_report_screen/burn-house-4.jpg"),
];

function AccidentDetailsScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/list_report_screen/background-2.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.detailsView}>
          <ScrollView style={{ width: "100%" }}>
            <View style={styles.headerView}>
              <AppText style={styles.headerText}>پروژه برج مروارید</AppText>
            </View>
            <View style={styles.cardView}>
              <CardItem
                text="خسارت مالی : 20,000,000 ریال"
                Icon={<DebtIcon size={24} />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
              <CardItem
                text="تلفات جانی : 4 نفر"
                Icon={<CasualtyIcon size={24} />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
            </View>
            <View style={styles.cardView}>
              <CardItem
                text="زون : زون شماره 1"
                Icon={<ProjectZoneIcon size={23} />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
              <CardItem
                text="فعالیت : سیم کشی ساختمان"
                Icon={<ProjectActivityIcon size={23} />}
                viewStyle={{ marginHorizontal: 4, flex: 1 }}
              />
            </View>
            <View style={styles.textView}>
              <View style={styles.descriptionView}>
                <AppText style={[styles.text, { color: colors.darkBlue }]}>
                  گزارش حادثه ثبت شده از علی احمدیان
                </AppText>
                <MaterialCommunityIcons
                  name="account"
                  color={colors.darkBlue}
                  size={25}
                />
              </View>
              <View style={styles.descriptionView}>
                <AppText style={[styles.text, { color: colors.errorRed }]}>
                  نوع حادثه :{" "}
                  <AppText style={styles.text}>آتش سوزی در طبقه اول</AppText>
                </AppText>
                <ProjectAccidentIcon
                  size={26}
                  style={{ position: "relative", left: 3 }}
                />
              </View>
              <View style={styles.descriptionView}>
                <AppText
                  style={[
                    styles.text,
                    { color: colors.yellow, marginRight: 15 },
                  ]}
                >
                  ساعت حدودی رخداد حادثه :{" "}
                  <AppText style={styles.text}>3:45 عصر</AppText>
                </AppText>
                <ClockIcon size={20} color={colors.yellow} />
              </View>
              <View style={styles.descriptionView}>
                <AppText style={[styles.text, { color: "#58508d" }]}>
                  توضیحات حادثه :{" "}
                  <AppText style={styles.text}>
                    حادثه نزدیکای عصر به دلیل ترکیدن لوله های گاز و از نبود
                    ایمنی درست اتفاق افتاد
                  </AppText>
                </AppText>
                <DescriptionIcon size={25} />
              </View>
            </View>
            <View style={{ width: "100%", marginBottom: 10 }}>
              <View style={styles.imageSectionHeaderView}>
                <AppText style={[styles.imageSectionHeaderText]}>
                  عکس های ارسال شده :
                </AppText>
                <ImageFileIcon size={25} color="#7a7c83" />
              </View>
              <ImageList pictures={pictures} />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 18,
  },
  container: {
    backgroundColor: "#201a31",
    justifyContent: "space-between",
    height: 1 * windowHeight,
  },
  descriptionView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 19,
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
    maxHeight: 0.832 * windowHeight,
  },
  headerView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 14 / fontScale,
    color: colors.black,
    marginRight: 10,
  },
  imageBackground: {
    width: "100%",
    height: 0.85 * windowHeight,
    // marginBottom: 20,
    alignItems: "center",
  },
  imageSectionHeaderText: {
    fontSize: 10.5 / fontScale,
    width: "80%",
    color: "#7a7c83",
    marginRight: 10,
  },
  imageSectionHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  text: {
    fontSize: 10.5 / fontScale,
    textAlign: "right",
    width: "84%",
    marginRight: 10,
    color: "#333",
  },
  textView: {
    marginTop: 15,
    marginBottom: 10,
  },
});

export default AccidentDetailsScreen;
