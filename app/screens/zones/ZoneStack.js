import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import ZoneDetailsScreen from "./ZoneDetailsScreen";
import ZonesListScreen from "./ZonesListScreen";
import ZoneEditScreen from "./ZoneEditScreen";
import ZoneCreateScreen from "./ZoneCreateScreen";



const Stack = createStackNavigator();

function ZoneStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ZoneList" component={ZonesListScreen} />
      <Stack.Screen name="ZoneDetail" component={ZoneDetailsScreen} />
      <Stack.Screen name="ZoneEdit" component={ZoneEditScreen} />
      <Stack.Screen name="ZoneCreate" component={ZoneCreateScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ZoneStack;
