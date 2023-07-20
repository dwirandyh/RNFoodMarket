import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

interface FirstRouteProps {
    onTabShow: () => void;
}

const FirstRoute: React.FC<FirstRouteProps> = ({ onTabShow }) => {
    useEffect(() => {
        console.log("didappear")
    }, [onTabShow])

    useEffect(() => {
        console.log('didload')
    })

    return (
        <View>
            <Text>First Tab Content</Text>
        </View>
    );
};

export default React.memo(FirstRoute);
