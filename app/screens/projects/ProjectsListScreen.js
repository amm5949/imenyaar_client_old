import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppText from "../../components/AppText";
import CircularIcon from "../../components/CircularIcon";
import ProjectItem from "../../components/ProjectItem";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";
import { getProjects } from "../../api/projects";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

import { styles } from "./ProjectListScreen.style";
import moment from "moment";
const fontScale = Dimensions.get("window").fontScale;

const handle_progress = (object) => {

  const date_end = new Date(
    moment(object.scheduled_end.toString(), "jYYYY/jM/jD HH:mm").format("YYYY-M-D")
  );
  const date_start = new Date(
    moment(object.start_date.toString(), "jYYYY/jM/jD HH:mm").format("YYYY-M-D")
  );

  const duration = parseInt(
    (date_end.getTime() - date_start.getTime()) / (24 * 3600 * 1000)
  );

  const now = new Date().toLocaleDateString('fa-IR-u-nu-latn')
  const first_part = now.indexOf("/");
  const second_part = now.indexOf("/", first_part + 1);

  const year = now.substring(0, first_part)
  const month = now.substring(first_part + 1, second_part);
  const day = now.substring(second_part + 1, now.length);

  const newDate = new Date();
  newDate.setDate(Number(day));
  newDate.setMonth(Number(month) - 1);
  newDate.setFullYear(Number(year));

  const diff = newDate.getTime() - date_start.getTime();
  const inDays = Number(diff / (1000 * 60 * 60 * 24));


  let progress = parseFloat(inDays / (duration * 100)).toFixed(2);
  if (progress > 100) {
    progress = 100;
  }
  return progress;
}


function ProjectsListScreen(props) {
  const [projectsArray, setProjectsArray] = useState(null);
  const [active, setActive] = useState(true);

  const isFocused = useIsFocused();

  const userData = useSelector((state) => state.user);
  console.log("props =>>>>> ", props);

  const fetchProjects = async () => {
    const projects = await getProjects(
      userData?.user.result.tokens.access_token
    );
    console.log("my projects => ", projects.data.result.items);
    setProjectsArray(projects.data.result.items);
  };

  useEffect(() => {
    fetchProjects();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="پروژه ها"
        onPressNavigation={() => props.navigation.openDrawer()}
        hasSearchField
      />
      <View style={styles.projectKindContainer}>
        <TouchableWithoutFeedback onPress={() => setActive(false)}>
          <View
            style={{
              paddingVertical: 5,
              backgroundColor: active ? colors.inputViewBackground : "#003f5c",
              alignItems: "center",
              flex: 1,
            }}
          >
            <AppText
              style={{
                fontSize: 11 / fontScale,
                color: active ? "#003f5c" : colors.inputViewBackground,
              }}
            >
              پروژه های غیر فعال
            </AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setActive(true)}>
          <View
            style={{
              paddingVertical: 5,
              backgroundColor: active ? "#003f5c" : colors.inputViewBackground,
              alignItems: "center",
              flex: 1,
            }}
          >
            <AppText
              style={{
                fontSize: 11 / fontScale,
                color: active ? colors.inputViewBackground : "#003f5c",
              }}
            >
              پروژه های فعال
            </AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {projectsArray && projectsArray.length === 0 ? (
        <View style={styles.unactiveProjectDetails}>
          <Image
            source={require("../../assets/list_report_screen/empty-list.png")}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <AppText style={styles.notFoundText}>
            هنوز پروژه ای ثبت نشده است
          </AppText>
        </View>
      ) : (
        <ScrollView style={styles.activeProjectPage}>
          <View style={styles.textContainer}>
            {projectsArray &&
              projectsArray.map((item, index) => (
                <ProjectItem
                  key={index}
                  title={item.name}
                  image={item.image}
                  scheduled_end={item.scheduled_end}
                  progress={handle_progress(item)}
                  onPress={() => {
                    props.navigation.navigate("ProjectDetail", item);
                    console.log(`item is ${item} and index is equal to ${index}`)
                    console.log(item)
                  }}
                />
              ))}
          </View>
        </ScrollView>
      )}
      <View style={styles.addNewProjectButton}>
        <CircularIcon
          onPress={() =>
            props.navigation.navigate("ProjectCreation", {
              screen: "step1",
              params: {
                access_token: userData?.user.result.tokens.access_token,
              },
            })
          }
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

export default ProjectsListScreen;
