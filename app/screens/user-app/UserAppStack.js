import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserHomeScreen from "./UserHomeScreen";
import UserReportsListScreen from "./UserReportsListScreen";
import UserAddReportScreen from "./UserAddReportScreen";
import UserAccidentsListScreen from "./UserAccidentsListScreen";
import UserAddAccidentScreen from "./UserAddAccidentScreen";

const Stack = createStackNavigator();

function UserAppStack(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="UserHomeScreen" component={UserHomeScreen} />
            <Stack.Screen name="UserReportsListScreen" component={UserReportsListScreen} />
            <Stack.Screen name="UserAddReportScreen" component={UserAddReportScreen} />
            <Stack.Screen name="UserAccidentsListScreen" component={UserAccidentsListScreen} />
            <Stack.Screen name="UserAddAccidentScreen" component={UserAddAccidentScreen} />
        </Stack.Navigator>
    );
}

export default UserAppStack;
