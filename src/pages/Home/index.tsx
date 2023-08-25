import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { FoodDummy1, FoodDummy2, FoodDummy3, ProfileDummy } from '../../assets'
import { Button, ButtonType, FoodCard, HomeProfile, HomeTabSection } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { useAppDispatch, useAppSelector } from '../../hook'
import { RootState } from '../../redux/store'
import { Food, FoodType } from '../../redux/slice/food'
import { fetchHighlightedFood } from '../../redux/action/foodAction'
import { FoodModel } from '../../model/Food'
import FoodListItem from '../../components/molecules/FoodListItem'

type Props = NativeStackScreenProps<RootStackParamList>

const Home = ({ navigation }: Props) => {
    const food: Food = useAppSelector((state: RootState) => state.food)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchHighlightedFood()).unwrap()
    }, [])

    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeProfile />
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodCardContainer}>
                            {
                                food.highlightedFood.map((item: FoodModel) => {
                                    return <FoodCard key={item.id} title={item.name} rating={item.rate} image={{ uri: item.picturePath }} onPress={() => navigation.navigate('FoodDetail', { food: item })} />
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <HomeTabSection />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 24,
    },

})