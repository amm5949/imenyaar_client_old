import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import CreateProjectScreen from "./add-new-project/CreateProjectScreen";
import CreateProject2Screen from "./add-new-project/CreateProject2Screen";
import CreateProject3Screen from "./add-new-project/CreateProject3Screen";
import CheckListScreen from "./add-new-project/CheckListScreen";
import ProjectDetailsScreen from "./ProjectDetailsScreen";
import ProjectsListScreen from "./ProjectsListScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Stack = createStackNavigator();

function ProjectCreationStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="step1" component={CreateProjectScreen} />
      <Stack.Screen name="step2" component={CreateProject2Screen} />
      <Stack.Screen name="step3" component={CreateProject3Screen} />
      <Stack.Screen name="step4" component={CheckListScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProjectCreationStack;
