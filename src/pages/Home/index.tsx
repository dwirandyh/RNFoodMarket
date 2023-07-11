import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions, SafeAreaView } from 'react-native'
import React from 'react'
import { FoodDummy1, FoodDummy2, FoodDummy3, ProfileDummy } from '../../assets'
import { FoodCard } from '../../components'
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState, Route } from 'react-native-tab-view'



const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
);

const renderScene = SceneMap({
    newTaste: FirstRoute,
    popular: SecondRoute,
    recommended: SecondRoute,
});


const renderTabBar = (props: SceneRendererProps & { navigationState: NavigationState<Route> }) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#020202', height: 3, width: '0.1%', marginBottom: -3, marginLeft: 4, }}
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


type Props = {}

const Home = (props: Props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'newTaste', title: 'New Taste' },
        { key: 'popular', title: 'Popular' },
        { key: 'recommended', title: 'Recommended' }
    ]);

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.title}>FoodMarket</Text>
                    <Text style={styles.subtitle}>Let’s get some foods</Text>
                </View>
                <Image source={ProfileDummy} style={styles.photoProfile} />
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer}>
                        <FoodCard image={FoodDummy1} />
                        <FoodCard image={FoodDummy2} />
                        <FoodCard image={FoodDummy3} />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    profileContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 24
    },
    title: {
        color: '#020202',
        fontFamily: 'Poppins-Medium',
        fontSize: 22
    },
    subtitle: {
        color: '#8D92A3',
        fontFamily: 'Poppins-Light',
        fontSize: 14,
    },
    photoProfile: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 24,
    },
    tabContainer: {
        flex: 1,
    }
})