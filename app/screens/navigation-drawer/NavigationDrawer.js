import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../../config/colors";
import AccidentsListScreen from "../accidents/AccidentsListScreen";
import PeopleListScreen from "../people/PeopleListScreen";
import ProjectsListScreen from "../projects/ProjectsListScreen";
import ReportsListScreen from "../reports/ReportsListScreen";
import ZonesListScreen from "../zones/ZonesListScreen";
import AppDrawerContent from "./AppDrawerContent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Drawer = createDrawerNavigator();

function NavigationDrawer(props) {
  return (
    <NavigationContainer>
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
        <Drawer.Screen name="Projects" component={ProjectsListScreen} />
        <Drawer.Screen name="Zones" component={ZonesListScreen} />
        <Drawer.Screen name="People" component={PeopleListScreen} />
        <Drawer.Screen name="Reports" component={ReportsListScreen} />
        <Drawer.Screen name="Accidents" component={AccidentsListScreen} />
        <Drawer.Screen name="Guide" component={ZonesListScreen} />
        <Drawer.Screen name="Profile" component={ZonesListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default NavigationDrawer;
