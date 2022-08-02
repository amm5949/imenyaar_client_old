import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "../../components/AppPicker";
import AppText from "../../components/AppText";
import AccidentListIcon from "../../components/icons/AccidentListIcon";
import ListItem from "../../components/ListItem";
import ListItemActions from "../../components/ListItemActions";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { getAccidents } from "../../api/accidents";
import LoadingAnimation from "../../components/LoadingAnimation";
import { getProjects } from "../../api/projects";
import { getZones } from "../../api/zones";
import CircularIcon from "../../components/CircularIcon";
import styles from "./AccidentsListScreen.style";


// const reportsArray = [];
let isSubscribed = false;

function AccidentsListScreen(props) {


  const [accidentsArray, setAccidentsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userData = useSelector((state) => state.user);
  const [zonesArray, setZonesArray] = useState([]);
  const [projectsArray, setProjectsArray] = useState([]);

  const isFocused = useIsFocused();

  const fetchZones = async () => {
    const zones = await getZones(userData?.user.result.tokens.access_token);
    setZonesArray(zones.data.result.values);
    console.log("getZones Output", zones);
  }

  const fetchProjects = async () => {
    const projects = await getProjects(userData?.user.result.tokens.access_token)
    setProjectsArray(projects.data.result.items)
    console.log("projects in zone page", projects.data.result.items)
  }

  const fetchAccidents = async () => {
    const theAccidents = await getAccidents(userData?.user.result.tokens.access_token)
    setAccidentsArray(theAccidents.data.result.items);
    console.log("The Accidents Output: ", theAccidents);
  }

  useEffect(() => {
    // mounting
    isSubscribed = true;
    fetchZones();
    fetchProjects();
    fetchAccidents();
    return () => {
      // cleanup function
      isSubscribed = false

    }
  }, [isFocused])


  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="لیست حوادث"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <AppPicker
        data={projectsArray}
        placeholder="مثال : پروژه شاخت هوشمند"
        title="نام پروژه"
        required
      />
      <AppPicker
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
          onPress={() => props.navigation.navigate("ProjectCreation", {
            screen: "step1",
            params: { access_token: userData?.user.result.tokens.access_token },
          })}
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

export default AccidentsListScreen;
