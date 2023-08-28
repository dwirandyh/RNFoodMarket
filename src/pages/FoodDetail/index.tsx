import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FoodDummy1, IcBackWhite, IcButtonMinus, IcButtonPlus } from '../../assets'
import { Button, ButtonType, Gap, ItemCounter, Rating } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { FoodModel } from '../../model/Food'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import formatNumber from '../../utils/numberFormatter'

type Props = NativeStackScreenProps<RootStackParamList, 'FoodDetail'>

const FoodDetail = ({ navigation, route }: Props) => {
    const food: FoodModel = route.params.food
    const [totalPrice, setTotalPrice] = useState(food.price)
    const [orderCount, setOrderCount] = useState(1)
    const insets = useSafeAreaInsets()

    const onCounterChange = (value: number) => {
        setOrderCount(value)
        setTotalPrice(food.price * value)
    }

    return (
        <SafeAreaView style={styles.page} edges={['bottom', 'left', 'right']}>
            <ImageBackground source={{ uri: food.picturePath }} style={styles.cover}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.pop() }} style={{ marginTop: insets.top + 16 }}>
                    <IcBackWhite />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.foodContainer}>
                <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.titleContainer}>
                        <View>
                            <Text style={styles.foodTitle}>{food.name}</Text>
                            <Gap height={6} />
                            <Rating rating={food.rate} />
                        </View>
                        <ItemCounter onValueChange={onCounterChange} />
                    </View>
                    <Gap height={14} />
                    <Text style={styles.contentDescription}>{food.description}</Text>
                    <Gap height={16} />
                    <Text>
                        Ingredients:
                    </Text>
                    <Gap height={4} />
                    <Text style={styles.contentDescription}>
                        {food.ingredients}
                    </Text>
                </ScrollView>
                <View>
                    <View style={styles.orderContainer}>
                        <View>
                            <Text style={styles.priceTitle}>Total Price:</Text>
                            <Text style={styles.price}>IDR {formatNumber(totalPrice)}</Text>
                        </View>
                        <View style={styles.orderButton}>
                            <Button text='Order Now' type={ButtonType.Primary} onPress={() => { navigation.navigate('OrderSummary', { food: food, orderCount: orderCount }) }} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    cover: {
        height: 330,
        paddingLeft: 20
    },
    foodContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: -14,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        padding: 16,
    },
    mainContent: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202'
    },
    contentDescription: {
        color: '#8D92A3',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 24
    },
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceTitle: {
        color: '#8D92A3',
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
    },
    price: {
        color: '#020202',
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
    },
    orderButton: {
        width: 163,
    }
})