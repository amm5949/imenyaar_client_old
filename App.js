import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Platform, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import SignUpScreen from "./app/screens/login/SignUpScreen";
import LogInScreen from "./app/screens/login/LogInScreen";
import NavigationDrawer from "./app/screens/navigation-drawer/NavigationDrawer";
import ActivateAccountScreen from "./app/screens/activate-account/ActivateAccountScreen";
import ConfirmPurchaseScreen from "./app/screens/activate-account/ConfirmPurchaseScreen";
import ForgetPasswordScreen from "./app/screens/login/ForgetPasswordScreen";
import ForgetPasswordSecurityCodeScreen from "./app/screens/login/ForgetPasswordSecurityCodeScreen";
import ChangePasswordScreen from "./app/screens/login/ChangePasswordScreen";
import SecurityCodeScreen from "./app/screens/login/SecurityCodeScreen";
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import configureStore from "./app/redux/store/configureStore";
import { getData } from "./app/helper/AsyncStorage";
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

const store = configureStore()
export default function App() {
  useEffect(async ()=>{
    const user  = await getData('userData')
    console.log(user)
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
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
          <Stack.Screen name="NavigationScreens" component={NavigationDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
