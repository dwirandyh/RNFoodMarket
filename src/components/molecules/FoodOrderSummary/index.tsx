import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy2 } from '../../../assets'
import { DetailLabel, Gap } from '../../atoms'
import { FoodModel } from '../../../model/Food'
import formatNumber from '../../../utils/numberFormatter'
import { UserModel } from '../../../model'

type Props = {
    food: FoodModel,
    orderCount: number,
    orderedFoodPrice: number,
    driverCost: number,
    tax: number,
    totalPrice: number,
    user?: UserModel
}

const FoodOrderSummary = ({ food, orderCount, orderedFoodPrice, driverCost, tax, totalPrice, user }: Props) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Item Ordered</Text>
                <Gap height={12} />
                <View style={styles.foodContainer}>
                    <Image source={{ uri: food.picturePath }} height={60} width={60} style={styles.foodImage} />
                    <Gap width={12} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.foodTitle}>{food.name}</Text>
                        <Text style={styles.foodPrice}>IDR {formatNumber(food.price)}</Text>
                    </View>
                    <Gap width={12} />
                    <Text style={styles.itemLabel}>{orderCount} Items</Text>
                </View>
                <Gap height={12} />
                <Text style={styles.label}>Detail Transaction</Text>
                <DetailLabel text={food.name} value={'IDR ' + formatNumber(orderedFoodPrice)} />
                <DetailLabel text='Driver' value={'IDR ' + formatNumber(driverCost)} />
                <DetailLabel text='Tax 10%' value={'IDR ' + formatNumber(tax)} />
                <DetailLabel text='Total Price' value={'IDR ' + formatNumber(totalPrice)} valueColor='#1ABC9C' />
            </View>
            <Gap height={24} />
            <View style={styles.container}>
                <Text style={styles.label}>Deliver To</Text>
                <DetailLabel text='Name' value={user?.name ?? ""} />
                <DetailLabel text='Phone No.' value={user?.phoneNumber ?? ""} />
                <DetailLabel text='Address' value={user?.address ?? ""} />
                <DetailLabel text='House No.' value={user?.houseNumber ?? ""} />
                <DetailLabel text='City' value={user?.city ?? ""} />
            </View>
        </View>
    )
}

export default FoodOrderSummary

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16
    },
    foodImage: {
        borderRadius: 8,
    },
    foodContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202',
    },
    foodTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202',
    },
    foodPrice: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#8D92A3'
    },
    itemLabel: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#8D92A3',
        textAlign: 'right'
    },
})