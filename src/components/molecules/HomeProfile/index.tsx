import { StyleSheet, Text, View, Image, ImageURISource, ImageSourcePropType } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProfileDummy } from '../../../assets'
import { getLocalData } from '../../../utils'
import { UserModel } from '../../../model'

type Props = {}

const HomeProfile = (props: Props) => {
    const [photo, setPhoto] = useState<ImageURISource>()

    useEffect(() => {
        getLocalData('loggedUser').then((res) => {
            const user = res as UserModel
            if (user) {
                setPhoto({ uri: user.profilePhotoUrl })
            }
        })

    }, [])

    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.title}>FoodMarket</Text>
                <Text style={styles.subtitle}>Let’s get some foods</Text>
            </View>
            {photo && <Image source={photo} style={styles.photoProfile} />}
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