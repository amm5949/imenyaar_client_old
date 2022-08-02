import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
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
import { useSelector } from "react-redux";
import { getProjects } from "../../api/projects";
import { getActivities } from "../../api/activities/get_activities";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

// const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
// const zonesArray = ["زون شماره 1", "زون شماره 2"];
// const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

function ReportsListScreen(props) {

  const [reportsArray, setReportsArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);
  const [activitiesArray, setActivitiesArray] = useState([]);
  const [zonesArray, setzonesArray] = useState([]);

  const [projectValue, setProjectValue] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [zoneValue, setZoneValue] = useState(null);

  const [filteredReports, setFilteredReports] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filteredactivity, setFilteredactivity] = useState([]);
  const [filteredZones, setFilteredZones] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userData_report = useSelector((state) => state.user);
  const fetchReport = async () => {
    const projectReports = await getReports(userData_report?.user.result.tokens.access_token)
    setReportsArray(projectReports.data.result.items);
    // HERE
    setLoading(false);
    setError(false);
    console.log("the reports are ", projectReports);
  }

  const fetchProjects = async()=>{
    const Projects = await getProjects(userData_report?.user.result.tokens.access_token)
    setProjectsArray(Projects.data.result.items);
    console.log("Projects Output: ", Projects);
  }

  const fetchActivities = async()=>{
    const activities = await getActivities(userData_report?.user.result.tokens.access_token)
    setActivitiesArray(activities.result.values);
    console.log("activities Output: ", activities);
  }

  const fetchZones = async()=>{
    const zones = await getZones(userData_report?.user.result.tokens.access_token)
    setzonesArray(zones.data.result.items);
    console.log("zones Output: ", zones);
  }
  
  useEffect(() => {
    // mounting
    let isSubscribed = true;
    setLoading(true);
    if (isSubscribed) {
      fetchReport();
      fetchProjects();
      fetchActivities();
      fetchZones();
    }
    return () => {
      // cleanup function 
      isSubscribed = false;
    }
  }, [])

  useEffect(() => {

    // in the first three lines, i filtered projects, zones and activities through the values that user has chosen

    projectValue ? setFilteredProjects(projectsArray?.filter(project => project.name === projectValue)) : setFilteredProjects(projectsArray);
    zoneValue ? setFilteredZones(zonesArray?.filter(zone => zone.name === zoneValue)) : setFilteredZones(zonesArray);
    activityValue ? setFilteredactivity(activitiesArray?.filter(activity => activity.name === activityValue)) : setFilteredactivity(activitiesArray);

    // then, filtering projects have been done first by zones and after that by activities

    setFilteredProjects(filteredProjects?.filter(project => filteredZones?.some(zone => project.id === zone.project_id)));
    setFilteredProjects(filteredProjects?.filter(project => filteredactivity?.some(activity => activity.project_id === project.id)));

    // finally, i choose reports who are involved with filtered projects
    
    setFilteredReports(reportsArray?.filter(report => filteredProjects?.some(project => report.project_name === project.name)));

  }, [zoneValue, projectValue, activityValue])
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست گزارشات"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        projects={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        value={projectValue}
        setValue={setProjectValue}
        required
      />
      <AppPicker
        projects={zonesArray}
        placeholder="مثال : زون شماره اول"
        title="نام زون"
        value={zoneValue}
        setValue={setZoneValue}
        required
      />
      <AppPicker
        projects={activitiesArray}
        placeholder="مثال : فعالیت شبکه کشی ساختمان"
        title="نام فعالیت"
        value={activityValue}
        setValue={setActivityValue}
        required
      />

      {loading ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <LoadingAnimation visible={loading} />
        </View>
      ) : filteredReports && filteredReports?.length === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <Text style={styles.notFoundText}>
            هنوز گزارشی ثبت نشده است
          </Text>
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
            {filteredReports?.map((item, index) => (
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
                    onPressEdit={() => console.log(item.header, " editted")}
                  />
                )}
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
