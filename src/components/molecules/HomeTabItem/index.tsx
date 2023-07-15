import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TabItemProps, useFocusedTab } from 'react-native-collapsible-tab-view'
import { TabName } from 'react-native-collapsible-tab-view/lib/typescript/src/types'

type Props = Pick<TabItemProps<TabName>, 'index' | 'indexDecimal'> & { label: string }

const HomeTabItem = ({ label, index, indexDecimal }: Props) => {

    const focusedTab = useFocusedTab()

    return (
        <View>
            <Text style={focusedTab == label ? styles.selectedTabTitle : styles.unselectedTabTitle}>{label}</Text>
        </View>
    )
}

export default HomeTabItem

const styles = StyleSheet.create({
    selectedTabTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202'
    },
    unselectedTabTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#8D92A3'
    }
})