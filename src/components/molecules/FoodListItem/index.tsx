import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy1, IcStar, IcStarOff } from '../../../assets'
import { Gap } from '../../atoms'
import Rating from '../Rating'

type Props = {}

const FoodListItem = (props: Props) => {
    return (
        <View style={styles.container}>
            <Image source={FoodDummy1} style={styles.image} />
            <Gap width={12} />
            <View style={{ flex: 1 }}>
                <Text style={styles.foodTitle}>Soup Bumil</Text>
                <Text style={styles.foodPrice}>IDR 289.000</Text>
            </View>
            <Rating />
        </View>
    )
}

export default FoodListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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