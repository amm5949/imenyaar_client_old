import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import colors from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader";
import AppText from "../../components/AppText";
import ProjectItem from "../../components/ProjectItem";
import UserProjectListItem from "../../components/UserProjectListItem";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const initialProjectsArray = [
    {
        name: "پروژه برج مروارید",
        status: 1,
        activityName: "سیم کشی ساختمان",
        zoneName: "زون 1",
        image: require("../../assets/list_report_screen/building(1).jpg"),
    },{
        name: "پروژه برج مروارید",
        status: 2,
        activityName: "سیم کشی ساختمان",
        zoneName: "زون 1",
        image: require("../../assets/list_report_screen/building(1).jpg"),
    },{
        name: "پروژه برج مروارید",
        status: 0,
        activityName: "سیم کشی ساختمان",
        zoneName: "زون 1",
        image: require("../../assets/list_report_screen/building(1).jpg"),
    },{
        name: "پروژه برج مروارید",
        status: 1,
        activityName: "سیم کشی ساختمان",
        zoneName: "زون 1",
    },{
        name: "پروژه برج مروارید",
        status: 1,
        activityName: "سیم کشی ساختمان",
        zoneName: "زون 1",
    },{
        name: "پروژه برج مروارید",
        status: 1,
        activityName: "سیم کشی ساختمان",
        zoneName: "زون 1",
    },{
        name: "پروژه برج مروارید",
        status: 1,
        activityName: "سیم کشی ساختمان",
        zoneName: "زون 1",
    },
];

const EmptyList = () => (
    <View
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
        <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
        />
        <AppText style={styles.notFoundText}>
            هنوز پروژه ای ثبت نشده است
        </AppText>
    </View>
);

function UserHomeScreen(props) {
    const [projects, setProjects] = useState(initialProjectsArray)
    const [tabIndex, setTabIndex] = React.useState(1);
    const routes = ['کارهای آینده', 'کارهای امروز', 'کارهای گذشته'];
    return (
        <View style={styles.container}>
            <ScreenHeader hasSearchField={true} headerText={"کار های شما"}/>
            <View style={styles.tabView}>
                {routes.map((value, index) => (
                    <TouchableWithoutFeedback onPress={() => setTabIndex(index)} key={index}>
                        <View style={[styles.tabItemView, index === tabIndex && {backgroundColor: "#003f5c"}]}>
                            <AppText style={[styles.tabItemLabel, index === tabIndex && {color: "#fff"}]}>
                                {value}
                            </AppText>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
            {projects.length === 0 ? (
                EmptyList()
            ) : (
                <ScrollView
                    style={{
                        width: "100%",
                        flex: 1,
                    }}
                >
                    <View style={styles.textContainer}>
                        {projects.map((item, index) => (
                            <UserProjectListItem
                                key={index}
                                name={item.header}
                                activity={item.activityName}
                                zone={item.zoneName}
                                status={item.status}
                                image={item.image}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.inputViewBackground
    },
    emptyListImage: {
        width: 0.87 * windowWidth,
        height: 0.29 * windowHeight,
        marginTop: 0.055 * windowHeight,
        marginBottom: 15,
    },
    notFoundText: {
        fontSize: 15 / fontScale,
        color: colors.darkBlue,
    },
    tabItemView: {
        paddingVertical: 5,
        backgroundColor: colors.inputViewBackground,
        alignItems: "center",
        flex: 1,
    },
    tabItemLabel: {
        fontSize: 11 / fontScale,
        color: "#2f4b7c",
    },
    tabView: {
        borderRadius: 13,
        borderColor: "#003f5c",
        borderWidth: 1,
        width: "84.6%",
        flexDirection: "row",
        alignSelf: "center",
        overflow: "hidden",
        marginVertical: 10,
    },
    textContainer: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        marginVertical: 20,
    },
});

export default UserHomeScreen;