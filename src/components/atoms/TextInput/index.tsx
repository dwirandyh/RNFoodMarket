import { StyleSheet, Text, View, TextInput as RNTextInput, TextInputProps } from 'react-native'
import React, { ComponentPropsWithoutRef } from 'react'

type Props = {
    text: string,
    placeholder: string
} & TextInputProps

const TextInput = ({ text, placeholder, ...restProps }: Props) => {
    return (
        <View>
            <Text>{text}</Text>
            <View style={{ height: 6 }} />
            <RNTextInput style={styles.textInput} {...restProps} />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    textInput: { paddingHorizontal: 10, paddingVertical: 10, borderColor: '#020202', borderWidth: 1, borderRadius: 8 }
})