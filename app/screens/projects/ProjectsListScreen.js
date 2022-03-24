import { MaterialCommunityIcons } from "@expo/vector-icons";
import { isDate } from "moment";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { set } from "react-native-reanimated";
import { date, object } from "yup";
import { getProject } from "../../api/projects";
import AppText from "../../components/AppText";
import CircularIcon from "../../components/CircularIcon";
import ProjectItem from "../../components/ProjectItem";
import ScreenHeader from "../../components/ScreenHeader";
import colors from "../../config/colors";

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


const daysLeft = function( date1, date2 ) {
  let date_array_1 = date1.split("-");
  let date_array_2 = date2.split("-");
  let diffTime = 365 * ((~~date_array_1[0]) - (~~date_array_2[0])) + 30 * ((~~date_array_1[1]) - (~~date_array_2[1]));
  date_array_1[2] = date_array_1[2].substr(0, 2);
  date_array_2[2] = date_array_2[2].substr(0, 2);
  diffTime += (~~date_array_1[2]) + (~~date_array_2[2]); 
  return diffTime;
} 

const set_project_array = function( projects ) {
  console.log(1);
  console.log(projects);
  let project_array = [];
  
  for (let i = 0; i< projects.length; i++) {
    let projectObject = {};
    // debugger;
    projectObject.key = projects[i].id;
    projectObject.header = projects[i].name;
    console.log(projectObject.header);
    projectObject.daysLeft = daysLeft( projects[i].scheduled_end, projects[i].start_date );
    projectObject.progress = ((i * 0.1).toFixed(1));
    projectObject.image = (i % 2 == 0 ? 
      require("../../assets/list_report_screen/building(1).jpg") : 
      require("../../assets/list_report_screen/building(3).jpg")
    );
    project_array = project_array.concat(projectObject);
  }
  return project_array;
}

const navigateToAnotherPage = function( props ) {
  props.navigation.navigate("ProjectDetail");
  console.log(projetsArray);
}

function ProjectsListScreen(props) {
  const [projetsArray, setProjetsArray] = useState([]);
  const [active, setActive] = useState(true);
  
  useEffect(() => {
    if (active == false) setProjetsArray([]);
    else {
      console.log("hi");
      getProject() 
          .then((response) => {
            console.log(response);
            const projects = response.data.result.items;
            const answers = set_project_array(projects);
            console.log(answers);
            setProjetsArray(answers);
            console.log("response.result answers");
            console.log(response.result);
          })
          .catch((reason) => {
            console.log("ERROR Reason: ", reason);
            setActive(false);
          })
    }
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
                daysLeft={item.daysLeft}
                progress={item.progress}
                // onPress={() => props.navigation.navigate("ProjectDetail")}
                onPress={() => {
                  // debugger;
                  console.log(item)
                  props.navigation.navigate("ProjectDetail", item);
                  
                  // console.log(index);
                  // console.log(`I am showing the contents of projectArray, yey`);
                  // console.log(projetsArray[index]);
                }}
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
