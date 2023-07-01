import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcBack } from '../../../assets'
import { Gap } from '../../atoms'

type Props = {
    title: string,
    subtitle: string
    onBack?: () => void
}

const Header = ({ title, subtitle, onBack }: Props) => {
    return (
        <View style={styles.containter}>
            {onBack && (
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.back}>
                        <IcBack />
                    </View>
                </TouchableOpacity>
            )}

            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containter: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: { fontSize: 22, fontFamily: "Poppins-Medium", color: "#020202" },
    subtitle: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3' },
    back: { marginRight: 24 }
})