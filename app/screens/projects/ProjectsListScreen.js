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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const initialProjectsArray = [
  {
    header: "پروژه برج مروارید",
    daysLeft: 1,
    progress: 1,
    image: require("../../assets/list_report_screen/building(1).jpg"),
  },
  {
    header: "پروژه برج مروارید",
    daysLeft: 13,
    progress: 0.75,
    image: require("../../assets/list_report_screen/building(3).jpg"),
  },
  {
    header: "پروژه برج مروارید",
    daysLeft: 140,
    progress: 0.5,
    image: require("../../assets/list_report_screen/building(1).jpg"),
  },
  {
    header: "پروژه برج مروارید",
    daysLeft: 10,
    progress: 0.25,
    image: require("../../assets/list_report_screen/building(3).jpg"),
  },
  {
    header: "پروژه برج مروارید",
    daysLeft: 10,
    progress: 0.25,
    image: require("../../assets/list_report_screen/building(1).jpg"),
  },
  {
    header: "پروژه برج مروارید",
    daysLeft: 10,
    progress: 0.65,
  },
];

function ProjectsListScreen(props) {
  const [projetsArray, setProjetsArray] = useState([]);
  const [active, setActive] = useState(true);
  const userData = useSelector((state) => state.user);
  console.log("userData", userData);
  const fetchProjects = async () => {
    // console.log('fetch projects')
    const myProjects = await getProjects(userData?.user.result.tokens.access_token);
    setProjetsArray(myProjects.data.result.items);
    console.log('my projects => ', myProjects)
  }
  useEffect(() => {
    !active ? setProjetsArray([]) : fetchProjects()
  }, [active]);
  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require("../../assets/list_report_screen/sample-profile.jpg")}
        headerText="پروژه ها"
        onPressNavigation={() => props.navigation.openDrawer()}
        hasSearchField
      />
      <View
        style={{
          borderRadius: 13,
          borderColor: "#003f5c",
          borderWidth: 1,
          width: "84.6%",
          flexDirection: "row",
          overflow: "hidden",
          marginVertical: 10,
        }}
      >
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
      {projetsArray.length === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
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
      ) : (
        <ScrollView
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <View style={styles.textContainer}>
            {projetsArray.map((item, index) => (
              <ProjectItem
                key={index}
                title={item.header}
                image={item.image}
                scheduled_end={item.scheduled_end}
                progress={item.progress}
                onPress={() => props.navigation.navigate("ProjectDetail")}
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
          onPress={() => props.navigation.navigate("ProjectCreation")}
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
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    marginVertical: 20,
  },
});

export default ProjectsListScreen;
