import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type DetailLabelProps = {
    text: string,
    value: string,
    valueColor?: string
}
const DetailLabel = ({ text, value, valueColor }: DetailLabelProps) => {
    return (
        <View style={styles.detailLabelContainer}>
            <Text style={styles.detailLabelText}>{text}</Text>
            <Text style={[styles.detailLabelValue, { color: valueColor }]}>{value}</Text>
        </View>
    )
}

export default DetailLabel

const styles = StyleSheet.create({
    detailLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 6
    },
    detailLabelText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#8D92A3'
    },
    detailLabelValue: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#020202',
        textAlign: 'right'
    },
})