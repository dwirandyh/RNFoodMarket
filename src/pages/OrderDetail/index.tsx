import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonType, DetailLabel, Gap, Header } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { FoodDummy3 } from '../../assets'
import formatNumber from '../../utils/numberFormatter'
import { TransactionStatus } from '../../model/Transaction'
import { showToastMessage } from '../../utils'
import { useAppDispatch } from '../../hook'
import { requestCancelOrder } from '../../redux/action/orderAction'

type Props = NativeStackScreenProps<RootStackParamList, 'OrderDetail'>

const OrderDetail = ({ navigation, route }: Props) => {
    const dispatch = useAppDispatch()

    const { transaction } = route.params
    const user = transaction.user
    const food = transaction.food
    const orderedFoodPrice = food.price * transaction.quantity
    const driverCost = 50000
    const tax = 10 / 100 * orderedFoodPrice
    const totalPrice = orderedFoodPrice + driverCost + tax

    const onCancel = async () => {
        try {
            await dispatch(requestCancelOrder(transaction.id)).unwrap()
            showToastMessage('Order has been cancelled')
            navigation.reset({
                index: 0,
                routes: [{ name: 'MainApp' }]
            })
        } catch (error) {
            if (error && typeof error === 'object' && 'message' in error) {
                const errorMessage = error.message;
                showToastMessage(errorMessage as string, 'danger')
            } else {
                showToastMessage('An error occurred', 'danger');
            }
        }
    }

    const onPayMyOrder = () => {
        console.log(transaction.paymentUrl)
        navigation.reset({
            index: 1, routes: [
                {
                    name: 'MainApp'
                },
                {
                    name: 'WebView',
                    params: {
                        title: 'Payment',
                        subtitle: 'Please complete your payment',
                        url: transaction.paymentUrl,
                    }
                }]
        })
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView style={styles.page}>
                <Header title='Payment' subtitle='You deserve better meal' onBack={() => { navigation.pop() }} />
                <Gap height={24} />
                <View style={styles.container}>
                    <Text style={styles.label}>Item Ordered</Text>
                    <Gap height={12} />
                    <View style={styles.foodContainer}>
                        <Image source={{ uri: food.picturePath }} height={60} width={60} style={styles.foodImage} />
                        <Gap width={12} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.foodTitle}>{food.name}</Text>
                            <Text style={styles.foodPrice}>IDR {food.price}</Text>
                        </View>
                        <Gap width={12} />
                        <Text style={styles.itemLabel}>{transaction.quantity} Items</Text>
                    </View>
                    <Gap height={12} />
                    <Text style={styles.label}>Detail Transaction</Text>
                    <DetailLabel text={food.name} value={'IDR ' + formatNumber(orderedFoodPrice)} />
                    <DetailLabel text='Driver' value='IDR 50.000' />
                    <DetailLabel text='Tax 10%' value={'IDR ' + formatNumber(tax)} />
                    <DetailLabel text='Total Price' value={'IDR ' + formatNumber(totalPrice)} valueColor='#1ABC9C' />
                </View>
                <Gap height={24} />
                <View style={styles.container}>
                    <Text style={styles.label}>Deliver To</Text>
                    <DetailLabel text='Name' value={user.name} />
                    <DetailLabel text='Phone No.' value={user.phoneNumber} />
                    <DetailLabel text='Address' value={user.address} />
                    <DetailLabel text='House No.' value={user.houseNumber} />
                    <DetailLabel text='City' value={user.city} />
                </View>
                <Gap height={24} />
                <View style={styles.container}>
                    <Text style={styles.label}>Order Status:</Text>
                    <DetailLabel text={'#' + transaction.id} value={transaction.status} valueColor={transaction.status == TransactionStatus.cancelled ? '#D9435E' : '#1ABC9C'} />
                </View>
                <Gap height={24} />
                {transaction.status == TransactionStatus.pending &&
                    <View style={styles.buttonContainer}>
                        <Button text='Pay My Order' type={ButtonType.Primary} onPress={onPayMyOrder} />
                        <Gap height={8} />
                        <Button text='Cancel My Order' type={ButtonType.Danger} onPress={onCancel} />
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FAFAFC',
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16
    },
    foodImage: {
        borderRadius: 8,
    },
    foodContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202',
    },
    foodTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202',
    },
    foodPrice: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#8D92A3'
    },
    itemLabel: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#8D92A3',
        textAlign: 'right'
    },
    buttonContainer: {
        paddingHorizontal: 24,
        paddingBottom: 24
    }
})