import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState, Route } from 'react-native-tab-view'
import FoodListItem from '../FoodListItem';



const NewTeste = () => (
    <View style={styles.tabItemContainer}>
        <FoodListItem />
        <FoodListItem />
        <FoodListItem />
        <FoodListItem />
    </View>
);

const Popular = () => (
    <View style={styles.tabItemContainer}>

    </View>
);

const Recommended = () => (
    <View style={styles.tabItemContainer}>

    </View>
);

const renderScene = SceneMap({
    newTaste: NewTeste,
    popular: Popular,
    recommended: Recommended,
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

const HomeTabSection = (props: Props) => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'newTaste', title: 'New Taste' },
        { key: 'popular', title: 'Popular' },
        { key: 'recommended', title: 'Recommended' }
    ]);

    return (
        <TabView
            navigationState={{ index, routes }
            }
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            initialLayout={{ width: layout.width }}
            style={{ height: 100 }}
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({
    tabItemContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 17
    }
})