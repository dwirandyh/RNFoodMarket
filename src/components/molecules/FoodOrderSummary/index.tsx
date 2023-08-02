import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy2 } from '../../../assets'
import { Button, ButtonType, DetailLabel, Gap } from '../../atoms'

type Props = {}

const FoodOrderSummary = (props: Props) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Item Ordered</Text>
                <Gap height={12} />
                <View style={styles.foodContainer}>
                    <Image source={FoodDummy2} height={60} width={60} style={styles.foodImage} />
                    <Gap width={12} />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.foodTitle}>Cherry Healthy</Text>
                        <Text style={styles.foodPrice}>IDR 289.000</Text>
                    </View>
                    <Gap width={12} />
                    <Text style={styles.itemLabel}>14 Items</Text>
                </View>
                <Gap height={12} />
                <Text style={styles.label}>Detail Transaction</Text>
                <DetailLabel text='Cherry Healthy' value='IDR 18.390.000' />
                <DetailLabel text='Driver' value='IDR 50.000' />
                <DetailLabel text='Tax 10%' value='IDR 1.800.390' />
                <DetailLabel text='Total Price' value='IDR 390.803.000' valueColor='#1ABC9C' />
            </View>
            <Gap height={24} />
            <View style={styles.container}>
                <Text style={styles.label}>Deliver To</Text>
                <DetailLabel text='Name' value='Dwi Randy' />
                <DetailLabel text='Phone No.' value='0822 0819 9688' />
                <DetailLabel text='Address' value='Setra Duta Palima' />
                <DetailLabel text='House No.' value='A5 Hook' />
                <DetailLabel text='City' value='Bandung' />
            </View>
        </View>
    )
}

export default FoodOrderSummary

const styles = StyleSheet.create({
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
})