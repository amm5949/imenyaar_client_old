import React, {useEffect, useState} from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import PersonListIcon from "../../components/icons/PersonListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import {getReports} from "../../api/reports";
import {getPeople} from "../../api/people";
import LoadingAnimation from "../../components/LoadingAnimation";
import { useSelector } from "react-redux";
import { getProjects } from "../../api/projects";
import { getActivities } from "../../api/activities/get_activities";
import { getZones } from "../../api/zones";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

// const projectsArray = [" پروژه برج مروارید", "پروژه ساخت هوشمند"];
// const zonesArray = ["زون شماره 1", "زون شماره 2"];
// const activitiesArray = ["فعالیت شماره 1", "فعالیت شماره 2"];

let isSubscribed = false;

function PeopleListScreen(props) {

  const [peopleArray, setPeopleArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);
  const [activitiesArray, setActivitiesArray] = useState([]);
  const [zonesArray, setzonesArray] = useState([]);

  const [projectValue, setProjectValue] = useState(null);
  const [activityValue, setActivityValue] = useState(null);
  const [zoneValue, setZoneValue] = useState(null);

  const [filteredPeople, setFilteredPeople] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filteredactivity, setFilteredactivity] = useState([]);
  const [filteredZones, setFilteredZones] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userData_people = useSelector((state) => state.user);

  const fetchPeople = async()=>{
    const People = await getPeople(userData_people?.user.result.tokens.access_token)
    setPeopleArray(People.data.result.items);
    console.log("People Output: ", People);
  }

  const fetchProjects = async()=>{
    const Projects = await getProjects(userData_people?.user.result.tokens.access_token)
    setProjectsArray(Projects.data.result.items);
    console.log("Projects Output: ", Projects);
  }

  const fetchActivities = async()=>{
    const activities = await getActivities(userData_people?.user.result.tokens.access_token)
    setActivitiesArray(activities.data.result.items);
    console.log("activities Output: ", activities);
  }

  const fetchZones = async()=>{
    const zones = await getZones(userData_people?.user.result.tokens.access_token)
    setzonesArray(zones.data.result.items);
    console.log("zones Output: ", zones);
  }
  // if (peopleArray === null) {
  //   return null;
  // }
  
  useEffect(() => {
    // mounting
    // this part fetches people, projects, zones and activities because we wanna filter who is reallu user want to see
    fetchPeople();
    fetchProjects();
    fetchZones();
    fetchActivities();
  }, [])

  
  useEffect(() => {

    // in the first three lines, i filtered projects, zones and activities through the values that user has chosen

    projectValue ? setFilteredProjects(projectsArray?.filter(project => project.name === projectValue)) : setFilteredProjects(projectsArray);
    zoneValue ? setFilteredZones(zonesArray?.filter(zone => zone.name === zoneValue)) : setFilteredZones(zonesArray);
    activityValue ? setFilteredactivity(activitiesArray?.filter(activity => activity.name === activityValue)) : setFilteredactivity(activitiesArray);

    // then, filtering projects have been done first by zones and after that by activities

    setFilteredProjects(filteredProjects?.filter(project => filteredZones?.some(zone => project.id === zone.project_id)));
    setFilteredProjects(filteredProjects?.filter(project => filteredactivity?.some(activity => activity.project_id === project.id)));

    // finally, i choose people who are involved with filtered projects

    setFilteredPeople(peopleArray?.filter(person => filteredProjects?.some(project => project.owner_id === person.id)));
    
  }, [zoneValue, projectValue, activityValue])

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست افراد"
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
          (<View
              style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
              <LoadingAnimation visible={loading} />
          </View>) :
      peopleArray?.length === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <AppText style={styles.notFoundText}>هنوز فردی ثبت نشده است</AppText>
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
            {peopleArray?.map((item, index) => (
              <ListItem
                key={index}
                header={item.first_name + " " + item.last_name}
                detailsFirst={item.phone_number}
                IconComponent={<PersonListIcon size={23} />}
                onPress={() =>
                    props.navigation.navigate("People", {
                        screen: "PersonDetail",
                        params: {
                            firstName: item.first_name,
                            lastName: item.last_name,
                            phoneNumber: item.phone_number,
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

export default PeopleListScreen;
