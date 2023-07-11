import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ProfileDummy } from '../../../assets'

type Props = {}

const HomeProfile = (props: Props) => {
    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.title}>FoodMarket</Text>
                <Text style={styles.subtitle}>Let’s get some foods</Text>
            </View>
            <Image source={ProfileDummy} style={styles.photoProfile} />
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 24
    },
    title: {
        color: '#020202',
        fontFamily: 'Poppins-Medium',
        fontSize: 22
    },
    subtitle: {
        color: '#8D92A3',
        fontFamily: 'Poppins-Light',
        fontSize: 14,
    },
    photoProfile: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
})