import React, {useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import colors from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader";
import AppText from "../../components/AppText";
import ProjectItem from "../../components/ProjectItem";
import UserProjectListItem from "../../components/UserProjectListItem";
import { styles } from './UserHomeScreen.style.';

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
        style={styles.notFoundContainer}
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
            <ScreenHeader hasSearchField={true} headerText={"کار های شما"} onPressNavigation={() => props.navigation.openDrawer()}/>
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
                <ScrollView style={styles.WorksContainer}>
                    <View style={styles.textContainer}>
                        {projects.map((item, index) => (
                            <UserProjectListItem
                                key={index}
                                name={item.header}
                                activity={item.activityName}
                                zone={item.zoneName}
                                status={item.status}
                                image={item.image}
                                props={props}
                            />
                        ))}
                    </View>
                </ScrollView>
            )}

        </View>
    );
}

export default UserHomeScreen;