import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import WelcomeScreen from "../screens/auth/login/WelcomeScreen";
import LoginScreen from "../screens/auth/login/LoginScreen";

// tabs

export type RootStackParamList = {
    WelcomeScreen: undefined;
    LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName="WelcomeScreen">
            {/* tabs */}

            {/* static screens */}
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

            {/* dynamic screens */}
        </Stack.Navigator>
    );
}
