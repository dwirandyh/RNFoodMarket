import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
    Danger = 'danger', // Added the 'Danger' button type
}

type Props = {
    text: string,
    type: ButtonType,
    onPress: () => void,
};

const Button = (props: Props) => {
    const { text, type, onPress } = props;
    const containerStyle = type === ButtonType.Primary ? styles.primaryContainer : type === ButtonType.Danger ? styles.dangerContainer : styles.secondaryContainer;
    const textStyle = type === ButtonType.Primary ? styles.primaryText : type === ButtonType.Danger ? styles.dangerText : styles.secondaryText;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
                <Text style={[styles.text, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: { padding: 12, borderRadius: 8 },
    primaryContainer: { backgroundColor: '#FFC700' },
    secondaryContainer: { backgroundColor: '#8D92A3' },
    dangerContainer: { backgroundColor: '#D9435E' }, // Styling for the Danger button
    text: { fontSize: 14, fontFamily: 'Poppins-Medium', textAlign: 'center', color: 'white' },
    primaryText: { color: '#020202' },
    secondaryText: { color: 'white' },
    dangerText: { color: 'white' }, // Text color for the Danger button
});
