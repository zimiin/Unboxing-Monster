import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { ICONS } from '@constants/icons'
import FastImage from 'react-native-fast-image'

const MinusButton = ({onPress}: {onPress: () => void}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <FastImage
                source={ICONS.minus}
                style={{
                    width: 16,
                    height: 16,
                }}
            />
        </TouchableOpacity>
    )
}

export default MinusButton