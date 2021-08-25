import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import ProjectCreationStack from "./ProjectCreationStack";
import ProjectDetailsScreen from "./ProjectDetailsScreen";
import ProjectsListScreen from "./ProjectsListScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Stack = createStackNavigator();

function ProjectStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProjectList" component={ProjectsListScreen} />
      <Stack.Screen name="ProjectDetail" component={ProjectDetailsScreen} />
      <Stack.Screen name="ProjectCreation" component={ProjectCreationStack} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProjectStack;
