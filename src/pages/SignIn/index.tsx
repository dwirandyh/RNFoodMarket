import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { Button, ButtonType, Gap, Header, TextInput } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { showToastMessage, useForm } from '../../utils'
import { requestLogin } from '../../redux/action/authAction'
import { useAppDispatch } from '../../hook'

interface FormValues {
    email: string
    password: string
}

type Props = NativeStackScreenProps<RootStackParamList>

const SignIn = ({ navigation }: Props) => {
    const [form, updateForm, resetForm] = useForm<FormValues>({ email: '', password: '' })
    const dispatch = useAppDispatch()

    const onSubmit = async () => {
        try {
            await dispatch(requestLogin({ email: form.email, password: form.password })).unwrap()
            navigation.navigate('MainApp')
        } catch (error) {
            if (error && typeof error === 'object' && 'message' in error) {
                const errorMessage = error.message;
                showToastMessage(errorMessage as string, 'danger')
            } else {
                showToastMessage('An error occurred', 'danger');
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Header title='Sign In' subtitle='Find your best ever meal' />
                <Gap height={16} />
                <View style={styles.formContainer}>
                    <TextInput
                        text='Email Address'
                        placeholder='Type your email address'
                        value={form['email']}
                        onChangeText={(value) => updateForm('email', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        text='Password'
                        placeholder='Type your password'
                        secureTextEntry={true}
                        value={form['password']}
                        onChangeText={(value) => updateForm('password', value)}
                    />
                    <Gap height={24} />
                    <Button text='Sign In' type={ButtonType.Primary} onPress={onSubmit} />
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