import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import AccidentListIcon from "../../components/icons/AccidentListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { getAccidents } from "../../api/accidents";
import LoadingAnimation from "../../components/LoadingAnimation";
import { useSelector } from "react-redux";
import { getProjects } from "../../api/projects";
import { getZones } from "../../api/zones";
import { getIncident } from "../../api/incidents/get_incident";
import { getActivities } from "../../api/activities/get_activities";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

// const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
// const zonesArray = ["زون شماره 1", "زون شماره 2"];
// const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

// const reportsArray = [];
let isSubscribed = false;

function AccidentsListScreen(props) {

  const [incidentsArray, setIncidentsArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);
  const [activitiesArray, setActivitiesArray] = useState([]);
  const [zonesArray, setzonesArray] = useState([]);


  const [projectValue, setProjectValue] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [zoneValue, setZoneValue] = useState(null);


  const [filteredAccidents, setFilteredAccidents] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filteredactivity, setFilteredactivity] = useState([]);
  const [filteredZones, setFilteredZones] = useState([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userData_accident = useSelector((state) => state.user);
  
  const fetchIncidents = async () => {
    // const theIncidents = await getIncident(userData_accident?.user.result.tokens.access_token) // there is a problem, how can i get the incident_id?
    setIncidentsArray(theIncidents.data.result.items);
    console.log("The Accidents Output: ", theIncidents);
  }

  const fetchProjects = async () => {
    const theProjects = await getProjects(userData_accident?.user.result.tokens.access_token)
    setProjectsArray(theProjects.data.result.items);
    console.log("The Projects Output: ", theProjects);
  }

  const fetchZones = async () => {
    const theZones = await getZones(userData_accident?.user.result.tokens.access_token)
    setzonesArray(theZones.data.result.items);
    console.log("The Zones Output: ", theZones);
  }

  const fetchActivities = async () => {
    const theActivities = await getActivities(userData_accident?.user.result.tokens.access_token)
    setActivitiesArray(theActivities.data.result.items);
    console.log("The Activities Output: ", theActivities);
  }

  // useEffect(() => {
  //   isSubscribed = true;
  //   // request();
  //   isSubscribed && setLoading(true);
  //   getAccidents()
  //     .then((response) => {
  //       if (isSubscribed) {
  //         setLoading(false);
  //         setError(false);
  //         setAccidentsArray(response.data.result.incidents);
  //       }
  //     })
  //     .catch((reason) => {
  //       isSubscribed && setError(true);
  //     });

  //   return () => (isSubscribed = false)
  // }, []);
  useEffect(() => {
    // mounting
    isSubscribed = true;
    fetchIncidents();
    fetchProjects();
    fetchZones();
    fetchActivities();
    return () => {
      // cleanup function
      isSubscribed = false

    }
  }, []);

  useEffect(() => {

    // in the first three lines, i filtered projects, zones and activities through the values that user has chosen

    projectValue ? setFilteredProjects(projectsArray?.filter(project => project.name === projectValue)) : setFilteredProjects(projectsArray);
    zoneValue ? setFilteredZones(zonesArray?.filter(zone => zone.name === zoneValue)) : setFilteredZones(zonesArray);
    activityValue ? setFilteredactivity(activitiesArray?.filter(activity => activity.name === activityValue)) : setFilteredactivity(activitiesArray);

    // then, filtering projects have been done first by zones and after that by activities

    setFilteredProjects(filteredProjects?.filter(project => filteredZones?.some(zone => project.id === zone.project_id)));
    setFilteredProjects(filteredProjects?.filter(project => filteredactivity?.some(activity => activity.project_id === project.id)));

    // finally, i choose Accidents who are involved with filtered projects

    setFilteredAccidents
    
  }, [zoneValue, projectValue, activityValue])
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست حوادث"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        choices={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />
      <AppPicker
        choices={zonesArray}
        placeholder="مثال : زون شماره اول"
        title="نام زون"
        required
      />
      <AppPicker
        choices={activitiesArray}
        placeholder="مثال : فعالیت شبکه کشی ساختمان"
        title="نام فعالیت"
        required
      />

      {loading ?
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <LoadingAnimation visible={loading} />
        </View> :
        accidentsArray.length === 0 ? (
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Image
              source={require("../../assets/list_report_screen/empty-list.png")}
              style={styles.emptyListImage}
              resizeMode="cover"
            />
            <AppText style={styles.notFoundText}>
              هنوز حادثه ای ثبت نشده است
            </AppText>
          </View>
        ) : (
          <ScrollView
            persistentScrollbar={true}
            style={{
              width: "100%",
              overflow: "scroll",
              marginTop: 25,
            }}
          >
            <View style={styles.textContainer}>
              {accidentsArray.map((item, index) => (
                <ListItem
                  key={index}
                  header={item.project_name}
                  detailsFirst={item.activity_name}
                  detailsSecond={item.zone_name}
                  date={item.date}
                  IconComponent={<AccidentListIcon size={35} />}
                  onPress={() =>
                    props.navigation.navigate("Accidents", {
                      screen: "AccidentDetail",
                      params: {
                        user: item.first_name + " " + item.last_name,
                        type: item.type,
                        clock: item.date,
                        debt: item.financial_damage,
                        casualty: item.human_damage,
                        description: item.description,
                        zone: item.zone_name,
                        activity: item.activity_name,
                        project: item.project_name
                      },
                    })
                  }
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
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default AccidentsListScreen;
