import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ProjectsListScreen from "./ProjectsListScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Stack = createStackNavigator();

function ProjectStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProjectList" component={ProjectsListScreen} />
      {/* <Stack.Screen name="PersonDetail" component={PersonDetailsScreen} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProjectStack;
