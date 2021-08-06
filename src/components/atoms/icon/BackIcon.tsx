import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { ICONS } from '../../../constants/icons'

const BackIcon = () => {

    return (
        <Image
            source={ICONS.leftArrow}
            style={{
                width: 24,
                height: 24,
            }}
        />
    )
}

export default BackIcon