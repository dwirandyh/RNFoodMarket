import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FoodDummy1, IcStar, IcStarOff } from '../../../assets'
import { Gap } from '../../atoms'
import Rating from '../Rating'

type Props = {
    onPress: () => void
}

const FoodListItemPastOrder = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={FoodDummy1} style={styles.image} />
                <Gap width={12} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.foodTitle}>Soup Bumil</Text>
                    <Text style={styles.foodPrice}>IDR 289.000</Text>
                </View>
                <View>
                    <Text style={styles.orderDate}>Jun 12, 14:00</Text>
                    <Text style={styles.orderStatus}>Cancelled</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodListItemPastOrder

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8
    },
    foodTitle: {
        color: '#020202',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
    foodPrice: {
        color: '#8D92A3',
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
    },
    orderDate: {
        color: '#8D92A3',
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        textAlign: 'right'
    },
    orderStatus: {
        color: '#D9435E',
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        textAlign: 'right'
    },
})