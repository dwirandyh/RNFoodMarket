import { StyleSheet, Text, View, Image, ScrollView, useWindowDimensions, SafeAreaView } from 'react-native'
import React from 'react'
import { FoodDummy1, FoodDummy2, FoodDummy3, ProfileDummy } from '../../assets'
import { FoodCard, HomeProfile, HomeTabSection } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'

type Props = NativeStackScreenProps<RootStackParamList>

const Home = (props: Props) => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeProfile />
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodCardContainer}>
                            <FoodCard image={FoodDummy1} />
                            <FoodCard image={FoodDummy2} />
                            <FoodCard image={FoodDummy3} />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <HomeTabSection />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginTop: 24,
        marginLeft: 24,
    },

})