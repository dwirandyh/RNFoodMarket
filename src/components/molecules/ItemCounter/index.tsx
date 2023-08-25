import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IcButtonMinus, IcButtonPlus } from '../../../assets'
import { Gap } from '../../atoms'

type Props = {
    onValueChange: (value: number) => void
}

const ItemCounter = ({ onValueChange }: Props) => {
    const [count, setCount] = useState(1)

    const add = () => {
        const value = count + 1
        setCount(value)
        onValueChange(value)
    }

    const min = () => {
        if (count > 1) {
            const value = count - 1
            setCount(value)
            onValueChange(value)
        }
    }

    return (
        <View style={styles.chartCountContainer}>
            <TouchableOpacity activeOpacity={0.7} onPress={min}>
                <IcButtonMinus />
            </TouchableOpacity>
            <Gap width={10} />
            <Text style={styles.chartCount}>{count}</Text>
            <Gap width={10} />
            <TouchableOpacity activeOpacity={0.7} onPress={add}>
                <IcButtonPlus />
            </TouchableOpacity>
        </View>
    )
}

export default ItemCounter

const styles = StyleSheet.create({
    chartCountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    chartCount: {
        color: '#020202',
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
})