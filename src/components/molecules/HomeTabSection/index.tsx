import React, { useCallback } from 'react'
import { View, StyleSheet, ListRenderItem, Text } from 'react-native'
import { MaterialTabBar, TabBarProps, TabItemProps, Tabs } from 'react-native-collapsible-tab-view'
import { TabName } from 'react-native-collapsible-tab-view/lib/typescript/src/types'
import HomeTabItem from '../HomeTabItem'

const HEADER_HEIGHT = 250

const DATA = [0, 1, 2, 3, 4]
const identity = (v: unknown): string => v + ''

const Header = () => {
    return <View style={styles.header} />
}

type Props = {
    header: ((props: TabBarProps<string>) => React.ReactElement<any, string>)
}

const HomeTabSection = ({ header }: Props) => {
    const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
        return (
            <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
        )
    }, [])

    const makeLabel = useCallback(
        <T extends TabName>(label: string) => (props: TabItemProps<T>) => (
            <HomeTabItem
                index={props.index}
                indexDecimal={props.indexDecimal}
                label={label}
            />
        ),
        []
    )

    return (
        <Tabs.Container renderHeader={header} renderTabBar={(props) => <MaterialTabBar {...props} scrollEnabled />}>
            <Tabs.Tab name="New Teste" label={makeLabel('New Teste')}>
                <Tabs.FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={identity}
                />
            </Tabs.Tab>
            <Tabs.Tab name="Popular" label={makeLabel('Popular')}>
                <Tabs.ScrollView>
                    <View style={[styles.box, styles.boxA]} />
                    <View style={[styles.box, styles.boxB]} />
                </Tabs.ScrollView>
            </Tabs.Tab>
            <Tabs.Tab name="Recommended" label={makeLabel('Recommended')}>
                <Tabs.ScrollView>
                    <View style={[styles.box, styles.boxA]} />
                    <View style={[styles.box, styles.boxB]} />
                </Tabs.ScrollView>
            </Tabs.Tab>
        </Tabs.Container>
    )
}

const styles = StyleSheet.create({
    box: {
        height: 250,
        width: '100%',
    },
    boxA: {
        backgroundColor: 'white',
    },
    boxB: {
        backgroundColor: '#D8D8D8',
    },
    header: {
        height: HEADER_HEIGHT,
        width: '100%',
        backgroundColor: '#2196f3',
    },
})

export default HomeTabSection