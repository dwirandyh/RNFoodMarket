import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlEmptyOrder, IlSuccessOrder } from '../../../assets'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../router'
import { Button, ButtonType } from '../../atoms'

type Props = {}

const EmptyOrder = () => {
    return (
        <View style={styles.page}>
            <IlEmptyOrder style={styles.icon} />
            <Text style={styles.title}>Ouch! Hungry</Text>
            <Text style={styles.subtitle}>Seems like you have not
                ordered any food yet</Text>
            <Button text='Find Foods' type={ButtonType.Primary} onPress={() => { }} />
        </View>
    )
}

export default EmptyOrder

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