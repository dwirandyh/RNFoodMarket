import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcStar, IcStarOff } from '../../../assets'
import { Gap } from '../../atoms'

type Props = {
    rating: number
}

const Rating = ({ rating }: Props) => {
    const renderStar = () => {
        var stars = []
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<IcStar key={i} />)
            }
            else {
                stars.push(<IcStarOff key={i} />)
            }
        }
        return stars
    }
    return (
        <View style={styles.ratingContainer}>
            {renderStar()}
            <Gap width={4} />
            <Text style={styles.ratingText}>{rating}</Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
    },
    ratingText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#8D92A3'
    }
})