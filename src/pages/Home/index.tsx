import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FoodDummy1, FoodDummy2, FoodDummy3, ProfileDummy } from '../../assets'
import { FoodCard } from '../../components'

type Props = {}

const Home = (props: Props) => {
    return (
        <SafeAreaView>
            <View>
                <View style={styles.profileContainer}>
                    <View>
                        <Text style={styles.title}>FoodMarket</Text>
                        <Text style={styles.subtitle}>Let’s get some foods</Text>
                    </View>
                    <Image source={ProfileDummy} style={styles.photoProfile} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer}>
                        <FoodCard image={FoodDummy1} />
                        <FoodCard image={FoodDummy2} />
                        <FoodCard image={FoodDummy3} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    profileContainer: {
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
    foodCardContainer: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 24,
    }
})