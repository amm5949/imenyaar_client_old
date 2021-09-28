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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const pictures = [
    require("../../assets/list_report_screen/burn-house-1.jpg"),
    require("../../assets/list_report_screen/burn-house-1.jpg"),
    require("../../assets/list_report_screen/burn-house-1.jpg"),
    require("../../assets/list_report_screen/burn-house-1.jpg"),
];

function UserAddAccidentScreen(props) {
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
        backgroundColor: "#201a31",
        justifyContent: "space-between",
        height: windowHeight + (StatusBar.currentHeight > 33 ? StatusBar.currentHeight : 0)
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
    }
});

export default UserAddAccidentScreen;
