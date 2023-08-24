import { Image, ImageURISource, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, ButtonType, Gap, Header, TextInput } from '../../components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { showToastMessage, useForm } from '../../utils'
import { useDispatch } from 'react-redux'
import { PhotoData, UserForm, userFilled } from '../../redux/slice/auth'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Asset, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker'

type Props = NativeStackScreenProps<RootStackParamList>

const SignUp = ({ navigation }: Props) => {
    const [form, updateForm] = useForm<UserForm>({ name: '', email: '', password: '', photo: { uri: '', type: '', name: '' } })
    const [photo, setPhoto] = useState<ImageURISource>()
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(userFilled(form))
        navigation.navigate('SignUpAddress')
    }

    const addPhoto = async () => {
        const result: ImagePickerResponse = await launchImageLibrary({ mediaType: 'photo', quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true })
        if (result.assets && result.assets.length > 0) {
            const selectedImage: Asset = result.assets[0]
            const source: ImageURISource = {
                uri: selectedImage.uri
            }
            const photoData: PhotoData = {
                uri: selectedImage.uri,
                type: selectedImage.type,
                name: selectedImage.fileName,
            }

            setPhoto(source)
            updateForm('photo', photoData)
        } else {
            showToastMessage("Gagal menggambil gambar, silahkan cek permission anda")
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
            <SafeAreaView style={{ flexGrow: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Header title='Sign Up' subtitle='Register and eat' onBack={() => { navigation.pop() }} />
                        <Gap height={24} width={'100%'} color='#FAFAFC' />
                        <View style={styles.formContainer}>
                            <TouchableOpacity activeOpacity={0.7} onPress={addPhoto}>
                                <View style={styles.photo}>
                                    <View style={styles.borderPhoto}>
                                        {photo ? (
                                            <Image source={photo} style={styles.photoUri} />
                                        ) : (
                                            <View style={styles.photoContainer}>
                                                <Text style={styles.addPhoto}>Add Photo</Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <Gap height={16} />
                            <TextInput text='Full Name' placeholder='Type your full name' value={form.name} onChangeText={(value) => { updateForm('name', value) }} />
                            <Gap height={16} />
                            <TextInput text='Email Address' placeholder='Type your email address' value={form.email} onChangeText={(value) => { updateForm('email', value) }} />
                            <Gap height={16} />
                            <TextInput text='Password' placeholder='Type your password' secureTextEntry={true} value={form.password} onChangeText={(value) => { updateForm('password', value) }} />
                            <Gap height={16} />
                            <Button text='Continue' type={ButtonType.Primary} onPress={onSubmit} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView >
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: { flex: 1 },
    formContainer: {
        paddingHorizontal: 24,
        paddingVertical: 26,
        backgroundColor: 'white',
        flex: 1
    },
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
    photoUri: {
        width: 90,
        height: 90,
        padding: 24,
        borderRadius: 45
    }
})