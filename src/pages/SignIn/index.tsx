import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Button, ButtonType, Gap, Header, TextInput } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'

type Props = NativeStackScreenProps<RootStackParamList>

const SignIn = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Header title='Sign In' subtitle='Find your best ever meal' />
                <Gap height={16} />
                <View style={styles.formContainer}>
                    <TextInput text='Email Address' placeholder='Type your email address' />
                    <Gap height={16} />
                    <TextInput text='Password' placeholder='Type your password' />
                    <Gap height={24} />
                    <Button text='Sign In' type={ButtonType.Primary} onPress={() => { }} />
                    <Gap height={12} />
                    <Button text='Create New Account' type={ButtonType.Secondary} onPress={() => navigation.navigate('SignUp')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: { backgroundColor: '#FAFAFC', flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' },
    formContainer: { backgroundColor: 'white', flex: 1, paddingHorizontal: 24, paddingVertical: 26 }
})