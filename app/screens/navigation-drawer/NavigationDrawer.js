import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Platform } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";
import AccidentsStack from "../accidents/AccidentsStack";
import PeopleStack from "../people/PeopleStack";
import ProfileScreen from "../profile/ProfileScreen";
import ProjectStack from "../projects/ProjectStack";
import ReportStack from "../reports/ReportStack";
import ZoneStack from "../zones/ZoneStack";
import AppDrawerContent from "./AppDrawerContent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Drawer = createDrawerNavigator();

function NavigationDrawer(props) {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      lazy={false}
      drawerContent={(props) => <AppDrawerContent {...props} />}
      initialRouteName="Projects"
      drawerPosition="right"
      drawerType="back"
      backBehavior="history"
      drawerStyle={{
        backgroundColor: "#071c33",
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
        labelStyle: { fontSize: 11, color: colors.white },
      }}
      edgeWidth={20}
      minSwipeDistance={20}
      sceneContainerStyle={
        Platform.OS === "web" && { paddingTop: 1, backgroundColor: "#fff" }
      }
    >
      <Drawer.Screen name="Projects" component={ProjectStack} />
      <Drawer.Screen name="Zones" component={ZoneStack} />
      <Drawer.Screen name="People" component={PeopleStack} />
      <Drawer.Screen name="Reports" component={ReportStack} />
      <Drawer.Screen name="Accidents" component={AccidentsStack} />
      <Drawer.Screen name="Guide" component={ZoneStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NavigationDrawer;
