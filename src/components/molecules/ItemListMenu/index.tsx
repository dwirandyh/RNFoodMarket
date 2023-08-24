import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcChevronRight } from '../../../assets'

type Props = {
    text: string
    onPress?: () => void
}

const ItemListMenu = ({ text, onPress }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Text>{text}</Text>
                <IcChevronRight />
            </View>
        </TouchableOpacity>
    )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        justifyContent: 'space-between'
    }
})