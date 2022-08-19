import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { getReports } from "../../api/reports";
import useApi from "../../api/useApi";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import ReportListIcon from "../../components/icons/ReportListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import LoadingAnimation from "../../components/LoadingAnimation";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { getZones } from "../../api/zones";
import { getProjects } from "../../api/projects";
import CircularIcon from "../../components/CircularIcon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
const zonesArray = ["زون شماره 1", "زون شماره 2"];
const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

function ReportsListScreen(props) {
  const [reportsArray, setReportsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userData = useSelector((state) => state.user);
  const [zonesArray, setZonesArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);

  const isFocused = useIsFocused();

  const fetchReport = async () => {
    const projectReports = await getReports(
      userData?.user.result.tokens.access_token
    );
    setReportsArray(projectReports.data.result.items);
    setLoading(false);
    console.log("the reports are ", projectReports);
  };
  const fetchZones = async () => {
    const zones = await getZones(userData?.user.result.tokens.access_token);
    setZonesArray(zones.data.result.values);

    console.log("getZones Output", zones);
  };
  const fetchProjects = async () => {
    const projects = await getProjects(
      userData?.user.result.tokens.access_token
    );
    setProjectsArray(projects.data.result.items);
    console.log("projects in zone page", projects.data.result.items);
  };
  // const fetchActivities = async () => {

  const handleEdit = (item) => {
    props.navigation.navigate("Reports", {
      screen: "ReportEdit",
      params: item,
    });
  };

  const handleCreate = () => {
    props.navigation.navigate("Reports", {
      screen: "ReportCreate",
    });
  };
  // }
  useEffect(() => {
    // mounting
    let isSubscribed = true;
    setLoading(true);
    fetchZones();
    fetchProjects();
    if (isSubscribed) {
      fetchReport();
    }
    return () => {
      // cleanup function
      isSubscribed = false;
    };
    setLoading(false);
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست گزارشات"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        data={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />
      {/* <AppPicker
        data={zonesArray}
        placeholder="مثال : زون شماره اول"
        title="نام زون"
        required
      />
      <AppPicker
        data={activitiesArray}
        placeholder="مثال : فعالیت شبکه کشی ساختمان"
        title="نام فعالیت"
        required
      /> */}

      {loading ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <LoadingAnimation visible={loading} />
        </View>
      ) : reportsArray && reportsArray.length === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <Text style={styles.notFoundText}>هنوز گزارشی ثبت نشده است</Text>
        </View>
      ) : (
        <ScrollView
          persistentScrollbar={true}
          style={{
            width: "100%",
            overflow: "scroll",
            marginTop: 15,
          }}
        >
          <View style={styles.textContainer}>
            {reportsArray.map((item, index) => (
              <ListItem
                key={index}
                header={item.header}
                detailsFirst={item.detailsFirst}
                detailsSecond={item.detailsSecond}
                date={item.date}
                IconComponent={<ReportListIcon size={30} />}
                onPress={() => props.navigation.navigate("ReportDetail")}
                renderRightActions={(progress, dragx) => (
                  <ListItemActions
                    progress={progress}
                    dragx={dragx}
                    onPressDelete={() => console.log(item.header, " deletted")}
                    onPressEdit={() => handleEdit(item)}
                  />
                )}
              />
            ))}
          </View>
        </ScrollView>
      )}
      <View
        style={{
          alignSelf: "flex-end",
          marginBottom: 10,
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <CircularIcon
          onPress={handleCreate}
          Icon={
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color={colors.white}
            />
          }
          color={colors.yellow}
          size={50}
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
    fontFamily: "iran-sans-regular",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default ReportsListScreen;
