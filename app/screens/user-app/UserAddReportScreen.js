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
import { styles } from "./UserAddReportScreen.style";

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
    const [answers, setAnswers] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    return (
        <ScrollView style={styles.scrollViewBackgroundColor}>
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/list_report_screen/building(2).jpg")}
                    style={styles.imageBackground}
                    resizeMode="cover"
                />
                <View style={styles.detailsView}>
                    <ScrollView style={styles.scrollViewStyle}>
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
                        <View style={styles.generalStyle}>
                            <View style={styles.imageSectionHeaderView}>
                                <AppText style={[styles.imageSectionHeaderText]}>
                                    ارسال عکس :
                                </AppText>
                                <ImageFileIcon size={25} color="#7a7c83" />
                            </View>
                            <UploadImageList />
                        </View>
                        <View style={styles.generalStyle}>
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

export default UserAddReportScreen;
