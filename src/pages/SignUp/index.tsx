import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonType, Gap, Header, TextInput } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'

type Props = NativeStackScreenProps<RootStackParamList>

const SignUp = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Header title='Sign Up' subtitle='Register and eat' onBack={() => { }} />
            <Gap height={24} />
            <View style={styles.formContainer}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addPhoto}>Add Photo</Text>
                        </View>
                    </View>
                </View>
                <Gap height={16} />
                <TextInput text='Full Name' placeholder='Type your full name' />
                <Gap height={16} />
                <TextInput text='Email Address' placeholder='Type your email address' />
                <Gap height={16} />
                <TextInput text='Password' placeholder='Type your password' />
                <Gap height={16} />
                <Button text='Continue' type={ButtonType.Primary} onPress={() => { navigation.navigate('SignUpAddress') }} />
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: { flex: 1 },
    formContainer: { paddingHorizontal: 24, paddingVertical: 26, backgroundColor: 'white', flex: 1 },
    photo: {
        alignItems: 'center'
    },
    borderPhoto: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: '#8D92A3',
        borderWidth: 1,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#8D92A3',
        textAlign: 'center'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: '#F0F0F0',
        padding: 24,
    },
})