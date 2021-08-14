import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ReportsListScreen from "./ReportsListScreen";
import ReportDetailsScreen from "./ReportDetailsScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Stack = createStackNavigator();

function ReportStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReportList" component={ReportsListScreen} />
      <Stack.Screen name="ReportDetail" component={ReportDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ReportStack;
