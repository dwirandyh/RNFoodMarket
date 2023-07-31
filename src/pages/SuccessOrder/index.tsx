import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonType, Gap } from '../../components'
import { IlSuccessOrder } from '../../assets'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'

type Props = NativeStackScreenProps<RootStackParamList>

const SuccessOrder = ({ navigation, route, }: Props) => {
    return (
        <View style={styles.page}>
            <IlSuccessOrder style={styles.icon} />
            <Text style={styles.title}>You’ve Made Order</Text>
            <Text style={styles.subtitle}>Just stay at home while we are
                preparing your best foods</Text>
            <Button text='Order Other Foods' type={ButtonType.Primary} onPress={() => { }} />
            <Gap height={14} />
            <Button text='View My Order' type={ButtonType.Secondary} onPress={() => { navigation.replace('MainApp', { screen: 'Order' }) }} />
        </View>
    )
}

export default SuccessOrder

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 80
    },
    icon: {
        width: 200,
        height: 176,
        marginBottom: 30,
    },
    title: {
        color: '#020202',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        marginBottom: 6,
    },
    subtitle: {
        color: '#8D92A3',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginBottom: 30
    }
})