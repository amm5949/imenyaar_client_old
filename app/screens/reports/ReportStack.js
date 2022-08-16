import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import ReportCreateScreen from "./ReportCreateScreen";
import ReportDetailsScreen from "./ReportDetailsScreen";
import ReportEditScreen from "./ReportEditScreen";
import ReportsListScreen from "./ReportsListScreen";
// import {ReportEditScreen} from "./ReportEditScreen"; 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const fontScale = Dimensions.get("window").fontScale;

const Stack = createStackNavigator();

function ReportStack(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReportList" component={ReportsListScreen} />
      <Stack.Screen name="ReportDetail" component={ReportDetailsScreen} />
      <Stack.Screen name="ReportEdit" component={ReportEditScreen} />
      <Stack.Screen name="ReportCreate" component={ReportCreateScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ReportStack;
