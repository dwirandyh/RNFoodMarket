import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EmptyOrder } from '../../components'
import OrderTabSection from '../../components/molecules/OrderTabSection'

type Props = {}

const Order = (props: Props) => {
    // return (
    //     <View style={styles.page}>
    //         <EmptyOrder />
    //     </View>
    // )

    return (
        <View style={styles.page}>
            <OrderTabSection />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})