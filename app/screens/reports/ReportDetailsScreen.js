import React, { useState } from 'react'
import { View, Dimensions, ScrollView, ImageBackground } from 'react-native'
import CardItem from '../../components/CardItem'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppButton from '../../components/AppButton'
import colors from '../../config/colors'
import AppText from '../../components/AppText'
import CircularIcon from '../../components/CircularIcon'
import ImageFileIcon from '../../components/icons/ImageFileIcon'
import ImageList from '../../components/ImageList'
import AudioFileIcon from '../../components/icons/AudioFileIcon'
import QuestionMarkIcon from '../../components/icons/QuestionMarkIcon'
import AudioPlayer from '../../components/AudioPlayer'
import AppCircularProgressBar from '../../components/AppCircularProgressBar'
import ProjectZoneIcon from '../../components/icons/ProjectZoneIcon'
import ProjectActivityIcon from '../../components/icons/ProjectActivityIcon'
import { createAndSavePDF } from '../../components/pdfCreateFunction'
import { styles } from './ReportDetailsScreen.style'
// import {
//   PDFDownloadLink,
//   Page,
//   Text,
//   View as PView,
//   Document,
//   StyleSheet as PStyleSheet,
// } from "@react-pdf/renderer";
import { Platform } from 'react-native'
import { TouchableOpacity } from 'react-native'

let PDFDownloadLink, Page, Text, PView, Document, PStyleSheet, MyDoc
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

const windowWidth = Dimensions.get('window').width
const fontScale = Dimensions.get('window').fontScale

const questionsList = [
  {
    question:
      'ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)',
    answer: 'بله - بدون مانع میباشد - سوال یکککککک',
  },
  {
    question:
      'ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)',
    answer: 'بله - بدون مانع میباشد - سوال دووووووووو',
  },
  {
    question:
      'ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)',
    answer: 'بله - بدون مانع میباشد - سوال سههههههههههه',
  },
]

const pictures = [
  require('../../assets/list_report_screen/building(1).jpg'),
  require('../../assets/list_report_screen/building(3).jpg'),
  require('../../assets/list_report_screen/building(1).jpg'),
  require('../../assets/list_report_screen/building(3).jpg'),
  require('../../assets/list_report_screen/building(1).jpg'),
  require('../../assets/list_report_screen/building(3).jpg'),
]

function ReportDetailsScreen(props) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const setQuestion = (next) => {
    if (next && questionNumber + 1 < questionsList.length) {
      setQuestionNumber(questionNumber + 1)
    } else if (!next && questionNumber - 1 >= 0) {
      setQuestionNumber(questionNumber - 1)
    }
  }
  return (
    <ScrollView style={styles.mainStyle}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/list_report_screen/building(2).jpg')}
          style={styles.imageBackground}
          resizeMode="cover"
        />
        <View style={styles.pageView}>
          {Platform.OS === 'web' ? (
            <TouchableOpacity>
              {/* <PDFDownloadLink
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
              </PDFDownloadLink> */}
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
            <ScrollView style={styles.widthOfViews}>
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
              <View style={styles.widthOfViews}>
                <View style={styles.questionHeaderView}>
                  <View style={styles.buttonContainer}>
                    <View style={styles.previosButtonArea}>
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
                        style={styles.circularIconStyle}
                      />
                    </View>
                    <View style={styles.nextButtonArea}>
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
                        style={styles.circularIconStyle}
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
                      { position: 'relative', top: 1 },
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
              <View style={styles.sentphotosView}>
                <View style={styles.imageSectionHeaderView}>
                  <AppText style={styles.imageSectionHeaderText}>
                    عکس های ارسال شده :
                  </AppText>
                  <ImageFileIcon size={30} />
                </View>
                <ImageList pictures={pictures} />
              </View>
              <View style={styles.sentAudiosView}>
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
              <View style={styles.conformityPercentageView}>
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
                  style={styles.appCircularProgressBarStyle}
                  percent={0.76}
                  radius={0.1 * windowWidth}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ReportDetailsScreen
