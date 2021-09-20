import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import ZoneDetailsScreen from "./ZoneDetailsScreen";
import ZonesListScreen from "./ZonesListScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Stack = createStackNavigator();

function ZoneStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ZoneList" component={ZonesListScreen} />
      <Stack.Screen name="ZoneDetail" component={ZoneDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ZoneStack;
