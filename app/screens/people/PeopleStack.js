import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PeopleCreateScreen from "./PeopleCreateScreen";
import PeopleEditScreen from "./PeopleEditScreen";
import PeopleListScreen from "./PeopleListScreen";
import PersonDetailsScreen from "./PersonDetailsScreen";

const Stack = createStackNavigator();

function PeopleStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PeopleList" component={PeopleListScreen} />
      <Stack.Screen name="PersonDetail" component={PersonDetailsScreen} />
      <Stack.Screen name="PeopleEdit" component={PeopleEditScreen} />
      <Stack.Screen name="PeopleCreate" component={PeopleCreateScreen} />
    </Stack.Navigator>
  );
}

export default PeopleStack;
