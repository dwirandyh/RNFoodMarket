import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { FoodDetail, Home, OrderDetail, OrderSummary, SignIn, SplashScreen, SuccessOrder, WebView } from "../pages"
import SignUp from "../pages/SignUp";
import SignUpAddress from "../pages/SignUpAddress";
import SignUpSuccess from "../pages/SignUpSuccess";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../pages/Profile";
import Order from "../pages/Order";
import { BottomNavigator } from "../components";
import { SafeAreaView } from "react-native";
import { FoodModel } from "../model/Food";
import { WebViewNavigation } from "react-native-webview";
import { TransactionModel } from "../model/Transaction";

export type RootStackParamList = {
    SplashScreen: undefined
    SignIn: undefined
    SignUp: undefined
    SignUpAddress: undefined
    SignUpSuccess: undefined
    MainApp: undefined
    FoodDetail: { food: FoodModel }
    OrderSummary: { food: FoodModel, orderCount: number }
    SuccessOrder: undefined
    OrderDetail: { transaction: TransactionModel }
    WebView: { title: string, subtitle: string, url: string, onNavigationChange: (event: WebViewNavigation) => void }
};

type TabNavigatorParamList = {
    Home: undefined
    Order: undefined
    Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<TabNavigatorParamList>()

const MainApp = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Order" component={Order} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={{ headerShown: false }} />
            <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="FoodDetail" component={FoodDetail} options={{ headerShown: false }} />
            <Stack.Screen name="OrderSummary" component={OrderSummary} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessOrder" component={SuccessOrder} options={{ headerShown: false }} />
            <Stack.Screen name="OrderDetail" component={OrderDetail} options={{ headerShown: false }} />
            <Stack.Screen name="WebView" component={WebView} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router