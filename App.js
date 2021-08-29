import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { View } from "react-native-web";
import AppCircularProgressBar from "./app/components/AppCircularProgressBar";
import AppDatePicker from "./app/components/AppDatePicker";
import DatePicker from "./app/components/date";

import CasualtyIcon from "./app/components/icons/CasualtyIcon";
import DebtIcon from "./app/components/icons/DebtIcon";
import PersonListIcon from "./app/components/icons/PersonListIcon";
import AccidentDetailsScreen from "./app/screens/accidents/AccidentDetailsScreen";
import AccidentsListScreen from "./app/screens/accidents/AccidentsListScreen";
import ActivateAccountScreen from "./app/screens/activate-account/ActivateAccountScreen";
import ConfirmPurchaseScreen from "./app/screens/activate-account/ConfirmPurchaseScreen";
import ChangePasswordScreen from "./app/screens/login/ChangePasswordScreen";
import ForgetPasswordScreen from "./app/screens/login/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/login/ForgetPasswordSecurityCodeScreen";
import LogInScreen from "./app/screens/login/LogInScreen";
import SecurityCodeScreen from "./app/screens/login/SecurityCodeScreen";

import SignUpScreen from "./app/screens/login/SignUpScreen";
import NavigationDrawer from "./app/screens/navigation-drawer/NavigationDrawer";
import PeopleListScreen from "./app/screens/people/PeopleListScreen";
import PersonDetailsScreen from "./app/screens/people/PersonDetailsScreen";
import ProfileScreen from "./app/screens/profile/ProfileScreen";
import CreateProject2Screen from "./app/screens/Project/add-new-project/CreateProject2Screen";
import CreateProject3Screen from "./app/screens/Project/add-new-project/CreateProject3Screen";
import CreateProjectScreen from "./app/screens/Project/add-new-project/CreateProjectScreen";
import CheckListScreen from "./app/screens/projects/CheckListScreen";
import ProjectDetailsScreen from "./app/screens/projects/ProjectDetailsScreen";
import ProjectsListScreen from "./app/screens/projects/ProjectsListScreen";
import ReportDetailsScreen from "./app/screens/reports/ReportDetailsScreen";
import ReportStack from "./app/screens/reports/ReportStack";
import ZoneDetailsScreen from "./app/screens/zones/ZoneDetailsScreen";
import ZonesListScreen from "./app/screens/zones/ZonesListScreen";

const linking = {
  prefixes: ["https://mychat.com", "mychat://"],
  config: {
    screens: {
      SignUpScreen: "",
    },
  },
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUpScreen" component={CreateProjectScreen} />

        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen
          name="ActivateAccountScreen"
          component={ActivateAccountScreen}
        />
        <Stack.Screen
          name="ConfirmPurchaseScreen"
          component={ConfirmPurchaseScreen}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen
          name="ForgetPasswordSecurityCodeScreen"
          component={ForgetPasswordSecurityCodeScreen}
        />
        <Stack.Screen
          name="SecurityCodeScreen"
          component={SecurityCodeScreen}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen name="NavigationScreens" component={NavigationDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
