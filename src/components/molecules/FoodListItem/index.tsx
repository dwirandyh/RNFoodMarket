import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FoodDummy1, IcStar, IcStarOff } from '../../../assets'
import { Gap } from '../../atoms'
import Rating from '../Rating'
import formatNumber from '../../../utils/numberFormatter'

type Props = {
    image: string,
    name: string,
    price: number,
    rating: number,
    onPress: () => void
}

const FoodListItem = ({ image, name, price, rating, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <Gap width={12} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.foodTitle}>{name}</Text>
                    <Text style={styles.foodPrice}>IDR {formatNumber(price)}</Text>
                </View>
                <Rating rating={rating} />
            </View>
        </TouchableOpacity>
    )
}

export default FoodListItem

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
    }
})