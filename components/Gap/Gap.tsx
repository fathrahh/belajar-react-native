import React from 'react'
import { View } from 'react-native'

interface GapProps {
    height?: string | number
    width?: string | number
}

const Gap: React.FC<GapProps> = ({ height, width }) => {
    return (
        <View style={{
            height,
            width,
        }}></View>
    )
}

export default Gap