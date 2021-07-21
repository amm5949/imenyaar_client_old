import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const questionsList = [
  {
    question:
      "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",
    answer: "بله - بدون مانع میباشد",
  },
  {
    question:
      "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",
    answer: "بله - بدون مانع میباشد البته کلا خوب نیست",
  },
  {
    question:
      "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",
    answer: "بله - بدون مانع میباشد",
  },
];

function ReportDetailsScreen(props) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const setQuestion = (next) => {
    if (next && questionNumber + 1 < questionsList.length) {
      setQuestionNumber(questionNumber + 1);
    } else if (!next && questionNumber - 1 >= 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/login-screen/login.png")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <AppButton
            title="خروجی PDF"
            viewStyle={[
              styles.buttonView,
              { position: "absolute", top: 100, right: 10 },
            ]}
            textStyle={styles.buttonText}
          />
        </ImageBackground>
        <View style={styles.detailsView}>
          <View style={styles.headerView}>
            <AppButton
              title="تاخیر"
              viewStyle={[
                styles.buttonView,
                { backgroundColor: "#ff7c43", paddingHorizontal: 30 },
              ]}
              textStyle={[styles.buttonText, { fontSize: 12 }]}
            />
            <AppText style={styles.headerText}>پروژه برج مروارید</AppText>
          </View>
          <View style={styles.cardView}>
            <CardItem
              text="زون : زون شماره 1"
              Icon={
                <MaterialCommunityIcons
                  name="zodiac-cancer"
                  size={18}
                  color="#7a7c83"
                />
              }
            />
            <CardItem
              text="فعالیت : سیم کشی ساختمان"
              Icon={
                <MaterialCommunityIcons
                  name="zodiac-cancer"
                  size={18}
                  color="#7a7c83"
                />
              }
            />
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.questionHeaderView}>
              <View style={styles.buttonContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  <AppText
                    style={[styles.nextPrevButtonText, { paddingRight: 5 }]}
                  >
                    قبلی
                  </AppText>
                  <CircularIcon
                    Icon={
                      <MaterialCommunityIcons
                        name="chevron-left"
                        size={20}
                        color={colors.darkBlue}
                      />
                    }
                    size={30}
                    onPress={() => setQuestion(false)}
                    color={colors.white}
                    style={{ elevation: 3 }}
                  />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CircularIcon
                    Icon={
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={colors.darkBlue}
                      />
                    }
                    size={30}
                    onPress={() => setQuestion(true)}
                    color={colors.white}
                    style={{ elevation: 3 }}
                  />
                  <AppText
                    style={[styles.nextPrevButtonText, { paddingLeft: 5 }]}
                  >
                    بعدی
                  </AppText>
                </View>
              </View>
              <AppText
                style={[styles.headerText, { position: "relative", top: 3 }]}
              >
                سوالات
              </AppText>
            </View>
            <View style={styles.questionContentView}>
              <AppText style={styles.questionContentText}>
                {questionsList[questionNumber].question}
              </AppText>
              <QuestionMarkIcon size={30} />
            </View>
            <View style={styles.questionAnswerView}>
              <AppText style={styles.questionAnswerText}>
                {questionsList[questionNumber].answer}
              </AppText>
              <MaterialCommunityIcons
                name="forum"
                size={30}
                color={colors.green}
              />
            </View>
          </View>
          <View style={{ width: "100%", marginBottom: 10 }}>
            <View style={styles.imageSectionHeaderView}>
              <AppText style={styles.imageSectionHeaderText}>
                عکس های ارسال شده :
              </AppText>
              <ImageFileIcon size={30} />
            </View>
            <ImageList />
          </View>
          <View style={{ width: "100%", marginBottom: 20 }}>
            <View style={styles.imageSectionHeaderView}>
              <AppText
                style={[
                  styles.imageSectionHeaderText,
                  { color: colors.errorRed },
                ]}
              >
                فایل های صوتی ارسال شده :
              </AppText>
              <AudioFileIcon size={30} />
            </View>
            <AudioPlayer />
          </View>
          <View style={{ width: "100%", marginBottom: 5 }}>
            <View
              style={[styles.imageSectionHeaderView, { marginBottom: -20 }]}
            >
              <AppText
                style={[
                  styles.imageSectionHeaderText,
                  { color: colors.yellow },
                ]}
              >
                درصد انطباق با آئین نامه :
              </AppText>
              <MaterialCommunityIcons
                name="percent-outline"
                color={colors.yellow}
                size={30}
              />
            </View>
            <AppCircularProgressBar percent={0.76} radius={0.1 * windowWidth} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 10,
  },
  buttonView: {
    paddingHorizontal: 10,
    backgroundColor: colors.yellow,
    borderRadius: 5,
    paddingVertical: 3,
    height: "auto",
    width: "auto",
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  container: {
    backgroundColor: "#201a31",
    justifyContent: "space-between",
    height: 1 * windowHeight,
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
  },
  headerView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 17,
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
    fontSize: 12,
    width: "80%",
    color: colors.darkBlue,
    marginRight: 10,
  },
  imageSectionHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  nextPrevButtonText: {
    color: colors.darkBlue,
    position: "relative",
    top: 3,
    fontSize: 12,
  },
  questionAnswerText: {
    fontSize: 12,
    width: "80%",
    color: colors.green,
    marginRight: 10,
  },
  questionAnswerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  questionContentText: {
    fontSize: 12,
    width: "80%",
    color: "#071c33",
    marginRight: 10,
  },
  questionContentView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  questionHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
});

export default ReportDetailsScreen;
