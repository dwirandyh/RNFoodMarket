import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'Secondary'
}

type Props = {
    text: string,
    type: ButtonType,
    onPress: () => void
}

const Button = (props: Props) => {
    const { text, type, onPress } = props
    const containerStyle = type === ButtonType.Primary ? styles.primaryContainer : styles.secondaryContainer
    const textStyle = type === ButtonType.Primary ? styles.primaryText : styles.secondaryContainer

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
                <Text style={[styles.text, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: { padding: 12, backgroundColor: '#FFC700', borderRadius: 8 },
    primaryContainer: { backgroundColor: '#FFC700' },
    secondaryContainer: { backgroundColor: '#8D92A3' },
    text: { fontSize: 14, fontFamily: 'Poppins-Medium', textAlign: 'center', color: 'white' },
    primaryText: { color: '#020202' },
    secondaryText: { color: 'white' }
})