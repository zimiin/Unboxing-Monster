import React from 'react'
import {
    TouchableOpacity,
    Image,
} from 'react-native'

import { ICONS } from '@constants/icons'

const BackButton = () => {
    return (
        <TouchableOpacity>
            <Image
                source={ICONS.leftArrow}
                style={{
                    width: 24,
                    height: 24,
                }}
            />
        </TouchableOpacity>
    )
}

export default BackButton