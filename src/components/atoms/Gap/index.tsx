import { View } from 'react-native'
import React from 'react'

type Props = {
    width?: number,
    height?: number
}

const index = (props: Props) => {
    const { width = 0, height = 0 } = props

    return (
        <View style={{ width: width, height: height }} />
    )
}

export default index