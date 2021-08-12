import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AccidentsListScreen from "./AccidentsListScreen";
import AccidentDetailsScreen from "./AccidentDetailsScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Stack = createStackNavigator();

function AccidentsStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccidentList" component={AccidentsListScreen} />
      <Stack.Screen name="AccidentDetail" component={AccidentDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccidentsStack;
