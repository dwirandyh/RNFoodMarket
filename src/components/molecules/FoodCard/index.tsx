import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcStar, IcStarOff } from '../../../assets'
import { Gap } from '../../atoms'
import Rating from '../Rating'

type Props = {
    image: ImageSourcePropType,
}

const FoodCard = ({ image }: Props) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.text}>Cherry Healthy</Text>
                <Gap height={6} />
                <Rating />
            </View>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    cardContainer: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden',
        marginRight: 24,
        marginBottom: 24,
    },
    image: {
        width: 200,
        height: 140,
    },
    content: {
        padding: 12
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    ratingText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#8D92A3'
    }
})