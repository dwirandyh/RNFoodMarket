import { LayoutChangeEvent, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Gap } from '../../atoms'
import { NavigationState, Route, SceneMap, SceneRendererProps, TabBar, TabView } from 'react-native-tab-view'
import FoodListItem from '../FoodListItem'
import FoodListItemInProgress from '../FoodListItemInProgress'
import FoodListItemPastOrder from '../FoodListItemPastOrder'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../router'
import { useAppDispatch, useAppSelector } from '../../../hook'
import { fetchOrderInProgress, fetchPastOrders } from '../../../redux/action/orderAction'

type navigationProp = NativeStackNavigationProp<RootStackParamList>

const OrderInProgress = () => {
    const navigation = useNavigation<navigationProp>()
    const inProgress = useAppSelector((state) => state.order.inProgress)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchOrderInProgress()).unwrap()
    }, [])

    return (
        <ScrollView style={styles.tabItemScrollView}>
            <View style={styles.tabItemContainer}>
                {inProgress.map((item) => {
                    return <FoodListItemInProgress key={item.id} transaction={item} onPress={() => { navigation.navigate('OrderDetail', { transaction: item }) }} />
                })}
            </View>
        </ScrollView>
    )
}

const PastOrders = () => {
    const navigation = useNavigation<navigationProp>()
    const pastOrders = useAppSelector((state) => state.order.pastOrders)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPastOrders()).unwrap()
    }, [])

    return (
        <ScrollView style={styles.tabItemScrollView}>
            <View style={styles.tabItemContainer}>
                {pastOrders.map((item) => {
                    return <FoodListItemPastOrder key={item.id} transaction={item} onPress={() => { navigation.navigate('OrderDetail', { transaction: item }) }} />
                })}
            </View>
        </ScrollView>
    )
}

const renderScene = SceneMap({
    orderInProgress: OrderInProgress,
    pastOrders: PastOrders,
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


type Props = {}

const OrderTabSection = (props: Props) => {

    const layout = useWindowDimensions()

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: "orderInProgress", title: 'In Progress' },
        { key: 'pastOrders', title: 'Past Orders' }
    ])

    const [tabHeight, setTabHeight] = useState(0)

    const getTabViewHeight = (event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout
        setTabHeight(height)
    }

    return (
        <View style={styles.page}>
            <Header title='Your Orders' subtitle='Wait for the best meal' />
            <Gap height={24} />
            <View
                style={styles.tabContainer}
                onLayout={getTabViewHeight}
            >
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    initialLayout={{ width: layout.width }}
                    style={{ height: tabHeight }}
                />
            </View>
        </View>
    )
}

export default OrderTabSection

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    tabContainer: {
        flex: 1
    },
    tabItemScrollView: {
        backgroundColor: 'white',
    },
    tabItemContainer: {
        paddingTop: 24,
        paddingHorizontal: 24
    }
})