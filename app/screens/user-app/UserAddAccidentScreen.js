import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Dimensions,
    ImageBackground, Platform,
    ScrollView, StatusBar,
    StyleSheet,
    View,
} from "react-native";
import AppText from "../../components/AppText";
import CardItem from "../../components/CardItem";
import CasualtyIcon from "../../components/icons/CasualtyIcon";
import ClockIcon from "../../components/icons/ClockIcon";
import DebtIcon from "../../components/icons/DebtIcon";
import DescriptionIcon from "../../components/icons/DescriptionIcon";
import ImageFileIcon from "../../components/icons/ImageFileIcon";
import ProjectAccidentIcon from "../../components/icons/ProjectAccidentIcon";
import ProjectActivityIcon from "../../components/icons/ProjectActivityIcon";
import ProjectZoneIcon from "../../components/icons/ProjectZoneIcon";
import ImageList from "../../components/ImageList";
import colors from "../../config/colors";
import AppTextInput from "../../components/AppTextInput";
import ManIcon from "../../components/icons/ManIcon";
import MoneyIcon from "../../components/icons/MoneyIcon";
import UploadCloudIcon from "../../components/icons/UploadCloudIcon";
import AppButton from "../../components/AppButton";
import AudioFileIcon from "../../components/icons/AudioFileIcon";
import UploadImageList from "../../components/UploadImageList";
import { styles } from "./UserAddAccidentScreen.style";

const pictures = [
    require("../../assets/list_report_screen/burn-house-1.jpg"),
    require("../../assets/list_report_screen/burn-house-1.jpg"),
    require("../../assets/list_report_screen/burn-house-1.jpg"),
    require("../../assets/list_report_screen/burn-house-1.jpg"),
];

function UserAddAccidentScreen(props) {
    return (
        <ScrollView style={styles.mainBackgroundColor} >
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/list_report_screen/building(2).jpg")}
                    style={styles.imageBackground}
                    resizeMode="cover"
                />
                <View style={styles.detailsView}>
                    <ScrollView style={styles.ScrollView}>
                        <View style={styles.headerView}>
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
                        <View style={styles.textView}>
                            <View style={styles.descriptionView}>
                                <AppTextInput
                                    placeholder={"نوع حادثه"}
                                    containerStyle={{flex: 1, marginRight: 8}}
                                    viewStyle={{borderWidth: 1, borderColor: "#ecf0f3"}}
                                />
                                <ProjectAccidentIcon
                                    size={26}
                                />
                            </View>
                            <View style={styles.descriptionView}>
                                <AppTextInput
                                    placeholder={"خسارت مالی وارده را اینجا بنویسید"}
                                    containerStyle={{flex: 1, marginRight: 5}}
                                    viewStyle={{borderWidth: 1, borderColor: "#ecf0f3"}}
                                />
                                <MoneyIcon/>
                            </View>
                            <View style={styles.descriptionView}>
                                <AppTextInput
                                    placeholder={"خسارت جانی وارده را اینجا بنویسید"}
                                    containerStyle={{flex: 1, marginRight: 18}}
                                    viewStyle={{borderWidth: 1, borderColor: "#ecf0f3"}}
                                />
                                <ManIcon />
                            </View>
                            <View style={styles.descriptionView}>
                                <AppTextInput
                                    placeholder={"ساعت حدودی رخداد حادثه"}
                                    containerStyle={{flex: 1, marginRight: 14}}
                                    viewStyle={{borderWidth: 1, borderColor: "#ecf0f3"}}
                                />
                                <ClockIcon size={20} color={colors.yellow} />
                            </View>
                            <View style={styles.descriptionView}>
                                <AppTextInput
                                    placeholder={"شرح حادثه"}
                                    containerStyle={{flex: 1, marginRight: 9}}
                                    viewStyle={{borderWidth: 1, borderColor: "#ecf0f3"}}
                                />
                                <DescriptionIcon size={25} />
                            </View>
                        </View>
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

export default UserAddAccidentScreen;
