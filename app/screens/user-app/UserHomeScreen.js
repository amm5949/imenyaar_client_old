import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useSelector } from "react-redux";


import colors from "../../config/colors";
import ScreenHeader from "../../components/ScreenHeader";
import AppText from "../../components/AppText";
import ProjectItem from "../../components/ProjectItem";
import UserProjectListItem from "../../components/UserProjectListItem";
import { getActivities } from "../../api/activities/get_activities";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const initialProjectsArray = [
  {
    name: "پروژه برج مروارید",
    status: 1,
    activityName: "سیم کشی ساختمان",
    zoneName: "زون 1",
    image: require("../../assets/list_report_screen/building(1).jpg"),
  },
  {
    name: "پروژه برج مروارید",
    status: 2,
    activityName: "سیم کشی ساختمان",
    zoneName: "زون 1",
    image: require("../../assets/list_report_screen/building(1).jpg"),
  },
  {
    name: "پروژه برج مروارید",
    status: 0,
    activityName: "سیم کشی ساختمان",
    zoneName: "زون 1",
    image: require("../../assets/list_report_screen/building(1).jpg"),
  },
  {
    name: "پروژه برج مروارید",
    status: 1,
    activityName: "سیم کشی ساختمان",
    zoneName: "زون 1",
  },
  {
    name: "پروژه برج مروارید",
    status: 1,
    activityName: "سیم کشی ساختمان",
    zoneName: "زون 1",
  },
  {
    name: "پروژه برج مروارید",
    status: 1,
    activityName: "سیم کشی ساختمان",
    zoneName: "زون 1",
  },
  {
    name: "پروژه برج مروارید",
    status: 1,
    activityName: "سیم کشی ساختمان",
    zoneName: "زون 1",
  },
];

const EmptyList = () => (
  <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
    <Image
      source={require("../../assets/list_report_screen/empty-list.png")}
      style={styles.emptyListImage}
      resizeMode="cover"
    />
    <AppText style={styles.notFoundText}>هنوز پروژه ای ثبت نشده است</AppText>
  </View>
);

function UserHomeScreen(props) {
  const [projects, setProjects] = useState(initialProjectsArray);
  const [tabIndex, setTabIndex] = React.useState(1);
  const routes = ["کارهای آینده", "کارهای امروز", "کارهای گذشته"];
  const [activities, setActivities] = useState([]);
  const userData = useSelector((state) => state.user);


  const fetchActivities = async () => {
    const response = await getActivities(userData?.user.result.tokens.access_token);
    setActivities(response.result.values);
    console.log('%c 🌭 response.result.values: ', 'font-size:20px;background-color: #42b983;color:#fff;', response.result.values);
  }
  useEffect(() => {
    fetchActivities();
  }, [])
  return (
    <View style={styles.container}>
      <ScreenHeader
        hasSearchField={true}
        headerText={"کار های شما"}
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      <View style={styles.tabView}>
        {routes.map((value, index) => (
          <TouchableWithoutFeedback
            onPress={() => setTabIndex(index)}
            key={index}
          >
            <View
              style={[
                styles.tabItemView,
                index === tabIndex && { backgroundColor: "#003f5c" },
              ]}
            >
              <AppText
                style={[
                  styles.tabItemLabel,
                  index === tabIndex && { color: "#fff" },
                ]}
              >
                {value}
              </AppText>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      {projects.length === 0 ? (
        EmptyList()
      ) : (
        <ScrollView
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <View style={styles.textContainer}>
            {activities?.map((item, index) => (
              <UserProjectListItem
                key={index}
                name={item.header}
                activity={item.name}
                zone={item.zoneName}
                status={item.status}
                image={item.image}
                props={props}
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
    flex: 1,
    backgroundColor: colors.inputViewBackground,
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
  tabItemView: {
    paddingVertical: 5,
    backgroundColor: colors.inputViewBackground,
    alignItems: "center",
    flex: 1,
  },
  tabItemLabel: {
    fontSize: 11 / fontScale,
    color: "#2f4b7c",
  },
  tabView: {
    borderRadius: 13,
    borderColor: "#003f5c",
    borderWidth: 1,
    width: "84.6%",
    flexDirection: "row",
    alignSelf: "center",
    overflow: "hidden",
    marginVertical: 10,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    marginVertical: 20,
  },
});

export default UserHomeScreen;
