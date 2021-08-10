import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { ICONS } from '@constants/icons'
import FastImage from 'react-native-fast-image'

const PlusButton = ({ onPressAction }) => {
    return (
        <TouchableOpacity
            onPress={onPressAction}
        >
            <FastImage
                source={ICONS.plus}
                style={{
                    width: 16,
                    height: 16,
                }}
            />
        </TouchableOpacity>
    )
}

export default PlusButton