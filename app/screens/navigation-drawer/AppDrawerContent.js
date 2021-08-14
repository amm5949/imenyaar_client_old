import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import AppText from "../../components/AppText";
import UserIcon from "../../components/icons/UserIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { useState } from "react";
import AppDrawerItem from "./AppDrawerItem";
import AccidentNavigationIcon from "../../components/icons/AccidentNavigationIcon";
import GuideNavigationIcon from "../../components/icons/GuideNavigationIcon";
import LogoutNavigationIcon from "../../components/icons/LogoutNavigationIcon";
import PeopleNavigationIcon from "../../components/icons/PeopleNavigationIcon";
import ProfileNavigationIcon from "../../components/icons/ProfileNavigationIcon";
import ProjectNavigationIcon from "../../components/icons/ProjectNavigationIcon";
import ReportNavigationIcon from "../../components/icons/ReportNavigationIcon";
import ZoneNavigationIcon from "../../components/icons/ZoneNavigationIcon";
import CloseNavigationIcon from "../../components/icons/CloseNavigationIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppDrawerContent(props) {
  const [currentTab, setCurrentTab] = useState("Projects");
  const onPressFunction = (screenName) => {
    if (screenName === "Logout") {
      props.navigation.navigate("SignUpScreen");
      return;
    }
    setCurrentTab(screenName);
    props.navigation.navigate(screenName);
  };
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <CloseNavigationIcon
          style={{ alignSelf: "flex-end", marginRight: 10 }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 40,
        }}
      >
        <View>
          <AppText style={styles.nameText}>علی احمدی</AppText>
          <AppText style={styles.accountText}>
            نوع حساب :{" "}
            <AppText style={[styles.accountText, { color: "#daa520" }]}>
              طلائی
            </AppText>
          </AppText>
        </View>
        <View style={styles.profileView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 5 }}
            source={require("../../assets/list_report_screen/sample-profile.jpg")}
          />
        </View>
      </View>
      <View>
        <AppDrawerItem
          label="پروژه ها"
          Icon={
            <ProjectNavigationIcon
              style={{
                position: "relative",
                right: 3,
                marginLeft: 5,
              }}
            />
          }
          onPress={() => onPressFunction("Projects")}
          focused={currentTab === "Projects"}
        />
        <AppDrawerItem
          label="زون ها"
          Icon={<ZoneNavigationIcon />}
          onPress={() => onPressFunction("Zones")}
          focused={currentTab === "Zones"}
        />
        <AppDrawerItem
          label="افراد"
          Icon={<PeopleNavigationIcon />}
          onPress={() => onPressFunction("People")}
          focused={currentTab === "People"}
        />
        <AppDrawerItem
          label="گزارشات"
          Icon={<ReportNavigationIcon />}
          onPress={() => onPressFunction("Reports")}
          focused={currentTab === "Reports"}
        />
        <AppDrawerItem
          label="حوادث"
          Icon={<AccidentNavigationIcon />}
          onPress={() => onPressFunction("Accidents")}
          focused={currentTab === "Accidents"}
        />
        <AppDrawerItem
          label="راهنما"
          Icon={<GuideNavigationIcon />}
          onPress={() => onPressFunction("Guide")}
          focused={currentTab === "Guide"}
        />
        <AppDrawerItem
          label="پروفایل"
          Icon={<ProfileNavigationIcon />}
          onPress={() => onPressFunction("Profile")}
          focused={currentTab === "Profile"}
        />
        <AppDrawerItem
          label="خروج"
          Icon={<LogoutNavigationIcon />}
          onPress={() => onPressFunction("Logout")}
          focused={currentTab === "Logout"}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  profileView: {
    padding: 5,
    borderRadius: 5,
    borderColor: "#daa520",
    borderStyle: "dashed",
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 8,
  },
  nameText: {
    fontSize: 14 / fontScale,
    color: colors.white,
  },
  accountText: {
    fontSize: 11 / fontScale,
    color: "#d4d8f0",
  },
});

export default AppDrawerContent;
