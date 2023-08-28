import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, Loading } from '../../components'
import { WebView as RNWebView } from 'react-native-webview'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../router'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = NativeStackScreenProps<RootStackParamList, 'WebView'>

const WebView = ({ navigation, route }: Props) => {
    const { title, subtitle, url } = route.params

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flexGrow: 1 }}>
            <View style={styles.page}>
                <Header title={title} subtitle={subtitle} onBack={() => navigation.pop()} />
                <RNWebView
                    source={{ uri: url }}
                    startInLoadingState={true}
                    renderLoading={() => <Loading />}
                    style={{ flex: 1 }}
                />
            </View>
        </SafeAreaView>
    )
}

export default WebView

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})