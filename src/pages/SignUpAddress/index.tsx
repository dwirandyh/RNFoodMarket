import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Gap, Header, TextInput, Button, ButtonType, Select } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { RootStackParamList } from '../../router'

type Props = NativeStackScreenProps<RootStackParamList>

const SignUpAddress = ({ navigation }: Props) => {
    return (
        <View>
            <Header title='Address' subtitle='Make sure it’s valid' onBack={() => { navigation.pop() }} />
            <Gap height={24} />
            <View style={styles.formContainer}>
                <TextInput text='Phone No.' placeholder='Type your phone number' />
                <Gap height={16} />
                <TextInput text='Address' placeholder='Type your address' />
                <Gap height={16} />
                <TextInput text='House No.' placeholder='Type your house number' />
                <Gap height={16} />
                <Select text='City' items={['Jakarta', 'Bandung', 'Surabaya', 'Lampung']} />
                <Gap height={16} />
                <Button text='Sign Up Now' type={ButtonType.Primary} onPress={() => { }} />
            </View>
        </View>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 24,
    }
})