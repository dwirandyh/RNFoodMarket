import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabView, SceneMap, TabBar, SceneRendererProps, NavigationState, Route } from 'react-native-tab-view'
import FoodListItem from '../FoodListItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../router';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { RootState } from '../../../redux/store';
import { FoodModel } from '../../../model/Food';
import { fetchFoodByType } from '../../../redux/action/foodAction';
import { FoodType } from '../../../redux/slice/food';


type navigationProp = NativeStackNavigationProp<RootStackParamList>

const NewTeste = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<navigationProp>()
    const foods: Array<FoodModel> = useAppSelector((state: RootState) => state.food.newTaste)

    useEffect(() => {
        dispatch(fetchFoodByType(FoodType.newTaste)).unwrap()
    }, [])

    return (
        <View style={styles.tabItemContainer}>
            {
                foods.map((item: FoodModel) => {
                    return <FoodListItem key={item.id} name={item.name} image={item.picturePath} rating={item.rate} price={item.price} onPress={() => { navigation.navigate('FoodDetail', { food: item }) }} />
                })
            }
        </View>
    )
}

const Popular = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<navigationProp>()
    const foods: Array<FoodModel> = useAppSelector((state: RootState) => state.food.popular)

    useEffect(() => {
        dispatch(fetchFoodByType(FoodType.popular)).unwrap()
    }, [])

    return (
        <View style={styles.tabItemContainer}>
            {
                foods.map((item: FoodModel) => {
                    return <FoodListItem key={item.id} name={item.name} image={item.picturePath} rating={item.rate} price={item.price} onPress={() => { navigation.navigate('FoodDetail', { food: item }) }} />
                })
            }
        </View>
    )
}

const Recommended = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<navigationProp>()
    const foods: Array<FoodModel> = useAppSelector((state: RootState) => state.food.recommended)

    useEffect(() => {
        dispatch(fetchFoodByType(FoodType.recommeded)).unwrap()
    }, [])

    return (
        <View style={styles.tabItemContainer}>
            {
                foods.map((item: FoodModel) => {
                    return <FoodListItem key={item.id} name={item.name} image={item.picturePath} rating={item.rate} price={item.price} onPress={() => { navigation.navigate('FoodDetail', { food: item }) }} />
                })
            }
        </View>
    )
}

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

type Props = {

}

const HomeTabSection = (props: Props) => {

    const layout = useWindowDimensions()

    const [index, setIndex] = useState(0)
    const [routes] = useState([
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
            style={{ height: 360 }}
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