import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { IcHome, IcHomeActive, IcOrder, IcOrderActive, IcProfile, IcProfileActive } from '../../../assets'
import { Gap } from '../../atoms'


type Props = BottomTabBarProps

type TabProps = {
    title: string,
    isFocused: boolean
}

const TabIcon = ({ title, isFocused }: TabProps) => {
    switch (title) {
        case 'Home':
            return isFocused ? <IcHomeActive /> : <IcHome />
        case 'Order':
            return isFocused ? <IcOrderActive /> : <IcOrder />
        case 'Profile':
            return isFocused ? <IcProfileActive /> : <IcProfile />
        default:
            return <IcProfile />
    }
}

const BottomNavigator = ({ state, descriptors, navigation }: Props) => {
    return (
        <View style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            paddingTop: 12,
            paddingBottom: 2,
            paddingHorizontal: 10,
            justifyContent: 'space-between',
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = route.name

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <TabIcon title={label} isFocused={isFocused} />
                        <Gap height={2} />
                        <Text style={{ textAlign: 'center', color: isFocused ? '#FFC700' : '#E2E2E2' }}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>

    )
}

export default BottomNavigator

const styles = StyleSheet.create({})