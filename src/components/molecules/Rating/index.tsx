import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcStar, IcStarOff } from '../../../assets'
import { Gap } from '../../atoms'

type Props = {}

const Rating = (props: Props) => {
    return (
        <View style={styles.ratingContainer}>
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStarOff />
            <Gap width={4} />
            <Text style={styles.ratingText}>4.5</Text>
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