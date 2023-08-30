import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gap } from '../../atoms'
import { TransactionModel, TransactionStatus } from '../../../model/Transaction'
import formatNumber from '../../../utils/numberFormatter'

type Props = {
    transaction: TransactionModel
    onPress: () => void
}

const FoodListItemPastOrder = ({ transaction, onPress }: Props) => {
    const date = new Date(transaction.createdAt)

    const transactionStatus = () => {
        if (transaction.status == TransactionStatus.delivered) {
            return 'Delivered'
        }
        else {
            return 'Cancelled'
        }
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: transaction.food.picturePath }} style={styles.image} />
                <Gap width={12} />
                <View style={{ flex: 1 }}>
                    <Text style={styles.foodTitle}>{transaction.food.name}</Text>
                    <Text style={styles.foodPrice}>IDR {formatNumber(transaction.total)}</Text>
                </View>
                <View>
                    <Text style={styles.orderDate}>{date.toLocaleDateString()}</Text>
                    <Text style={[styles.orderStatus, { color: transaction.status == TransactionStatus.cancelled ? '#D9435E' : '#1ABC9C' }]}>{transactionStatus()}</Text>
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
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        textAlign: 'right'
    },
})