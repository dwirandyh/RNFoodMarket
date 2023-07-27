import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { Button, ButtonType, FoodOrderSummary, Gap, Header } from '../../components'

type Props = NativeStackScreenProps<RootStackParamList>

const OrderSummary = ({ navigation }: Props) => {
    return (
        <View style={styles.page}>
            <Header title='Payment' subtitle='You deserve better meal' onBack={() => { navigation.pop() }} />
            <ScrollView style={styles.content}>
                <Gap height={24} />
                <FoodOrderSummary />
                <View style={styles.checkoutContainer}>
                    <Button text='Checkout Now' type={ButtonType.Primary} onPress={() => { navigation.navigate('SuccessOrder') }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    content: {
        flex: 1
    },
    checkoutContainer: {
        paddingHorizontal: 24,
        paddingVertical: 24
    },
})