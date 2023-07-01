import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from "../../assets";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../router';

type Props = NativeStackScreenProps<RootStackParamList>

const SplashScreen = (props: Props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace('SignIn')
        }, 2000)
    })

    return (
        <View style={{ backgroundColor: "#FFC700", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Logo />
            <View style={{ height: 30 }} />
            <Text style={{ fontSize: 32, textAlign: 'center', color: '#020202', fontFamily: 'Poppins-Medium' }}>FoodMarket</Text>
        </View>
    )
}

export default SplashScreen