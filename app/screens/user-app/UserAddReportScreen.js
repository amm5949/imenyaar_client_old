import {MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {Dimensions, ImageBackground, ScrollView, StatusBar, StyleSheet, View,} from "react-native";
import AppText from "../../components/AppText";
import CardItem from "../../components/CardItem";
import ImageFileIcon from "../../components/icons/ImageFileIcon";
import ProjectActivityIcon from "../../components/icons/ProjectActivityIcon";
import ProjectZoneIcon from "../../components/icons/ProjectZoneIcon";
import colors from "../../config/colors";
import AudioFileIcon from "../../components/icons/AudioFileIcon";
import UploadImageList from "../../components/UploadImageList";
import CircularIcon from "../../components/CircularIcon";
import QuestionMarkIcon from "../../components/icons/QuestionMarkIcon";
import AppTextInput from "../../components/AppTextInput";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const questionsList = [
    {
        question: "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",

    }, {
        question: "ایا دسترسی به ایستگاه مترو به صورت پیوسته می‌باشد؟ (1-6-1-1)",
        answer: "بله - بدون مانع میباشد - سوال دووووووووو",
    }, {
        question: "ایا دسترسی به ایستگاه اتوبوس از پیاده‌رو به صورت پیوسته و بدون مانع می‌باشد؟ (1-6-1-1)",
        answer: "بله - بدون مانع میباشد - سوال سههههههههههه",
    },
];

const QuestionsSection = (questionIndex, setQuestionIndex, answers, setAnswers) => {
    const handleChange = (next, currentValue) => {
        if (next && questionIndex + 1 < questionsList.length) {
            setQuestionIndex(questionIndex + 1);
        } else if (!next && questionIndex - 1 >= 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }
    const handleTextChange = (text) => {
        const newAnswersArray = [...answers];
        newAnswersArray[questionIndex] = text;
        setAnswers(newAnswersArray);
    }
    return (
    <View style={styles.textView}>
        <View style={styles.questionHeaderView}>
            <View style={styles.questionButtonContainer}>
                <View style={styles.nextPrevButtonView}>
                    <AppText style={styles.nextPrevButtonText}>قبلی</AppText>
                    <CircularIcon
                        Icon={
                            <MaterialCommunityIcons
                                name="chevron-left"
                                size={20}
                                color={colors.darkBlue}
                            />
                        }
                        size={25}
                        onPress={() => handleChange(false)}
                        color={colors.white}
                        style={styles.nextPrevButtonIcon}
                    />
                </View>
                <View style={styles.nextPrevButtonView}>
                    <CircularIcon
                        Icon={
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={20}
                                color={colors.darkBlue}
                            />
                        }
                        size={25}
                        onPress={() => handleChange(true)}
                        color={colors.white}
                        style={styles.nextPrevButtonIcon}
                    />
                    <AppText style={styles.nextPrevButtonText}>بعدی</AppText>
                </View>
            </View>
            <AppText style={styles.headerText}>سوالات</AppText>
        </View>
        <View style={styles.questionContentView}>
            <AppText style={styles.questionContentText}>
                {questionsList[questionIndex].question}
            </AppText>
            <QuestionMarkIcon size={30} />
        </View>
        <View style={styles.questionAnswerView}>
            <AppTextInput
                placeholder={"پاسخ سوال"}
                defaultValue={answers[questionIndex]}
                containerStyle={{flex: 1, marginRight: 5}}
                viewStyle={{borderWidth: 1, borderColor: "#ecf0f3"}}
                // onChangeText={handleTextChange}
            />
            <MaterialCommunityIcons
                name="forum"
                size={30}
                color={colors.green}
            />
        </View>
    </View>
)}

function UserAddReportScreen(props) {
    const [answers, setAnswers] = useState(["سلامی", "hi", "hiiiiii"]);
    const [questionIndex, setQuestionIndex] = useState(0);
    return (
        <ScrollView style={{backgroundColor: "white"}} >
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/list_report_screen/building(2).jpg")}
                    style={styles.imageBackground}
                    resizeMode="cover"
                />
                <View style={styles.detailsView}>
                    <ScrollView style={{ width: "100%" }}>
                        <View style={styles.headerView}>
                            <View style={[styles.statusView, {backgroundColor: colors.errorRed+"44"}]}>
                                <AppText style={[styles.statusText, {color: colors.errorRed}]} >تاخیر</AppText>
                            </View>
                            <AppText w={'b'} style={styles.headerText}>پروژه برج مروارید</AppText>
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
                        {QuestionsSection(questionIndex, setQuestionIndex, answers, setAnswers)}
                        <View style={{ width: "100%", marginBottom: 10 }}>
                            <View style={styles.imageSectionHeaderView}>
                                <AppText style={[styles.imageSectionHeaderText]}>
                                    ارسال عکس :
                                </AppText>
                                <ImageFileIcon size={25} color="#7a7c83" />
                            </View>
                            <UploadImageList />
                        </View>
                        <View style={{ width: "100%", marginBottom: 10 }}>
                            <View style={styles.imageSectionHeaderView}>
                                <AppText style={[styles.imageSectionHeaderText]}>
                                    ارسال فایل صوتی :
                                </AppText>
                                <AudioFileIcon size={25} color="#ff7c43" />
                            </View>
                            <View style={styles.uploadAudioView}>
                                <MaterialCommunityIcons name={"microphone"} size={25} color={colors.yellow} />
                                <AppText style={styles.uploadAudioText}>برای ضبط صدا روی میکروفون نگه دارید</AppText>

                            </View>
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
        marginBottom: 5,
    },
    container: {
        backgroundColor: "#000",
        justifyContent: "space-between",
        height: windowHeight + (StatusBar.currentHeight > 33 ? StatusBar.currentHeight : 0)
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
        height: 0.5 * windowHeight,
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
        width: "100%"
    },
    statusView: {
        paddingVertical: 3,
        paddingHorizontal: 15,
        position: "absolute",
        left:2,
        borderRadius: 3
    },
    statusText:{
        fontSize: 11/fontScale,
    },
    uploadAudioView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#f0f2f8",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    uploadAudioText:{
        fontSize: 11/fontScale,
        color: colors.darkBlue
    },
    nextPrevButtonText: {
        color: colors.darkBlue,
        fontSize: 10 / fontScale,
    },
    nextPrevButtonView:{
        flexDirection: "row",
        alignItems: "center",
    },
    nextPrevButtonIcon:{
        elevation: 8,
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        marginHorizontal: 5
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
    questionButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});

export default UserAddReportScreen;
