import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState, Route } from 'react-native-tab-view'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../router';
import ItemListMenu from '../ItemListMenu';


type navigationProp = NativeStackNavigationProp<RootStackParamList>

const Account = () => {
    const navigation = useNavigation<navigationProp>()
    return (
        <View style={styles.tabItemContainer}>
            <ItemListMenu text='Edit Profile' />
            <ItemListMenu text='Home Address' />
            <ItemListMenu text='Security' />
            <ItemListMenu text='Payments' />
        </View>
    )
}

const FoodMarket = () => {
    const navigation = useNavigation<navigationProp>()
    return (
        <View style={styles.tabItemContainer}>
            <ItemListMenu text='Rate App' />
            <ItemListMenu text='Help Center' />
            <ItemListMenu text='Privacy & Policy' />
            <ItemListMenu text='Terms & Conditions' />
        </View>
    )
};

const renderScene = SceneMap({
    account: Account,
    foodmarket: FoodMarket,
});

const renderTabBar = (props: SceneRendererProps & { navigationState: NavigationState<Route> }) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#020202', height: 3, width: '0.2%', marginBottom: -3, marginLeft: 4, }}
        style={{
            backgroundColor: 'white', borderBottomColor: '#F2F2F2',
            borderBottomWidth: 1,
        }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: focused ? '#020202' : '#8D92A3' }}>
                    {route.title}
                </Text>
            </View>

        )}
    />
);

type Props = {

}

const ProfileTabSection = (props: Props) => {

    const layout = useWindowDimensions()

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'account', title: 'Account' },
        { key: 'foodmarket', title: 'FoodMarket' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }
            }
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{ width: layout.width }}
            style={{ height: 360 }}
        />
    )
}

export default ProfileTabSection

const styles = StyleSheet.create({
    tabItemContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 12
    }
})