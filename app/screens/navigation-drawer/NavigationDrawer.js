import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../../config/colors";
import AccidentsListScreen from "../accidents/AccidentsListScreen";
import AccidentsStack from "../accidents/AccidentsStack";
import PeopleListScreen from "../people/PeopleListScreen";
import PeopleStack from "../people/PeopleStack";
import ProjectsListScreen from "../projects/ProjectsListScreen";
import ProjectStack from "../projects/ProjectStack";
import ReportsListScreen from "../reports/ReportsListScreen";
import ReportStack from "../reports/ReportStack";
import ZonesListScreen from "../zones/ZonesListScreen";
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
      drawerContent={(props) => <AppDrawerContent {...props} />}
      initialRouteName="Projects"
      drawerPosition="right"
      drawerType="slide"
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
      edgeWidth={windowWidth}
      hideStatusBar
      minSwipeDistance={20}
      // sceneContainerStyle={{ paddingTop: 100, backgroundColor: "#071c33" }}
    >
      <Drawer.Screen name="Projects" component={ProjectStack} />
      <Drawer.Screen name="Zones" component={ZoneStack} />
      <Drawer.Screen name="People" component={PeopleStack} />
      <Drawer.Screen name="Reports" component={ReportStack} />
      <Drawer.Screen name="Accidents" component={AccidentsStack} />
      <Drawer.Screen name="Guide" component={ZoneStack} />
      <Drawer.Screen name="Profile" component={ZoneStack} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NavigationDrawer;
