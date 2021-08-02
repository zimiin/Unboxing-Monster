import React from 'react'
import {
    Image,
} from 'react-native'

import { IMAGES } from '../../constants/images'

// 로고 크기 받아와서 스타일 적용
const Logo = () => {
    return (
        <Image
            source={IMAGES.logo}
            style={{
                flex: 1,
                width: undefined,
                height: undefined,
            }}
        />
    )
}

export default Logo