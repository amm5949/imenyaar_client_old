import React from "react";
import { BoxShadow } from "react-native-shadow";
import { StatusBar, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Splash from "./app/screens/splash/SplashFirstScreen";
import LogInScreen from "./app/screens/login/LogInScreen";
import SignUpScreen from "./app/screens/login/SignUpScreen";
import ForgetPasswordScreen from "./app/screens/login/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/login/ForgetPasswordSecurityCodeScreen";
import SecurityCodeScreen from "./app/screens/login/SecurityCodeScreen";
import ChangePasswordScreen from "./app/screens/login/ChangePasswordScreen";

import ConfirmPurchaseScreen from "./app/screens/activate-account/ConfirmPurchaseScreen";
import ActivateAccountScreen from "./app/screens/activate-account/ActivateAccountScreen";
import SplashFirstScreen from "./app/screens/splash/SplashFirstScreen";
import SplashSecondScreen from "./app/screens/splash/SplashSecondScreen";
import SplashThirdScreen from "./app/screens/splash/SplashThirdScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import AppBarChart from "./app/components/AppBarChart";
import ScreenHeader from "./app/components/ScreenHeader";
import ReportsListScreen from "./app/screens/reports/ReportsListScreen";
import CardItem from "./app/components/CardItem";
import ReportDetailsScreen from "./app/screens/reports/ReportDetailsScreen";
import ZonesListScreen from "./app/screens/zones/ZonesListScreen";
import ZoneDetailsScreen from "./app/screens/zones/ZoneDetailsScreen";
import AccidentsListScreen from "./app/screens/accidents/AccidentsListScreen";
import AccidentDetailsScreen from "./app/screens/accidents/AccidentDetailsScreen";
import PeopleListScreen from "./app/screens/people/PeopleListScreen";
import PersonDetailsScreen from "./app/screens/people/PersonDetailsScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    // <ReportsListScreen />
    // <ReportDetailsScreen />
    // <ZonesListScreen />
    // <ZoneDetailsScreen />
    // <AccidentsListScreen />
    // <AccidentDetailsScreen />
    // <PeopleListScreen />
    // <PersonDetailsScreen />
    // </View>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

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
        <Stack.Screen name="ReportsListScreen" component={ReportsListScreen} />
        <Stack.Screen
          name="ReportDetailsScreen"
          component={ReportDetailsScreen}
        />
        <Stack.Screen name="ZonesListScreen" component={ZonesListScreen} />
        <Stack.Screen name="ZoneDetailsScreen" component={ZoneDetailsScreen} />
        <Stack.Screen
          name="AccidentsListScreen"
          component={AccidentsListScreen}
        />
        <Stack.Screen
          name="AccidentDetailsScreen"
          component={AccidentDetailsScreen}
        />
        <Stack.Screen name="PeopleListScreen" component={PeopleListScreen} />
        <Stack.Screen
          name="PersonDetailsScreen"
          component={PersonDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
