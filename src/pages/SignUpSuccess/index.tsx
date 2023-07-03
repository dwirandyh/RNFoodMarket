import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlSuccessSignUp } from '../../assets'
import { Button, ButtonType, Gap } from '../../components'

type Props = {}

const SignUpSuccess = (props: Props) => {
    return (
        <View style={styles.page}>
            <IlSuccessSignUp style={styles.illustration} />
            <Gap height={30} />
            <View style={styles.viewContainer}>
                <Text style={styles.title}>Yeay! Completed</Text>
                <Gap height={6} />
                <Text style={styles.subtitle}>Now you are able to order some foods as a self-reward</Text>
                <Gap height={30} />
                <Button text='Find Foods' type={ButtonType.Primary} onPress={() => { }} />
            </View>
        </View>
    )
}

export default SignUpSuccess

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    illustration: {
        height: 290,
        width: 200,
    },
    viewContainer: {
        paddingHorizontal: 80
    },
    title: {
        color: '#020202',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
    },
    subtitle: {
        color: '#8D92A3',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    }
})