import React from 'react';
import { Dimensions, Image, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppCircularProgressBar from "./AppCircularProgressBar";
import AppText from "./AppText";
import { convertToPersianNumber } from "./UtilFunctions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./AppButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function UserProjectListItem({name,status,activity,zone,image,props}) {
    let color, text;
    switch (status) {
        case 0:
            color = colors.errorRed; text = "تاخیر"; break;
        case 1:
            color = "#41cd7d"; text = "پایان"; break;
        case 2:
            color = colors.yellow; text = "جاری"; break;
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <View style={styles.projectDetailsView}>
                    <View style={styles.textView}>
                        <AppText style={styles.nameText}>{name}</AppText>
                        <AppText style={styles.detailText}>{"فعالیت: " + activity}</AppText>
                        <AppText style={styles.detailText}>{"زون: " + zone}</AppText>
                    </View>
                    {image ? (
                        <Image style={styles.image} source={image} resizeMode="cover" />
                    ) : (
                        <View style={styles.projectDefaultView}>
                            <View style={styles.projectDefaultInnerView}>
                                <MaterialCommunityIcons name="domain" size={30} color="#aaa" />
                            </View>
                        </View>
                    )}
                    <View style={[styles.statusView, { backgroundColor: color + "44" }]}>
                        <AppText style={[styles.statusText, { color: color }]} >{text}</AppText>
                    </View>
                </View>
                <View style={styles.buttonsView}>
                    <AppButton
                        textStyle={{ color: colors.yellow, fontSize: 11 / fontScale }}
                        viewStyle={[styles.buttonView, { borderWidth: 1 }]}
                        title={"حوادث"}
                        onPress={() => props.navigation.navigate("UserAccidentsListScreen")}
                    />
                    <AppButton
                        textStyle={{ color: colors.white, fontSize: 11 / fontScale }}
                        viewStyle={[styles.buttonView, { backgroundColor: colors.yellow }]}
                        title={"گزارشات"}
                        onPress={() => props.navigation.navigate("UserReportsListScreen")}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        width: "auto",
        height: "auto",
        paddingHorizontal: 13,
        paddingVertical: Platform.OS === 'web' ? 6 : 3,
        borderRadius: 5,
        borderColor: "#cdcdcd",
        marginRight: 10
    },
    buttonsView: {
        marginTop: 5,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        elevation: 15,
        shadowRadius: 15,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        width: 0.846 * windowWidth,
        backgroundColor: colors.white,
        borderRadius: 7,
        padding: 5,
        marginBottom: 15,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 7,
        marginLeft: 10,
    },
    innerView: {
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: colors.white,
        width: "100%",
        height: "100%",
        flex: 1,
        padding: 5,
    },
    projectDefaultView: {
        width: 60,
        height: 60,
        borderRadius: 7,
        marginLeft: 10,
        backgroundColor: colors.inputViewBackground,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    projectDefaultInnerView: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: colors.inputViewBackground,
        width: "100%",
        height: "100%",
    },
    projectDetailsView: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end",
        marginTop: 5,
    },
    textView: {
        alignSelf: "center",
    },
    nameText: {
        fontSize: 12 / fontScale,
        color: colors.darkBlue,
    },
    detailText: {
        fontSize: 10 / fontScale,
        color: "#7a7c83",
    },
    statusView: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        position: "absolute",
        left: 2,
        borderRadius: 3
    },
    statusText: {
        fontSize: 10 / fontScale,
    }
});

export default UserProjectListItem;