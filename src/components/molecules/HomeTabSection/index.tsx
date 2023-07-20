import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState, Route } from 'react-native-tab-view'
import FoodListItem from '../FoodListItem';
import FirstRoute from '../FirstTabRoute';



const NewTeste = React.forwardRef(({ route }: any, ref) => {
    var contentHeight: number = 0

    const handleLayout = (event: any) => {
        if (event) {
            const { height } = event.nativeEvent.layout;
            contentHeight = height
            route.onHeightUpdate(height)
        }
        else if (contentHeight > 0) {
            route.onHeightUpdate(contentHeight)
        }
    };

    React.useImperativeHandle(route.ref, () => ({
        handleLayout,
    }));

    return (
        <View style={styles.tabItemContainer} onLayout={handleLayout} >
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
        </View >)
})

const Popular = React.forwardRef(({ route }: any, ref) => {
    var contentHeight: number = 0

    const handleLayout = (event: any) => {
        if (event) {
            const { height } = event.nativeEvent.layout;
            contentHeight = height
            route.onHeightUpdate(height)
        }
        else if (contentHeight > 0) {
            route.onHeightUpdate(contentHeight)
        }
    };

    React.useImperativeHandle(route.ref, () => ({
        handleLayout,
    }));

    return (
        <View style={styles.tabItemContainer} onLayout={handleLayout} >
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
        </View >)
})

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

    const [tabHeight, setTabHeight] = useState(80)
    const updateTabHeight = (newValue: number) => {
        const finalTabHeight = 50 + newValue
        console.log("updateTabHeight " + finalTabHeight)
        setTabHeight(finalTabHeight)
    }

    const firstRouteRef = useRef<any>(null);
    const secondRouteRef = useRef<any>(null);

    const [routes] = React.useState([
        { key: 'newTaste', title: 'New Taste', onHeightUpdate: updateTabHeight, ref: firstRouteRef },
        { key: 'popular', title: 'Popular', onHeightUpdate: updateTabHeight, ref: secondRouteRef },
        { key: 'recommended', title: 'Recommended' }
    ]);

    const handleIndexChange = (index: number) => {
        setIndex(index)

        console.log(index)
        if (index === 0) {
            firstRouteRef.current.handleLayout()
        }
        else if (index === 1) {
            secondRouteRef.current.handleLayout()
        }
    }

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            renderTabBar={renderTabBar}
            initialLayout={{ width: layout.width }}
            style={{ height: tabHeight }}
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