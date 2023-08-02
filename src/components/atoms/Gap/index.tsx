import { DimensionValue, Dimensions, View } from 'react-native'
import React from 'react'

type Props = {
    width?: DimensionValue,
    height?: number,
    color?: string
}

const index = (props: Props) => {
    const { width = 0, height = 0, color } = props

    return (
        <View style={{ width: width, height: height, backgroundColor: color }} />
    )
}

export default index