import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FoodDummy1, IcStar, IcStarOff } from '../../../assets'
import { Gap } from '../../atoms'
import Rating from '../Rating'
import { FoodModel } from '../../../model/Food'
import { TransactionModel, TransactionStatus } from '../../../model/Transaction'
import formatNumber from '../../../utils/numberFormatter'

type Props = {
    transaction: TransactionModel
    onPress: () => void
}

const FoodListItemInProgress = ({ transaction, onPress }: Props) => {
    const date = new Date(transaction.createdAt)

    const transactionStatus = () => {
        switch (transaction.status) {
            case TransactionStatus.pending:
                return {
                    status: "Pending",
                    color: "#8D92A3"
                }
            case TransactionStatus.success:
                return {
                    status: "Success",
                    color: "#1ABC9C"
                }
            case TransactionStatus.onDelivery:
                return {
                    status: "On Delivery",
                    color: "#FFC700"
                }
        }
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: transaction.food.picturePath }} style={styles.image} />
                <Gap width={12} />
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.foodTitle}>{transaction.food.name}</Text>
                        <View>
                            <Text style={styles.foodPrice}>{transaction.quantity} items • IDR {formatNumber(transaction.total)}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.orderDate}>{date.toLocaleDateString()}</Text>
                        <Text style={[styles.orderStatus, { color: transactionStatus()?.color }]}>{transactionStatus()?.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodListItemInProgress

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