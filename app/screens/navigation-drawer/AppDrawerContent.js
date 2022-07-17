import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import AppText from "../../components/AppText";
import AccidentNavigationIcon from "../../components/icons/AccidentNavigationIcon";
import CloseNavigationIcon from "../../components/icons/CloseNavigationIcon";
import GuideNavigationIcon from "../../components/icons/GuideNavigationIcon";
import LogoutNavigationIcon from "../../components/icons/LogoutNavigationIcon";
import PeopleNavigationIcon from "../../components/icons/PeopleNavigationIcon";
import ProfileNavigationIcon from "../../components/icons/ProfileNavigationIcon";
import ProjectNavigationIcon from "../../components/icons/ProjectNavigationIcon";
import ReportNavigationIcon from "../../components/icons/ReportNavigationIcon";
import ZoneNavigationIcon from "../../components/icons/ZoneNavigationIcon";
import colors from "../../config/colors";
import AppDrawerItem from "./AppDrawerItem";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

function AppDrawerContent(props) {
  const user = useSelector((state) => state.user)
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
          <AppText style={styles.nameText}>{user.user.result.first_name} {user.user.result.last_name}</AppText>
          <AppText style={styles.accountText}>
            نوع حساب :{" "}
            <AppText style={[styles.accountText, { color: "#daa520" }]}>

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
          Icon={<ProjectNavigationIcon />}
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
          onPress={() => onPressFunction("UserApp")}
          focused={currentTab === "UserApp"}
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
    marginBottom: 5,
  },
  accountText: {
    fontSize: 11 / fontScale,
    color: "#d4d8f0",
  },
});

export default AppDrawerContent;
