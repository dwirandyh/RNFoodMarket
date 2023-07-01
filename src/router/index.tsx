import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { SignIn, SplashScreen } from "../pages"
import SignUp from "../pages/SignUp";

export type RootStackParamList = {
    SplashScreen: undefined;
    SignIn: undefined;
    SignUp: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router