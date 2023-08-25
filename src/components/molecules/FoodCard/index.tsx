import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gap } from '../../atoms'
import Rating from '../Rating'

type Props = {
    title: string,
    rating: number,
    image: ImageSourcePropType,
    onPress: () => void
}

const FoodCard = ({ title, rating, image, onPress }: Props) => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <Image source={image} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.text}>{title}</Text>
                    <Gap height={6} />
                    <Rating rating={rating} />
                </View>
            </TouchableOpacity>
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