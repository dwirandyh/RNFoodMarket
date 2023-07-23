import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FoodDummy1, IcBackWhite, IcButtonMinus, IcButtonPlus } from '../../assets'
import { Button, ButtonType, Gap, Rating } from '../../components'

type Props = {}

const FoodDetail = (props: Props) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={FoodDummy1} style={styles.cover}>
                <IcBackWhite />
            </ImageBackground>
            <View style={styles.foodContainer}>
                <View style={styles.mainContent}>
                    <View style={styles.titleContainer}>
                        <View>
                            <Text style={styles.foodTitle}>Cherry Healthy</Text>
                            <Gap height={6} />
                            <Rating />
                        </View>
                        <View style={styles.chartCountContainer}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <IcButtonPlus />
                            </TouchableOpacity>
                            <Gap width={10} />
                            <Text style={styles.chartCount}>14</Text>
                            <Gap width={10} />
                            <TouchableOpacity activeOpacity={0.7}>
                                <IcButtonMinus />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Gap height={14} />
                    <Text style={styles.contentDescription}>
                        Makanan khas Bandung yang cukup sering
                        dipesan oleh anak muda dengan pola makan
                        yang cukup tinggi dengan mengutamakan
                        diet yang sehat dan teratur.
                    </Text>
                    <Gap height={16} />
                    <Text>
                        Ingredients:
                    </Text>
                    <Gap height={4} />
                    <Text style={styles.contentDescription}>
                        Seledri, telur, blueberry, madu.
                    </Text>
                </View>
                <View>
                    <View style={styles.orderContainer}>
                        <View>
                            <Text style={styles.priceTitle}>Total Price:</Text>
                            <Text style={styles.price}>IDR 12.289.000</Text>
                        </View>
                        <View style={styles.orderButton}>
                            <Button text='Order Now' type={ButtonType.Primary} onPress={() => { }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    cover: {
        height: 330,
        paddingTop: 28,
        paddingLeft: 20
    },
    foodContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: -14,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        padding: 16,
    },
    mainContent: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    foodTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202'
    },
    chartCountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    chartCount: {
        color: '#020202',
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    contentDescription: {
        color: '#8D92A3',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 24
    },
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceTitle: {
        color: '#8D92A3',
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
    },
    price: {
        color: '#020202',
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
    },
    orderButton: {
        width: 163,
    }
})