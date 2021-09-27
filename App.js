import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import UserHomeScreen from "./app/screens/user-app/UserHomeScreen";
import ProjectsListScreen from "./app/screens/projects/ProjectsListScreen";
import UserReportsListScreen from "./app/screens/user-app/UserReportsListScreen";
import UserAccidentsListScreen from "./app/screens/user-app/UserAccidentsListScreen";
import UserAddAccidentScreen from "./app/screens/user-app/UserAddAccidentScreen";
import SignUpScreen from "./app/screens/login/SignUpScreen";
import LogInScreen from "./app/screens/login/LogInScreen";
import CreateProjectScreen from "./app/screens/projects/add-new-project/CreateProjectScreen";
import UserAddReportScreen from "./app/screens/user-app/UserAddReportScreen";
import AccidentsListScreen from "./app/screens/accidents/AccidentsListScreen";
import ReportsListScreen from "./app/screens/reports/ReportsListScreen";
import ReportDetailsScreen from "./app/screens/reports/ReportDetailsScreen";
import AccidentDetailsScreen from "./app/screens/accidents/AccidentDetailsScreen";
import PeopleListScreen from "./app/screens/people/PeopleListScreen";
import PersonDetailsScreen from "./app/screens/people/PersonDetailsScreen";
import PeopleStack from "./app/screens/people/PeopleStack";
import NavigationDrawer from "./app/screens/navigation-drawer/NavigationDrawer";

export const injectWebCss = (f) => {
  // Only on web
  if (Platform.OS !== "web") return;

  // Inject style
  const style = document.createElement("style");
  style.textContent = `textarea, select, input, button { outline: none!important; }`;

  const mapStyle = document.createElement("link");
  mapStyle.href =
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/leaflet.css";
  mapStyle.rel = "stylesheet";

  document.head.append(mapStyle);
  return document.head.append(style);
};

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
      // <PeopleListScreen />
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUpScreen" component={NavigationDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
    //     <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    //
    //     <Stack.Screen name="LogInScreen" component={LogInScreen} />
    //     <Stack.Screen
    //       name="ActivateAccountScreen"
    //       component={ActivateAccountScreen}
    //     />
    //     <Stack.Screen
    //       name="ConfirmPurchaseScreen"
    //       component={ConfirmPurchaseScreen}
    //     />
    //     <Stack.Screen
    //       name="ForgetPasswordScreen"
    //       component={ForgetPasswordScreen}
    //     />
    //     <Stack.Screen
    //       name="ForgetPasswordSecurityCodeScreen"
    //       component={ForgetPasswordSecurityCodeScreen}
    //     />
    //     <Stack.Screen
    //       name="SecurityCodeScreen"
    //       component={SecurityCodeScreen}
    //     />
    //     <Stack.Screen
    //       name="ChangePasswordScreen"
    //       component={ChangePasswordScreen}
    //     />
    //     <Stack.Screen name="NavigationScreens" component={NavigationDrawer} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

injectWebCss();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
