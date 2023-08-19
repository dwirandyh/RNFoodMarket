import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Gap, Header, TextInput, Button, ButtonType, Select } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParamList } from '../../router'
import { showToastMessage, useForm } from '../../utils'
import { UserAddressForm, userAddressFilled, userFilled } from '../../redux/slice/registration'
import { RootState, store } from '../../redux/store'
import { useAppDispatch, useAppSelector } from '../../hook'
import sendRegistrationData from '../../redux/action/registerAction'
import axios, { AxiosError } from 'axios'
import { err } from 'react-native-svg/lib/typescript/xml'
import { setLoading } from '../../redux/slice/global'

type Props = NativeStackScreenProps<RootStackParamList>

const SignUpAddress = ({ navigation }: Props) => {
    const [form, updateForm] = useForm<UserAddressForm>({ phoneNumber: '', address: '', houseNumber: '', city: 'Jakarta' })
    const dispatch = useAppDispatch()

    const onSubmit = async () => {
        try {
            dispatch(setLoading(true))
            dispatch(userAddressFilled(form))
            await dispatch(sendRegistrationData()).unwrap()

            dispatch(setLoading(false))
            showToastMessage('Registration Success')
            navigation.navigate('SignUpSuccess')
        }
        catch (error) {
            dispatch(setLoading(false))

            if (error && typeof error === 'object' && 'message' in error) {
                const errorMessage = error.message;
                showToastMessage(errorMessage as string, 'danger')
            } else {
                showToastMessage('An error occurred', 'danger');
            }
        }


    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
            <ScrollView style={{ flexGrow: 1 }}>
                <View>
                    <Header title='Address' subtitle='Make sure it’s valid' onBack={() => { navigation.pop() }} />
                    <Gap height={24} />
                    <View style={styles.formContainer}>
                        <TextInput text='Phone No.' placeholder='Type your phone number' value={form.phoneNumber} onChangeText={(value) => { updateForm('phoneNumber', value) }} />
                        <Gap height={16} />
                        <TextInput text='Address' placeholder='Type your address' value={form.address} onChangeText={(value) => { updateForm('address', value) }} />
                        <Gap height={16} />
                        <TextInput text='House No.' placeholder='Type your house number' value={form.houseNumber} onChangeText={(value) => { updateForm('houseNumber', value) }} />
                        <Gap height={16} />
                        <Select text='City' items={['Jakarta', 'Bandung', 'Surabaya', 'Lampung']} onSelect={(value) => { updateForm('city', value) }} />
                        <Gap height={16} />
                        <Button text='Sign Up Now' type={ButtonType.Primary} onPress={onSubmit} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 24,
    }
})