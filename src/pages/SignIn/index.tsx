import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { Button, ButtonType, Gap, Header, TextInput } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { useForm } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState, hideError, setError } from '../../redux/slice/global'
import { RootState } from '../../redux/store'

interface FormValues {
    email: string
    password: string
}

type Props = NativeStackScreenProps<RootStackParamList>

const SignIn = ({ navigation }: Props) => {
    const globalState = useSelector((state: RootState) => state.global)
    const [form, updateForm, resetForm] = useForm<FormValues>({ email: '', password: '' })

    const dispatch = useDispatch()

    const onSubmit = () => {
        if (globalState.isError) {
            dispatch(hideError())
        }
        else {
            dispatch(setError('Show Error'))
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Header title='Sign In' subtitle='Find your best ever meal' />
                <Gap height={16} />
                <View style={styles.formContainer}>
                    {globalState.isError == true && <Text>{globalState.message}</Text>}
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