import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { EmptyOrder, Loading } from '../../components'
import OrderTabSection from '../../components/molecules/OrderTabSection'
import { Order as OrderReducer, hasOrder } from '../../redux/slice/order'
import { useAppDispatch, useAppSelector } from '../../hook'
import { RootState } from '../../redux/store'
import { checkHasOrder, fetchOrderInProgress } from '../../redux/action/orderAction'

type Props = {}

const Order = (props: Props) => {
    const hasOrder = useAppSelector((state: RootState) => state.order.hasOrder)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(checkHasOrder())
    }, [])

    const Section = () => {
        if (hasOrder) {
            return <OrderTabSection />
        }
        else {
            return <EmptyOrder />
        }
    }

    return (
        <View style={styles.page}>
            <Section />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})