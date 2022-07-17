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
import { createAndSavePDF } from "../../components/pdfCreateFunction";
// import {
//   PDFDownloadLink,
//   Page,
//   Text,
//   View as PView,
//   Document,
//   StyleSheet as PStyleSheet,
// } from "@react-pdf/renderer";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native";

let PDFDownloadLink, Page, Text, PView, Document, PStyleSheet, MyDoc;
// if (Platform.OS === "web") {
//   console.log("hi");
//   // PDFDownloadLink = require("@react-pdf/renderer").PDFDownloadLink;
//   // Page = require("@react-pdf/renderer").Page;
//   // Text = require("@react-pdf/renderer").Text;
//   // PView = require("@react-pdf/renderer").View;
//   // Document = require("@react-pdf/renderer").Document;
//   // PStyleSheet = require("@react-pdf/renderer").StyleSheet;
//   const styless = PStyleSheet.create({
//     page: {
//       flexDirection: "row",
//       backgroundColor: "#E4E4E4",
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//   });
//   MyDoc = () => (
//     <Document>
//       <Page size="A4" style={styless.page}>
//         <PView style={styless.section}>
//           <Text>Section #1</Text>
//         </PView>
//         <PView style={styless.section}>
//           <Text>Section #2</Text>
//         </PView>
//       </Page>
//     </Document>
//   );
// }

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const questionsList = [
  {
    question:
      "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",
    answer: "بله - بدون مانع میباشد - سوال یکککککک",
  },
  {
    question:
      "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",
    answer: "بله - بدون مانع میباشد - سوال دووووووووو",
  },
  {
    question:
      "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",
    answer: "بله - بدون مانع میباشد - سوال سههههههههههه",
  },
];

const pictures = [
  require("../../assets/list_report_screen/building(1).jpg"),
  require("../../assets/list_report_screen/building(3).jpg"),
  require("../../assets/list_report_screen/building(1).jpg"),
  require("../../assets/list_report_screen/building(3).jpg"),
  require("../../assets/list_report_screen/building(1).jpg"),
  require("../../assets/list_report_screen/building(3).jpg"),
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
    <ScrollView style={{ backgroundColor: colors.white }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/list_report_screen/building(2).jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        />
        <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
          {Platform.OS === "web" ? (
            <TouchableOpacity>
              <PDFDownloadLink
                style={{
                  fontSize: 9.5 / fontScale,
                  fontFamily: "iran-sans-regular",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  color: colors.white,
                  textAlign: "right",
                  textDecorationLine: "none",
                  direction: "rtl",
                  paddingLeft: 13,
                  paddingRight: 13,
                  backgroundColor: colors.yellow,
                  borderRadius: 5,
                  paddingBottom: 7,
                  paddingTop: 7,
                  marginRight: 10,
                  marginBottom: 10,
                }}
                document={<MyDoc />}
                fileName="report_pdf.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "در حال دانلود" : "خروجی PDF"
                }
              </PDFDownloadLink>
            </TouchableOpacity>
          ) : (
            <AppButton
              title="خروجی PDF"
              viewStyle={[styles.pdfButtonView]}
              textStyle={styles.buttonText}
              onPress={() => createAndSavePDF()}
            />
          )}
          <View style={styles.detailsView}>
            <ScrollView style={{ width: "100%" }}>
              <View style={styles.headerView}>
                <AppButton
                  title="تاخیر"
                  viewStyle={[styles.buttonView]}
                  textStyle={[
                    styles.buttonText,
                    { fontSize: 10.5 / fontScale },
                  ]}
                />
                <AppText style={styles.headerText}>پروژه برج مروارید</AppText>
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
                        size={25}
                        onPress={() => setQuestion(false)}
                        color={colors.white}
                        style={{
                          elevation: 8,
                          shadowRadius: 10,
                          shadowOpacity: 0.3,
                          shadowOffset: {
                            width: 1,
                            height: 3,
                          },
                        }}
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <CircularIcon
                        Icon={
                          <MaterialCommunityIcons
                            name="chevron-right"
                            size={20}
                            color={colors.darkBlue}
                          />
                        }
                        size={25}
                        onPress={() => setQuestion(true)}
                        color={colors.white}
                        style={{
                          elevation: 8,
                          shadowRadius: 10,
                          shadowOpacity: 0.3,
                          shadowOffset: {
                            width: 1,
                            height: 3,
                          },
                        }}
                      />
                      <AppText
                        style={[styles.nextPrevButtonText, { paddingLeft: 5 }]}
                      >
                        بعدی
                      </AppText>
                    </View>
                  </View>
                  <AppText
                    style={[
                      styles.headerText,
                      { position: "relative", top: 1 },
                    ]}
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
                <ImageList pictures={pictures} />
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
                <AudioPlayer {...props} />
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
                <AppCircularProgressBar
                  style={{ alignSelf: "flex-start" }}
                  percent={0.76}
                  radius={0.1 * windowWidth}
                />
              </View>
            </ScrollView>
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
    fontSize: 9 / fontScale,
  },
  buttonView: {
    backgroundColor: "#ff7c43",
    paddingHorizontal: 25,
    borderRadius: 5,
    paddingVertical: 3,
    height: "auto",
    width: "auto",
  },
  pdfButtonView: {
    paddingHorizontal: 10,
    backgroundColor: colors.yellow,
    borderRadius: 5,
    paddingVertical: 3,
    height: 0.0323 * windowHeight,
    width: 0.1923 * windowWidth,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10,
  },
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
  detailsView: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // position: "absolute",
    // bottom: 0,
    paddingTop: 10,
    maxHeight: 0.832 * windowHeight,
  },
  headerView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
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
    color: colors.darkBlue,
    marginRight: 10,
  },
  imageSectionHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  nextPrevButtonText: {
    color: colors.darkBlue,
    position: "relative",
    top: 3,
    fontSize: 10 / fontScale,
  },
  questionAnswerText: {
    fontSize: 10.5 / fontScale,
    width: "80%",
    color: colors.green,
    marginRight: 10,
  },
  questionAnswerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 25,
  },
  questionContentText: {
    fontSize: 10.5 / fontScale,
    width: "80%",
    color: "#071c33",
    marginRight: 10,
  },
  questionContentView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  questionHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
});

export default ReportDetailsScreen;
