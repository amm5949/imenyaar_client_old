import React, {useEffect, useState} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, View} from "react-native";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import LoadingAnimation from "../../components/LoadingAnimation";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import CircularIcon from "../../components/CircularIcon";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AccidentListIcon from "../../components/icons/AccidentListIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const initialReportsArray = [
    {
        project: "برج مهر کوهسنگی",
        activity: "سیم کشی ساختمان",
        zone: "زون شماره 1",
        date: "00/02/14"
    },{
        project: "برج مهر کوهسنگی",
        activity: "سیم کشی ساختمان",
        zone: "زون شماره 1",
        date: "00/02/14"
    },{
        project: "برج مهر کوهسنگی",
        activity: "سیم کشی ساختمان",
        zone: "زون شماره 1",
        date: "00/02/14"
    },{
        project: "برج مهر کوهسنگی",
        activity: "سیم کشی ساختمان",
        zone: "زون شماره 1",
        date: "00/02/14"
    },
]
const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
const zonesArray = ["زون شماره اول", "زون شماره دوم"]
let isMounted = false;

const EmptyList = () => (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
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

const LoadingList = (loading) => (
    <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <LoadingAnimation visible={loading}/>
    </View>
)

const DataList = (array) => (
    <ScrollView
        persistentScrollbar={true}
        style={{width: "100%", marginTop: 25}}
    >
        <View style={styles.textContainer}>
            {array.map((item, index) => (
                <ListItem
                    key={index}
                    header={"پروژه " + item.project}
                    detailsFirst={"فعالیت: " + item.activity}
                    detailsSecond={"زون: " + item.zone}
                    date={item.date}
                    IconComponent={<AccidentListIcon size={30} />}
                    // onPress={() => props.navigation.navigate("ReportDetail")}
                    renderRightActions={(progress, dragx) => (
                        <ListItemActions
                            progress={progress}
                            dragx={dragx}
                            onPressDelete={() => console.log(item.header, " deleted")}
                            onPressEdit={() => console.log(item.header, " edited")}
                        />
                    )}
                />
            ))}
        </View>
    </ScrollView>
)

const renderScreen = (array, loading) => {
    if(loading || array == null)
        return LoadingList(loading)
    else if(array.length === 0)
        return EmptyList();
    else
        return DataList(array);
}

function UserAccidentsListScreen(props) {
    const [reportsArray, setReportsArray] = useState(initialReportsArray);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        isMounted = true;

        setTimeout(()=>{
            if(isMounted)
                setLoading(false)
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <ScreenHeader
                profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
                headerText="لیست حوادث"
                onPressNavigation={() => props.navigation.openDrawer()}
            />
            <AppPicker
                choices={projectsArray}
                placeholder="مثال : پروژه ساخت هوشمند"
                title="نام پروژه"
                required
                mode={"TOP"}
            />
            <AppPicker
                choices={zonesArray}
                placeholder="مثال : زون شماره اول"
                title="نام زون"
                required
                mode={"BOTTOM"}
            />
            {renderScreen(reportsArray, loading)}
            <View style={styles.addButtonView}>
                <CircularIcon
                    // onPress={() => props.navigation.navigate("ProjectCreation")}
                    Icon={
                        <MaterialCommunityIcons
                            name="plus"
                            size={30}
                            color={colors.white}
                        />
                    }
                    color={colors.yellow}
                    size={50}
                    onPress={()=>props.navigation.navigate("UserAddAccidentScreen")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.inputViewBackground,
        flex: 1,
        alignItems: "center",
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
        fontFamily: "iran-sans-regular"
    },
    textContainer: {
        width: "100%",
        alignItems: "center",
    },
    addButtonView:{
        alignSelf: "flex-end",
        marginBottom: 10,
        position: "absolute",
        bottom: 10,
        right: 10,
    }
});

export default UserAccidentsListScreen;
