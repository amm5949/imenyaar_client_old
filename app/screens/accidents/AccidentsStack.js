import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccidentsListScreen from "./AccidentsListScreen";
import AccidentDetailsScreen from "./AccidentDetailsScreen";

const Stack = createStackNavigator();

function AccidentsStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccidentList" component={AccidentsListScreen} />
      <Stack.Screen name="AccidentDetail" component={AccidentDetailsScreen} />
    </Stack.Navigator>
  );
}

export default AccidentsStack;
