import { StyleSheet, Text, View, TextInput as RNTextInput } from 'react-native'
import React from 'react'

type Props = {
    text: string,
    placeholder: string
}

const TextInput = (props: Props) => {
    const { text, placeholder } = props
    return (
        <View>
            <Text>{text}</Text>
            <View style={{ height: 6 }} />
            <RNTextInput style={styles.textInput} placeholder={placeholder} />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    textInput: { paddingHorizontal: 10, paddingVertical: 10, borderColor: '#020202', borderWidth: 1, borderRadius: 8 }
})