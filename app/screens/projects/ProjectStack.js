import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProjectCreationStack from "./ProjectCreationStack";
import ProjectDetailsScreen from "./ProjectDetailsScreen";
import ProjectsListScreen from "./ProjectsListScreen";

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

export default ProjectStack;
