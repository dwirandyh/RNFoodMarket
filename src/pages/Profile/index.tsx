import { Image, ImageURISource, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProfileDummy } from '../../assets'
import { Gap, ProfileTabSection } from '../../components'
import { getLocalData } from '../../utils'
import { UserModel } from '../../model'

type Props = {}

const Profile = (props: Props) => {
    const [photo, setPhoto] = useState<ImageURISource>()
    const [user, setUser] = useState<UserModel>()

    useEffect(() => {
        getLocalData('loggedUser').then((res) => {
            const user = res as UserModel
            if (user) {
                setUser(user)
                setPhoto({ uri: user.profilePhotoUrl })
            }
        })

    }, [])

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.profileSection}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <Image source={photo ? photo : ProfileDummy} style={styles.photoContainer} />
                    </View>
                </View>
                <Gap height={16} />
                <Text style={styles.name}>{user?.name}</Text>
                <Gap height={6} />
                <Text style={styles.email}>{user?.email}</Text>
            </View>
            <Gap height={24} />
            <ProfileTabSection />
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    profileSection: {
        backgroundColor: 'white',
        padding: 26
    },
    photo: {
        alignItems: 'center'
    },
    borderPhoto: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: '#8D92A3',
        borderWidth: 1,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#F0F0F0',
        padding: 24,
    },
    photoProfile: {
        width: 90,
        height: 90
    },
    name: {
        textAlign: 'center',
        color: '#020202',
        fontSize: 18,
        fontFamily: 'Poppins-Medium'
    },
    email: {
        color: '#8D92A3',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    }
})