import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    subtitle: string
}

const Header = (props: Props) => {
    const { title, subtitle } = props
    return (
        <View style={styles.containter}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containter: { backgroundColor: 'white', paddingHorizontal: 24, paddingTop: 30, paddingBottom: 24 },
    title: { fontSize: 22, fontFamily: "Poppins-Medium", color: "#020202" },
    subtitle: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3' }
})