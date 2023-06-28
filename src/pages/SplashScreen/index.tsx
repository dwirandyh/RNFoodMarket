import React from "react";
import { Text, View } from "react-native";
import { Logo } from "../../assets";

function SplashScreen(): JSX.Element {
    return (
        <View style={{ backgroundColor: "#FFC700", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Logo />
            <View style={{ height: 30 }} />
            <Text style={{ fontSize: 32, textAlign: 'center', color: '#020202', fontFamily: 'Poppins-Medium' }}>FoodMarket</Text>
        </View>
    );
}

export default SplashScreen;