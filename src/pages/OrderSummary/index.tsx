import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { Button, ButtonType, FoodOrderSummary, Gap, Header } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserModel } from '../../model'
import { getLocalData, showToastMessage } from '../../utils'
import { useAppDispatch } from '../../hook'
import { checkout } from '../../redux/action/checkoutAction'
import { WebViewNavigation } from 'react-native-webview'

type Props = NativeStackScreenProps<RootStackParamList, 'OrderSummary'>

const OrderSummary = ({ navigation, route }: Props) => {
    const { food, orderCount } = route.params
    const dispatch = useAppDispatch()
    const [user, setUser] = useState<UserModel>()
    const orderedFoodPrice = food.price * orderCount
    const driverCost = 50000
    const tax = 10 / 100 * orderedFoodPrice
    const totalPrice = orderedFoodPrice + driverCost + tax

    useEffect(() => {
        getLocalData('loggedUser').then((res) => {
            setUser(res)
        })
    }, [])

    const onCheckout = async () => {
        try {
            const paymentData = await dispatch(checkout({
                foodID: food.id,
                userID: user?.id ?? 0,
                quantity: orderCount,
                total: totalPrice,
            })).unwrap()
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
                            url: paymentData.data.payment_url,
                        }
                    }]
            })
        }
        catch (error) {
            if (error && typeof error === 'object' && 'message' in error) {
                const errorMessage = error.message;
                showToastMessage(errorMessage as string, 'danger')
            } else {
                showToastMessage('An error occurred', 'danger');
            }
        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.page}>
                <Header title='Payment' subtitle='You deserve better meal' onBack={() => { navigation.pop() }} />
                <ScrollView style={styles.content}>
                    <Gap height={24} />
                    <FoodOrderSummary
                        food={food}
                        orderCount={orderCount}
                        orderedFoodPrice={orderedFoodPrice}
                        driverCost={driverCost}
                        tax={tax}
                        totalPrice={totalPrice}
                        user={user}
                    />
                    <View style={styles.checkoutContainer}>
                        <Button text='Checkout Now' type={ButtonType.Primary} onPress={onCheckout} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FAFAFC'
    },
    content: {
        flex: 1
    },
    checkoutContainer: {
        paddingHorizontal: 24,
        paddingVertical: 24
    },
})